import { BaseApplicationPage } from "../../Pages/BaseApplicationPage";

export class ProductConfigurationPage extends BaseApplicationPage{
    constructor(page){
        super(page);
    }

    Containers = {
        ConfigurationSummary: this.page.locator("#configurationSummary")
    }

    Fields = {
        Total: this.Containers.ConfigurationSummary.locator('//*[text() = "Total"]/following-sibling::*')
    }

    Buttons = {
        AddToQuote: this.page.locator('"Add to Quote"')
    }
}