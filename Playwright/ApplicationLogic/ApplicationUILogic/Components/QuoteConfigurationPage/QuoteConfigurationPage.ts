import { BaseApplicationPage } from "../../Pages/BaseApplicationPage";

export class QuoteConfigurationPage extends BaseApplicationPage{
    constructor(page){
        super(page)
    }

    Containers = {
        QuoteInfo: this.page.locator("#quote-info-section"),
        Products: this.page.locator("#items-section"),
        Totals: this.page.locator("#totals-section"),
        Header: this.page.locator("#cartHeader")
    }

    Fields = {
       Status: this.Containers.QuoteInfo.locator("#orderStatusLabelId"),
       DateModified: this.Containers.QuoteInfo.locator("#dateModified"),
    }

    Buttons = {
        SaveQuote: this.Containers.Header.locator('"Save Quote"')
    }
}