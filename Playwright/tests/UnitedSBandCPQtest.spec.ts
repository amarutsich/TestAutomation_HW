import { test } from './BaseTest'
import { expect } from "@playwright/test"



test.describe("United SB and CPQ test", () => {
    test("Check that created subscription have bills", async ({sbPageManager, cpqPageManager}) => {
        test.setTimeout(200000);

        //First SB part
        await sbPageManager.homePage.Tiles.ManageSubscriptions.click();

        await sbPageManager.manageSubscriptionsPage.Buttons.Create.click();

        const market = await sbPageManager.createSubscriptionPopup.fillInCreateSubscriptionPopup(todayDate());

        await sbPageManager.newSubscriptionForm.createNewSubscription(todayDate(), todayDatePlusYear());

        //First CPQ part
        await OpenSubcategory(cpqPageManager, "QA: Hardware", "QA:Laptops");

        await PerformActionInCatalog(cpqPageManager, "ASUS Zan", "Configure");

        await cpqPageManager.aSUS_Zan.SelectAttributes.SelectStorage("HD150");

        await cpqPageManager.aSUS_Zan.SelectAttributes.SelectOpticalDrive("DVD12X");

        //Second SB part
        const subscriptionID = await sbPageManager.createdSubscriptionForm.Fields.SubscriptionID.innerText();

        await sbPageManager.baseApplicationPage.HeaderElements.HomeButton.click();

        await sbPageManager.homePage.Tiles.ManageBillingData.click();

        await sbPageManager.manageBillingDataPage.searchForBills(market, subscriptionID);

        //Second CPQ part
        let price = await cpqPageManager.productConfigurationPage.Fields.Total.innerText();

        price = price.slice(1);

        await cpqPageManager.productConfigurationPage.Buttons.AddToQuote.click();

        await cpqPageManager.quoteConfigurationPage.Fields.Status.selectOption({label: "VN Preparing"});

        await expect(cpqPageManager.quoteConfigurationPage.Fields.DateModified).toHaveText(date());

        await expect(cpqPageManager.quoteConfigurationPage.Containers.Products.locator('"ASUL"').last()).toBeVisible();

        await expect(cpqPageManager.quoteConfigurationPage.Containers.Products.locator('"-DVD"').last()).toBeVisible();

        await expect(cpqPageManager.quoteConfigurationPage.Containers.Totals.locator(`"${price}"`).last()).toBeVisible();

        await cpqPageManager.quoteConfigurationPage.Buttons.SaveQuote.click();

        //Last SB part
        let billsQuantity = await sbPageManager.manageBillingDataPage.Fields.BillsCounter.innerText();

        billsQuantity = Number(billsQuantity.slice(7, -1));

        await expect(billsQuantity).toBeGreaterThan(0); 

        
     })
    
})

const todayDate = () => {

    const date = new Date();

    const strDate = (date.getMonth() + 1).toString().padStart(2, "0") +
    date.getDate().toString().padStart(2, "0") + 
    date.getFullYear().toString();

    return strDate;
}

const todayDatePlusYear = () => {

    const date = new Date();

    const strDate = (date.getMonth() + 1).toString().padStart(2, "0") +
    date.getDate().toString().padStart(2, "0") + 
    (date.getFullYear() + 1).toString();

    return strDate;
}

const OpenSubcategory = async (cpqPageManager, category : string, subcategory : string) => {

    await cpqPageManager.baseApplicationPage.BaseContainers.CategoriesList.locator(`//a[text()="${category}"]//parent::*/a[@title = "Collapse/Expand Subcategory"]`).click();

    await cpqPageManager.baseApplicationPage.BaseContainers.CategoriesList.locator(`"${subcategory}"`).click();
}

const PerformActionInCatalog = async (cpqPageManager, product : string, action : string) => {

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