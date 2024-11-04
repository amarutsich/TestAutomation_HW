import { BasePage } from "../BasePage";

export class BaseApplicationPage extends BasePage{
    constructor(page){
        super(page);
    }

    BaseContainers = {
        Header: this.page.locator("#header-shellArea")
    }

    HeaderElements = {
        HomeButton: this.BaseContainers.Header.locator("#shell-header-logo")
    }

}

