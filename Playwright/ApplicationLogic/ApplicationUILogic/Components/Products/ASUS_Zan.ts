import { BaseApplicationPage } from "../../Pages/BaseApplicationPage";

export class ASUS_Zan extends BaseApplicationPage{
    constructor(page){
        super(page);
    }

    Containers = {
        StorageContainer: this.page.locator('(//label[text() = "Select storage"]//parent::*/parent::*/parent::*)[1]'),
        OpticalDriveContainer: this.page.locator('(//label[text() = "Select optical drive"]//parent::*/parent::*/parent::*)[1]'),
    }

    SelectAttributes = {
        SelectStorage: async (param : string) => this.Containers.StorageContainer.locator(`//span[contains(text(), "${param}")]`).click(),
        SelectOpticalDrive: async (param : string) => this.Containers.OpticalDriveContainer.locator(`//span[contains(text(), "${param}")]`).click()
    }
}