import { BasePage } from "../BasePage";

export class BaseApplicationPage extends BasePage{
    constructor(page){
        super(page);
    }

    BaseContainers = {
        CategoriesList: this.page.locator(".navCat"),
        CatalogMain: this.page.locator(".catalog-main")
    }

}