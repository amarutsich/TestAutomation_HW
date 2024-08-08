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
}