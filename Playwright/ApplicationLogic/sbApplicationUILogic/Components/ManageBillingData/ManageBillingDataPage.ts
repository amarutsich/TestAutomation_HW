import { BaseApplicationPage } from "../../Pages/BaseApplicationPage";

export class ManageBillingDataPage extends BaseApplicationPage{
    constructor(page){
        super(page)
    }

    Containers = {
        FiltersSection : this.page.locator('div [id*="billOverviewPageHeader"][aria-label="Expanded header"]'),
        BillsTableHeader : this.page.locator('div [id*="__toolbar"][aria-roledescription="Overflow Toolbar"]')
    }

    Fields = {
        SubscriptionIdFilter : this.Containers.FiltersSection.locator('input[id*="subscriptionNumberInput-inner"]'),
        MarketsFilter : this.Containers.FiltersSection.locator('input[id*="marketsSelector-inner"]'),
        BillsCounter : this.Containers.BillsTableHeader.locator('span[id*="billOverviewChartContainerTableTitle-inner"]')
    }

    Buttons = {
        GoButton : this.Containers.FiltersSection.locator('span[id*="billOverviewPageHeaderFilterBar-btnGo-inner"]')
    }

    async searchForBills(market : string, subscriptionID : string){
        await this.Fields.MarketsFilter.press("Control+A");

        await this.Fields.MarketsFilter.press("Backspace");

        await this.Fields.MarketsFilter.fill(market);

        await this.page.keyboard.press("Enter");

        await this.Fields.SubscriptionIdFilter.click();

        await this.Fields.SubscriptionIdFilter.fill(subscriptionID);

        await this.page.keyboard.press("Enter");

        await this.Buttons.GoButton.click();
    }
}