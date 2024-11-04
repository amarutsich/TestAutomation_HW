import { test } from './BaseTest'
import { expect } from "@playwright/test"



test.describe("Create Subscription", () => {
    test.beforeEach(async ({sbPageManager}) => {

        await sbPageManager.loginPageStep1.Form.Login.fill("anton.leonenko@clarity.cx");

        await sbPageManager.loginPageStep1.Form.ContinueButton.click();

        await sbPageManager.loginPageStep2.Form.Password.fill("Greedis9good");

        await sbPageManager.loginPageStep2.Form.SignInButton.click();
    });

    test("Check that created subscription have bills", async ({sbPageManager}) => { 
        test.slow();

        await sbPageManager.homePage.Tiles.ManageSubscriptions.click();

        await sbPageManager.manageSubscriptionsPage.Buttons.Create.click();

        //To carry out in separate function in NewSubscriptionForm.ts *Start*

        await sbPageManager.createSubscriptionPopup.SelectHelpButtons.CustomerSearchHelp.click();

        await sbPageManager.createSubscriptionPopup.Selections.FirstCustomer.click();

        await sbPageManager.createSubscriptionPopup.SelectHelpButtons.MarketDropdown.click();

        await sbPageManager.createSubscriptionPopup.Selections.FirstMarket.click();

        const market = await sbPageManager.createSubscriptionPopup.Fields.MarketField.getAttribute("value");

        await sbPageManager.createSubscriptionPopup.SelectHelpButtons.ProductSearchHelp.click();

        await sbPageManager.createSubscriptionPopup.Selections.FirstProduct.click();

        await sbPageManager.createSubscriptionPopup.Fields.ValidFromField.fill(todayDate());

        await sbPageManager.createSubscriptionPopup.Buttons.Continue.click();

        await sbPageManager.newSubscriptionForm.Fields.CustomerPurchaseReference.fill("Customer Reference");

        await sbPageManager.newSubscriptionForm.Fields.ReferenceDate.fill(todayDate());

        await sbPageManager.newSubscriptionForm.Fields.WithdrawalPeriod.fill("12");

        await sbPageManager.newSubscriptionForm.Fields.TermOfNotice.fill("5");

        await sbPageManager.newSubscriptionForm.Fields.MinimumTerm.fill("5");

        await sbPageManager.newSubscriptionForm.Fields.RenewalTerm.fill("2");

        await sbPageManager.newSubscriptionForm.Fields.ExpectedTerm.fill("10");

        await sbPageManager.newSubscriptionForm.Fields.BillRecurringChargesTogether.fill("1");

        await sbPageManager.newSubscriptionForm.Fields.BillingCutoverDate.fill(todayDate());

        await sbPageManager.page.keyboard.press("Enter");

        await sbPageManager.newSubscriptionForm.Buttons.CreateCustomReferece.click();

        await sbPageManager.newSubscriptionForm.Fields.FirstReferenceType.fill("CustomerID");

        await sbPageManager.newSubscriptionForm.Fields.FirstID.fill("1");

        await sbPageManager.newSubscriptionForm.Buttons.CreatePauseSchedule.click();

        await sbPageManager.newSubscriptionForm.Fields.FirstPauseDate.fill(todayDate());

        await sbPageManager.newSubscriptionForm.Fields.FirstResumeData.fill(todayDatePlusYear());

        await sbPageManager.newSubscriptionForm.Fields.FirstReasonforPause.fill("Suspension");

        await sbPageManager.newSubscriptionForm.Buttons.CreateNotification.click();

        await sbPageManager.newSubscriptionForm.NewNotificationPopup.TagsField.fill("Tag");

        await sbPageManager.newSubscriptionForm.NewNotificationPopup.SkipDuringPauseCheckbox.click();

        await sbPageManager.newSubscriptionForm.NewNotificationPopup.CreateButton.click();

        await sbPageManager.newSubscriptionForm.Buttons.CreateSubscription.click();

        //To carry out in separate function *End*

        await sbPageManager.page.waitForTimeout(3000);

        const subscriptionID = await sbPageManager.createdSubscriptionForm.Fields.SubscriptionID.innerText();

        //To carry out in separate function in ManageBillingData.ts *Start*

        await sbPageManager.baseApplicationPage.HeaderElements.HomeButton.click();

        await sbPageManager.homePage.Tiles.ManageBillingData.click();

        await sbPageManager.manageBillingDataPage.Fields.MarketsFilter.press("Control+A");

        await sbPageManager.manageBillingDataPage.Fields.MarketsFilter.press("Backspace");

        await sbPageManager.manageBillingDataPage.Fields.MarketsFilter.fill(market);

        await sbPageManager.page.keyboard.press("Enter");

        await sbPageManager.manageBillingDataPage.Fields.SubscriptionIdFilter.click();

        await sbPageManager.manageBillingDataPage.Fields.SubscriptionIdFilter.fill(subscriptionID);

        await sbPageManager.page.keyboard.press("Enter");

        await sbPageManager.manageBillingDataPage.Buttons.GoButton.click();

        //To carry out in separate function *End*

        await sbPageManager.page.waitForTimeout(3000);

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