import { test as base } from '@playwright/test';
import { PageManager } from '../ApplicationLogic/ApplicationUILogic/Pages/PageManager';

export const test = base.extend < {pageManager: PageManager} >({
    pageManager: async ({ page }, use) => {
        const pageManager = new PageManager(page);
        await use(pageManager);
    }
})