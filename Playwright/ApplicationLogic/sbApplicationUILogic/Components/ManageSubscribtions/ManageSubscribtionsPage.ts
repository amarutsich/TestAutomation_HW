import { BaseApplicationPage } from "../../Pages/BaseApplicationPage";

export class ManageSubscriptionsPage extends BaseApplicationPage{
    constructor(page){
        super(page)
    }
    
    Buttons = {
        Create : this.page.locator('#application-Subscriptions-list-component---subscriptionListView--btnCreateSubscription-BDI-content')
    }

}