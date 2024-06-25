import { test } from './BaseTest'
import { expect } from "@playwright/test"



test.describe("Save a quote", () => {
    test.beforeEach(async ({pageManager}) => {
        await pageManager.page.goto("https://claritylabs-tst.cpq.cloud.sap/Login.aspx");

        await pageManager.loginPage.Form.Username.fill("aleonenko");

        await pageManager.loginPage.Form.Password.fill("StrongPassword123!");

        await pageManager.loginPage.Form.LoginButton.click();
    });

    test("Save quote with ASUS Zan", async ({pageManager}) => { 

        await OpenSubcategory({pageManager}, "QA: Hardware", "QA:Laptops");

        await PerformActionInCatalog({pageManager}, "ASUS Zan", "Configure");

        await pageManager.aSUS_Zan.SelectAttributes.SelectStorage("HD150");

        await pageManager.aSUS_Zan.SelectAttributes.SelectOpticalDrive("DVD12X");

        await pageManager.page.waitForTimeout(2000); //price of product is updated with delay

        let price = await pageManager.productConfigurationPage.Fields.Total.innerText();

        price = price.slice(1);

        await pageManager.productConfigurationPage.Buttons.AddToQuote.click();

        await pageManager.quoteConfigurationPage.Fields.Status.selectOption({label: "VN Preparing"});

        await expect(pageManager.quoteConfigurationPage.Fields.DateModified).toHaveText(date());

        await expect(pageManager.quoteConfigurationPage.Containers.Products.locator('"ASUL"').last()).toBeVisible();

        await expect(pageManager.quoteConfigurationPage.Containers.Products.locator('"-DVD"').last()).toBeVisible();

        await expect(pageManager.quoteConfigurationPage.Containers.Totals.locator(`"${price}"`).last()).toBeVisible();

        await pageManager.quoteConfigurationPage.Buttons.SaveQuote.click();

    })
})

const OpenSubcategory = async ({pageManager}, category : string, subcategory : string) => {

    await pageManager.baseApplicationPage.BaseContainers.CategoriesList.locator(`//a[text()="${category}"]//parent::*/a[@title = "Collapse/Expand Subcategory"]`).click();

    await pageManager.baseApplicationPage.BaseContainers.CategoriesList.locator(`"${subcategory}"`).click();
}

const PerformActionInCatalog = async ({pageManager}, product : string, action : string) => {

    await pageManager.baseApplicationPage.BaseContainers.CatalogMain.locator(`//a[text()="${product}"]//parent::*/parent::*/parent::*//a[text()="${action}"]`).click();

}

const date = () => {

    const date = new Date();

    const strDate = 
    date.getDate().toString().padStart(2, "0") + "/" +
    (date.getMonth() + 1).toString().padStart(2, "0") + "/" + 
    date.getFullYear().toString().slice(-2);

    return strDate;
}