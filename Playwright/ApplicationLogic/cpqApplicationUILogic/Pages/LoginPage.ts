import { BaseApplicationPage } from "./BaseApplicationPage";

export class LoginPage extends BaseApplicationPage{
    constructor(page){
        super(page);
    }

    Form = {
        Username: this.page.locator("#ctl00_MainContentPlaceHolder_txtUsername"),
        Password: this.page.locator("#ctl00_MainContentPlaceHolder_txtPassword"),
        LoginButton: this.page.locator("#ctl00_MainContentPlaceHolder_btnLogin")
    }
}