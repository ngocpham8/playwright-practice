import { Browser, BrowserContext, Page, chromium, test } from '@playwright/test'
import { log } from 'console';
test('Link Text - XPATH', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    // const footerLinkEle = page.locator('//a[contains(text(),"Elemental")]');
    // Explicit wait
    const footerLinkEle = await page.waitForSelector('//a[contains(text(),"Elemental")]', { timeout: 10000 });
    await footerLinkEle.click();
    await page.waitForTimeout(1000);
})

test('Link Text - CSS', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    // const footerLinkEle = await page.waitForSelector('#page-footer a', {timeout:10000});
    // const footerLinkEle = await page.waitForSelector('a:has-text("Elemental")', {timeout:10000});
    const footerLinkEle = await page.locator('a').filter({ hasText: "Elemental" });
    await footerLinkEle.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    await footerLinkEle.click();
    await page.waitForTimeout(1000);
})

test('Multiple matching', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    // Return array of Element Handle
    // const footerLinkEle = await page.locator('a').elementHandles();
    // same as below 
    const footerLinkEle = await page.$$('a');
    await footerLinkEle[10].click();
    await page.waitForTimeout(1000);
})

test.only('Handle login form', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    // Return array of Element Handle
    // const footerLinkEle = await page.locator('a').elementHandles();
    // same as below 
    await page.locator('a').filter({hasText:"Form Authentication"}).click();
    await page.waitForLoadState("domcontentloaded");

    await page.locator('#username').fill('test');
    await page.locator('#password').fill('test');
    await page.locator('button[type="submit"]').click();
    await page.waitForTimeout(2000);

    // Get text
    const textContent = await page.locator('h4').textContent();
    const innerText = await page.locator('h4').innerText();
    console.log(textContent);
    console.log(innerText);
})