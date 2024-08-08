import { BaseApplicationPage } from "../../Pages/BaseApplicationPage";

export class CreatedSubscriptionForm extends BaseApplicationPage{
    constructor(page){
        super(page)
    }

    Containers = {
        HeaderTitle : this.page.locator("#application-Subscriptions-list-component---subscriptionView--subscriptionDetailPageLayout-headerTitle")
    }

    Fields = {
        SubscriptionID : this.Containers.HeaderTitle.locator("#application-Subscriptions-list-component---subscriptionView--subscriptionDocumentNumber-inner")
    }
}