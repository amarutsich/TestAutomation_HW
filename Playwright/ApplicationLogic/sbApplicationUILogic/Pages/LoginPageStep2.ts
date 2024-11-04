import { BaseApplicationPage } from "./BaseApplicationPage";

export class LoginPageStep2 extends BaseApplicationPage{
    constructor(page){
        super(page);
    }

    Form = {
        Password: this.page.locator("#password"),
        SignInButton: this.page.locator('//button[text()="Sign in"]')
    }
}

