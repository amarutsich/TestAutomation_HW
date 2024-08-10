import { test } from './BaseTest'
import { expect } from "@playwright/test"



test.describe("Save a quote", () => {
    test.beforeEach(async ({cpqPageManager}) => {

        await cpqPageManager.loginPage.Form.Username.fill("aleonenko");

        await cpqPageManager.loginPage.Form.Password.fill("StrongPassword123!");

        await cpqPageManager.loginPage.Form.LoginButton.click();
    });

    test("Save quote with ASUS Zan", async ({cpqPageManager}) => { 
        test.slow();

        await OpenSubcategory({cpqPageManager}, "QA: Hardware", "QA:Laptops");

        await PerformActionInCatalog({cpqPageManager}, "ASUS Zan", "Configure");

        await cpqPageManager.aSUS_Zan.SelectAttributes.SelectStorage("HD150");

        await cpqPageManager.aSUS_Zan.SelectAttributes.SelectOpticalDrive("DVD12X");

        await cpqPageManager.page.waitForTimeout(2000); //price of product is updated with delay

        let price = await cpqPageManager.productConfigurationPage.Fields.Total.innerText();

        price = price.slice(1);

        await cpqPageManager.productConfigurationPage.Buttons.AddToQuote.click();

        await cpqPageManager.quoteConfigurationPage.Fields.Status.selectOption({label: "VN Preparing"});

        await expect(cpqPageManager.quoteConfigurationPage.Fields.DateModified).toHaveText(date());

        await expect(cpqPageManager.quoteConfigurationPage.Containers.Products.locator('"ASUL"').last()).toBeVisible();

        await expect(cpqPageManager.quoteConfigurationPage.Containers.Products.locator('"-DVD"').last()).toBeVisible();

        await expect(cpqPageManager.quoteConfigurationPage.Containers.Totals.locator(`"${price}"`).last()).toBeVisible();

        await cpqPageManager.quoteConfigurationPage.Buttons.SaveQuote.click();

    })
})

const OpenSubcategory = async ({cpqPageManager}, category : string, subcategory : string) => {

    await cpqPageManager.baseApplicationPage.BaseContainers.CategoriesList.locator(`//a[text()="${category}"]//parent::*/a[@title = "Collapse/Expand Subcategory"]`).click();

    await cpqPageManager.baseApplicationPage.BaseContainers.CategoriesList.locator(`"${subcategory}"`).click();
}

const PerformActionInCatalog = async ({cpqPageManager}, product : string, action : string) => {

    await cpqPageManager.baseApplicationPage.BaseContainers.CatalogMain.locator(`//a[text()="${product}"]//parent::*/parent::*/parent::*//a[text()="${action}"]`).click();

}

const date = () => {

    const date = new Date();

    const strDate = 
    date.getDate().toString().padStart(2, "0") + "/" +
    (date.getMonth() + 1).toString().padStart(2, "0") + "/" + 
    date.getFullYear().toString().slice(-2);

    return strDate;
}