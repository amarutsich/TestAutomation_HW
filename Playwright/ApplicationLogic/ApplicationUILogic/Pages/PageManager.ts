import { Page } from "@playwright/test";
import { LoginPageStep1 } from "./LoginPageStep1";
import { BaseApplicationPage } from "./BaseApplicationPage";
import { LoginPageStep2 } from "./LoginPageStep2";
import { HomePage } from "../Components/HomePage/HomePage";
import { ManageSubscriptionsPage } from "../Components/ManageSubscribtions/ManageSubscribtionsPage";
import { CreateSubscriptionPopup } from "../Components/ManageSubscribtions/CreateSubscriptionPopup";
import { NewSubscriptionForm } from "../Components/NewSubscriptionForm/NewSubscriptionForm";
import { CreatedSubscriptionForm } from "../Components/ManageSubscribtions/CreatedSubscriptionForm";
import { ManageBillingDataPage } from "../Components/ManageBillingData/ManageBillingDataPage";

export class PageManager {
    page: Page;
    loginPageStep1;
    loginPageStep2;
    baseApplicationPage;
    homePage;
    manageSubscriptionsPage;
    createSubscriptionPopup;
    newSubscriptionForm;
    createdSubscriptionForm;
    manageBillingDataPage;

    constructor(page){
        this.page = page;
        this.loginPageStep1 = new LoginPageStep1(page);
        this.loginPageStep2 = new LoginPageStep2(page);
        this.baseApplicationPage = new BaseApplicationPage(page);
        this.homePage = new HomePage(page);
        this.manageSubscriptionsPage = new ManageSubscriptionsPage(page);
        this.createSubscriptionPopup = new CreateSubscriptionPopup(page);
        this.newSubscriptionForm = new NewSubscriptionForm(page);
        this.createdSubscriptionForm = new CreatedSubscriptionForm(page);
        this.manageBillingDataPage = new ManageBillingDataPage(page);
    }

}