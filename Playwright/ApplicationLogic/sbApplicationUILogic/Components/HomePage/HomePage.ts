import { BaseApplicationPage } from "../../Pages/BaseApplicationPage";

export class HomePage extends BaseApplicationPage{
    constructor(page){
        super(page);
    }

    // Containers = {
    //     SubscriptionsAndBillingGroup : this.page.locator('//div[@aria-label="Subscriptions and Billing Group"]'),
    //     PricingGroup : this.page.locator('//div[@aria-label="Pricing Group"]')
    // }

    Tiles = {
        ManageSubscriptions : this.page.locator('li[data-help-id = "sap.ui.ngom.subscription"] div.sapUshellTileInner a'),
        ManageBillingData : this.page.locator('li[data-help-id = "sap.ui.ngom.billsapp"] div.sapUshellTileInner a'), 
    }
}