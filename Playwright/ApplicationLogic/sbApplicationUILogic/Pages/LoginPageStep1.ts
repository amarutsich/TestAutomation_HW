import { BaseApplicationPage } from "./BaseApplicationPage";

export class LoginPageStep1 extends BaseApplicationPage{
    constructor(page){
        super(page);
    }

    Form = {
        Login: this.page.locator("#j_username"),
        ContinueButton: this.page.locator("#logOnFormSubmit")
    }
}

