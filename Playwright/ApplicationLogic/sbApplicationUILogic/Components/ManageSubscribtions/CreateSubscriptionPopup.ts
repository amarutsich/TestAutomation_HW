import { BaseApplicationPage } from "../../Pages/BaseApplicationPage";

export class CreateSubscriptionPopup extends BaseApplicationPage{
    constructor(page){
        super(page)
    }

    Containers = {
        CustomersTable : this.page.locator("#application-Subscriptions-list-component---subscriptionListView--createSubscriptionView--customersInput--customerValueHelpDialog--customersTable-tblBody"),
        MarketsList : this.page.locator("#application-Subscriptions-list-component---subscriptionListView--createSubscriptionView--marketComboBox-popup-list-listUl"),
        ProductList : this.page.locator("#application-Subscriptions-list-component---subscriptionListView--createSubscriptionView--productList-listUl")
    }

    SelectHelpButtons = {
       CustomerSearchHelp : this.page.locator("#application-Subscriptions-list-component---subscriptionListView--createSubscriptionView--customersInput span"),
       MarketDropdown : this.page.locator("#application-Subscriptions-list-component---subscriptionListView--createSubscriptionView--marketComboBox-arrow"),
       ProductSearchHelp : this.page.locator("#application-Subscriptions-list-component---subscriptionListView--createSubscriptionView--productInput-vhi")
    }

    Selections = {
        FirstCustomer : this.Containers.CustomersTable.locator('(//tr[@role="row"])[2]/td[2]'),
        FirstMarket : this.Containers.MarketsList.locator('(//li[@role="option"])[1]'),
        FirstProduct : this.Containers.ProductList.locator('(//li[@role="listitem"])[1]')
    }

    Fields = {
        MarketField : this.page.locator("#application-Subscriptions-list-component---subscriptionListView--createSubscriptionView--marketComboBox-inner"),
        ValidFromField : this.page.locator("#application-Subscriptions-list-component---subscriptionListView--createSubscriptionView--validFromDatePicker-inner"),
        InitialFixedTermField : this.page.locator("#application-Subscriptions-list-component---subscriptionListView--createSubscriptionView--fixedTermInput-inner")
    }

    Buttons = {
        Continue : this.page.locator("#application-Subscriptions-list-component---subscriptionListView--createSubscriptionView--btnCreateSubscriptionOkDialog-BDI-content")
    }

    async fillInCreateSubscriptionPopup(todayDate : string){
        await this.SelectHelpButtons.CustomerSearchHelp.click();

        await this.Selections.FirstCustomer.click();

        await this.SelectHelpButtons.MarketDropdown.click();

        await this.Selections.FirstMarket.click();

        const market = await this.Fields.MarketField.getAttribute("value");

        await this.SelectHelpButtons.ProductSearchHelp.click();

        await this.Selections.FirstProduct.click();

        await this.Fields.ValidFromField.fill(todayDate);

        await this.Buttons.Continue.click();

        return market;
    }

}
