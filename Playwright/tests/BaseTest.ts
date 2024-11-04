import { test as base, Page } from '@playwright/test';
import { SB_PageManager } from '../ApplicationLogic/sbApplicationUILogic/Pages/SB_PageManager';
import { CPQ_PageManager } from '../ApplicationLogic/cpqApplicationUILogic/Pages/CPQ_PageManager';

type Fixtures = {
    sbPage: Page;
    cpqPage: Page;
    sbPageManager: SB_PageManager;
    cpqPageManager: CPQ_PageManager;
}

export const test = base.extend < Fixtures >({

    sbPage: async ({browser}, use) => {
        const sbPage = await browser.newPage();
        await sbPage.goto("https://test-idp.eu10.revenue.cloud.sap/launchpad#Shell-home");
        await new SB_PageManager(sbPage).loginPageStep1.Form.Login.fill("anton.leonenko@clarity.cx");
        await new SB_PageManager(sbPage).loginPageStep1.Form.ContinueButton.click();
        await new SB_PageManager(sbPage).loginPageStep2.Form.Password.fill("Greedis9good");
        await new SB_PageManager(sbPage).loginPageStep2.Form.SignInButton.click();
        await use(sbPage);
    },

    cpqPage: async ({browser}, use) => {
        const cpqPage = await browser.newPage();
        await cpqPage.goto("https://claritylabs-tst.cpq.cloud.sap/Login.aspx");
        await new CPQ_PageManager(cpqPage).loginPage.Form.Username.fill("aleonenko");
        await new CPQ_PageManager(cpqPage).loginPage.Form.Password.fill("StrongPassword123!");
        await new CPQ_PageManager(cpqPage).loginPage.Form.LoginButton.click();
        await use(cpqPage);
    },

    sbPageManager: async ({ sbPage }, use) => {
        const sbPageManager = new SB_PageManager(sbPage);
        await use(sbPageManager);
    },

    cpqPageManager: async ({ cpqPage }, use) => {
        const cpqPageManager = new CPQ_PageManager(cpqPage);
        await use(cpqPageManager);
    }

})