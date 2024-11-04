import { BaseApplicationPage } from "../../Pages/BaseApplicationPage";

export class NewSubscriptionForm extends BaseApplicationPage{
    constructor(page){
        super(page)
    }

    Containers = {
        HeaderInfoSection : this.page.locator("#application-Subscriptions-list-component---subscriptionView--subscriptionDetailsTabHeaderInfo"),
        SubscriptionTermsSection : this.page.locator("#application-Subscriptions-list-component---subscriptionView--subscriptionDetailsIconTabSubSectionSubscriptionTerms"),
        BillingSection : this.page.locator("#application-Subscriptions-list-component---subscriptionView--subscriptionDetailsIconTabSubSectionBilling"),
        CustomReferencesSection : this.page.locator("#application-Subscriptions-list-component---subscriptionView--subscriptionHeaderCustomReferencesSection"),
        PauseScheduleSection : this.page.locator("#application-Subscriptions-list-component---subscriptionView--subscriptionTabSectionPauseSchedule"),
        NotificationsSection : this.page.locator("#application-Subscriptions-list-component---subscriptionView--notificationSettingsSection"),
    }

    Tables = {
        CustomReferencesTable : this.Containers.CustomReferencesSection.locator("#__component50---Component--customReferencesTable-tblBody"),
        PauseScheduleTable : this.Containers.PauseScheduleSection.locator("#application-Subscriptions-list-component---subscriptionView--PauseScheduleView--pauseScheduleTable-tblBody")
    }

    Buttons = {
        CreateCustomReferece : this.Containers.CustomReferencesSection.locator('//bdi[text()="Create"]'),
        CreatePauseSchedule : this.Containers.PauseScheduleSection.locator("#application-Subscriptions-list-component---subscriptionView--PauseScheduleView--BtnAddPause-BDI-content"),
        CreateNotification : this.Containers.NotificationsSection.locator("#application-Subscriptions-list-component---subscriptionView--notificationsView--createButton-BDI-content"),
        CreateSubscription : this.page.locator("#application-Subscriptions-list-component---subscriptionView--BtnCreateSubscription")
    }
    
    Fields = {
        CustomerPurchaseReference : this.Containers.HeaderInfoSection.locator('#application-Subscriptions-list-component---subscriptionView--subscriptionDetailsTabHeaderInfoDetailView--customerPurchaseReferenceInput-inner'),
        ReferenceDate : this.Containers.HeaderInfoSection.locator("#application-Subscriptions-list-component---subscriptionView--subscriptionDetailsTabHeaderInfoDetailView--customerPurchaseReferenceDatePicker-inner"),
        WithdrawalPeriod : this.Containers.SubscriptionTermsSection.locator("#application-Subscriptions-list-component---subscriptionView--subscriptionTermsView--withdrawalPeriodInput-inner"),
        TermOfNotice : this.Containers.SubscriptionTermsSection.locator("#application-Subscriptions-list-component---subscriptionView--subscriptionTermsView--termOfNoticeInput-inner"),
        MinimumTerm : this.Containers.SubscriptionTermsSection.locator("#application-Subscriptions-list-component---subscriptionView--subscriptionTermsView--contractTermPeriodInput-inner"),
        RenewalTerm : this.Containers.SubscriptionTermsSection.locator("#application-Subscriptions-list-component---subscriptionView--subscriptionTermsView--renewalTermPeriodInput-inner"),
        ExpectedTerm : this.Containers.SubscriptionTermsSection.locator("#application-Subscriptions-list-component---subscriptionView--subscriptionTermsView--expectedTermPeriodInput-inner"),
        BillRecurringChargesTogether : this.Containers.BillingSection.locator("#application-Subscriptions-list-component---subscriptionView--BillingView--numberOfCyclesBilledTogether-inner"),
        BillingCutoverDate : this.Containers.BillingSection.locator("#application-Subscriptions-list-component---subscriptionView--BillingView--billingCutoverDate-inner"),
        FirstReferenceType : this.Containers.CustomReferencesSection.locator("//tr[1]/td[2]//input"),
        FirstID : this.Containers.CustomReferencesSection.locator("//tr[1]/td[3]//input"),
        FirstPauseDate : this.Containers.PauseScheduleSection.locator("//tr[1]/td[2]//input"),
        FirstResumeData : this.Containers.PauseScheduleSection.locator("//tr[1]/td[3]//input"),
        FirstReasonforPause : this.Containers.PauseScheduleSection.locator("//tr[1]/td[4]//input"),
    }
    
    NewNotificationPopup = {
        TagsField : this.page.locator("#application-Subscriptions-list-component---subscriptionView--notificationsView--notificationDialogView--tagsMultiInput-inner"),
        SkipDuringPauseCheckbox : this.page.locator("#application-Subscriptions-list-component---subscriptionView--notificationsView--notificationDialogView--tagsMultiInput-inner"),  
        CreateButton : this.page.locator("#application-Subscriptions-list-component---subscriptionView--notificationsView--notificationDialogView--createButton")
    }

    async createNewSubscription(todayDate : string, todayDatePlusYear : string) {
        await this.Fields.CustomerPurchaseReference.fill("Customer Reference");

        await this.Fields.ReferenceDate.fill(todayDate);

        await this.Fields.WithdrawalPeriod.fill("12");

        await this.Fields.TermOfNotice.fill("5");

        await this.Fields.MinimumTerm.fill("5");

        await this.Fields.RenewalTerm.fill("2");

        await this.Fields.ExpectedTerm.fill("10");

        await this.Fields.BillRecurringChargesTogether.fill("1");

        await this.Fields.BillingCutoverDate.fill(todayDate);

        await this.page.keyboard.press("Enter");

        await this.Buttons.CreateCustomReferece.click();

        await this.Fields.FirstReferenceType.fill("CustomerID");

        await this.Fields.FirstID.fill("1");

        await this.Buttons.CreatePauseSchedule.click();

        await this.Fields.FirstPauseDate.fill(todayDate);

        await this.Fields.FirstResumeData.fill(todayDatePlusYear);

        await this.Fields.FirstReasonforPause.fill("Suspension");

        await this.Buttons.CreateNotification.click();

        await this.NewNotificationPopup.TagsField.fill("Tag");

        await this.NewNotificationPopup.SkipDuringPauseCheckbox.click();

        await this.NewNotificationPopup.CreateButton.click();

        await this.Buttons.CreateSubscription.click();

    }
}