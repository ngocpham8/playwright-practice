import { Browser, BrowserContext, Page, chromium, test } from '@playwright/test'
test('Login Test', async ({page}) => {
    await page.goto('https://playwright.dev/docs/test-configuration');
    await page.close();
})