import { test, expect } from '@playwright/test';

test.skip('Visit website and make smth sure', async ({ page }) => {
  await page.goto('https://www.onliner.by/');

  await page.locator('(//span[text()="Каталог"])[2]').click();

  await expect(page).toHaveURL("https://catalog.onliner.by/");
});

test("Open the website and make sure that important elements are visible", async ({page}) => {
  await page.goto("https://claritylabs-tst.cpq.cloud.sap/Login.aspx");

  await page.locator('//input[@id="ctl00_MainContentPlaceHolder_txtUsername"]').fill("aleonenko");

  await page.locator('//input[@id="ctl00_MainContentPlaceHolder_txtPassword"]').fill("StrongPassword123!");

  await page.locator('//input[@id="ctl00_MainContentPlaceHolder_btnLogin"]').click();

  await expect(page).toHaveURL('https://claritylabs-tst.cpq.cloud.sap/Catalogue/CategoryTree.aspx');

  await expect(page.locator('//a[@title="Load Existing Project/Quotation"]')).toBeVisible();

  await expect(page.locator('(//a[@title="Catalog"])[2]')).toBeVisible();

  await expect(page.locator('(//a[@id="setupMenuDropdownTrigger"])[1]')).toBeVisible();

  await expect(page.locator('//ul[@class="navCat"]//a[text()= "Drinks"]')).toBeVisible();
  
});