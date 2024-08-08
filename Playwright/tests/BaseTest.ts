import { test as base } from '@playwright/test';
import { SB_PageManager } from '../ApplicationLogic/sbApplicationUILogic/Pages/SB_PageManager';
import { CPQ_PageManager } from '../ApplicationLogic/cpqApplicationUILogic/Pages/CPQ_PageManager';

type Fixtures = {
    sbPageManager: SB_PageManager;
    cpqPageManager: CPQ_PageManager;
}

export const test = base.extend < Fixtures >({
    sbPageManager: async ({ page }, use) => {
        const sbPageManager = new SB_PageManager(page);
        await use(sbPageManager);
    },

    cpqPageManager: async ({ page }, use) => {
        const cpqPageManager = new CPQ_PageManager(page);
        await use(cpqPageManager);
    }
})