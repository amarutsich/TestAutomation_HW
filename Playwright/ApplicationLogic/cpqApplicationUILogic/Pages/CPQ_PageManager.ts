import { Page } from "@playwright/test";
import { LoginPage } from "./LoginPage";
import { BaseApplicationPage } from "./BaseApplicationPage";
import { ProductConfigurationPage } from "../Components/ProductConfigurationPage/ProductConfigurationPage";
import { QuoteConfigurationPage } from "../Components/QuoteConfigurationPage/QuoteConfigurationPAge";
import { ASUS_Zan } from "../Components/Products/ASUS_Zan";

export class CPQ_PageManager {
    page: Page;
    loginPage;
    baseApplicationPage;
    productConfigurationPage;
    quoteConfigurationPage;
    aSUS_Zan;

    constructor(page){
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.baseApplicationPage = new BaseApplicationPage(page);
        this.productConfigurationPage = new ProductConfigurationPage(page);
        this.quoteConfigurationPage = new QuoteConfigurationPage(page);
        this.aSUS_Zan = new ASUS_Zan(page);
    }

}