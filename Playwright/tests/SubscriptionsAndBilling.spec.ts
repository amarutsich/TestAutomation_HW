import { test } from './BaseTest'
import { expect } from "@playwright/test"



test.describe("Create Subscription", () => {
    test.beforeEach(async ({pageManager}) => {
        await pageManager.page.goto("https://test-idp.eu10.revenue.cloud.sap/launchpad#Shell-home");

        await pageManager.loginPageStep1.Form.Login.fill("anton.leonenko@clarity.cx");

        await pageManager.loginPageStep1.Form.ContinueButton.click();

        await pageManager.loginPageStep2.Form.Password.fill("Greedis9good");

        await pageManager.loginPageStep2.Form.SignInButton.click()
    });

    test("Check that created subscription have bills", async ({pageManager}) => { 
        test.slow();

        await pageManager.homePage.Tiles.ManageSubscriptions.click();

        await pageManager.manageSubscriptionsPage.Buttons.Create.click();

        //To carry out in separate function in NewSubscriptionForm.ts *Start*

        await pageManager.createSubscriptionPopup.SelectHelpButtons.CustomerSearchHelp.click();

        await pageManager.createSubscriptionPopup.Selections.FirstCustomer.click();

        await pageManager.createSubscriptionPopup.SelectHelpButtons.MarketDropdown.click();

        await pageManager.createSubscriptionPopup.Selections.FirstMarket.click();

        const market = await pageManager.createSubscriptionPopup.Fields.MarketField.getAttribute("value");

        await pageManager.createSubscriptionPopup.SelectHelpButtons.ProductSearchHelp.click();

        await pageManager.createSubscriptionPopup.Selections.FirstProduct.click();

        await pageManager.createSubscriptionPopup.Fields.ValidFromField.fill(todayDate());

        await pageManager.createSubscriptionPopup.Buttons.Continue.click();

        await pageManager.newSubscriptionForm.Fields.CustomerPurchaseReference.fill("Customer Reference");

        await pageManager.newSubscriptionForm.Fields.ReferenceDate.fill(todayDate());

        await pageManager.newSubscriptionForm.Fields.WithdrawalPeriod.fill("12");

        await pageManager.newSubscriptionForm.Fields.TermOfNotice.fill("5");

        await pageManager.newSubscriptionForm.Fields.MinimumTerm.fill("5");

        await pageManager.newSubscriptionForm.Fields.RenewalTerm.fill("2");

        await pageManager.newSubscriptionForm.Fields.ExpectedTerm.fill("10");

        await pageManager.newSubscriptionForm.Fields.BillRecurringChargesTogether.fill("1");

        await pageManager.newSubscriptionForm.Fields.BillingCutoverDate.fill(todayDate());

        await pageManager.page.keyboard.press("Enter");

        await pageManager.newSubscriptionForm.Buttons.CreateCustomReferece.click();

        await pageManager.newSubscriptionForm.Fields.FirstReferenceType.fill("CustomerID");

        await pageManager.newSubscriptionForm.Fields.FirstID.fill("1");

        await pageManager.newSubscriptionForm.Buttons.CreatePauseSchedule.click();

        await pageManager.newSubscriptionForm.Fields.FirstPauseDate.fill(todayDate());

        await pageManager.newSubscriptionForm.Fields.FirstResumeData.fill(todayDatePlusYear());

        await pageManager.newSubscriptionForm.Fields.FirstReasonforPause.fill("Suspension");

        await pageManager.newSubscriptionForm.Buttons.CreateNotification.click();

        await pageManager.newSubscriptionForm.NewNotificationPopup.TagsField.fill("Tag");

        await pageManager.newSubscriptionForm.NewNotificationPopup.SkipDuringPauseCheckbox.click();

        await pageManager.newSubscriptionForm.NewNotificationPopup.CreateButton.click();

        await pageManager.newSubscriptionForm.Buttons.CreateSubscription.click();

        //To carry out in separate function *End*

        await pageManager.page.waitForTimeout(3000);

        const subscriptionID = await pageManager.createdSubscriptionForm.Fields.SubscriptionID.innerText();

        //To carry out in separate function in ManageBillingData.ts *Start*

        await pageManager.baseApplicationPage.HeaderElements.HomeButton.click();

        await pageManager.homePage.Tiles.ManageBillingData.click();

        await pageManager.manageBillingDataPage.Fields.MarketsFilter.press("Control+A");

        await pageManager.manageBillingDataPage.Fields.MarketsFilter.press("Backspace");

        await pageManager.manageBillingDataPage.Fields.MarketsFilter.fill(market);

        await pageManager.page.keyboard.press("Enter");

        await pageManager.manageBillingDataPage.Fields.SubscriptionIdFilter.click();

        await pageManager.manageBillingDataPage.Fields.SubscriptionIdFilter.fill(subscriptionID);

        await pageManager.page.keyboard.press("Enter");

        await pageManager.manageBillingDataPage.Buttons.GoButton.click();

        //To carry out in separate function *End*

        await pageManager.page.waitForTimeout(3000);

        let billsQuantity = await pageManager.manageBillingDataPage.Fields.BillsCounter.innerText();

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