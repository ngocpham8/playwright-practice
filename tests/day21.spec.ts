import { Page, test } from '@playwright/test';
import { log } from 'console';
import { scrollPageByPercentage } from '../utils/PageHelper';
import { getAdParams } from '../utils/AdHelper';

const jsAlertUrl = 'https://the-internet.herokuapp.com/javascript_alerts';
const floatingMenuUrl = 'https://the-internet.herokuapp.com/floating_menu';

test('Javascript Alerts', async ({ page }) => {
    await page.goto(jsAlertUrl);
    const jsAlertBtnEle = page.locator('[onclick="jsAlert()"]');

    page.on('dialog', async dialog => {
        await dialog.accept();
    })

    // Trigger js alert 
    await jsAlertBtnEle.click();

    await page.waitForTimeout(1000);
})

test('Handle JS Confirm', async ({ page }) => {
    await page.goto(jsAlertUrl);
    const jsConfirmBtnEle = page.locator('[onclick="jsConfirm()"]');

    page.on('dialog', async dialog => {
        console.log(`Alert content is: ${dialog.message()}`);
        await dialog.dismiss();
    })

    // Trigger js alert 
    await jsConfirmBtnEle.click();

    await page.waitForTimeout(500);
})

test('Handle JS Prompt', async ({ page }) => {
    await page.goto(jsAlertUrl);
    const jsAPromptBtnEle = page.locator('[onclick="jsPrompt()"]');

    page.on('dialog', async dialog => {
        console.log(`Alert content is: ${dialog.message()}`);
        await dialog.accept('I\'m accepting the js promt');
    })

    // Trigger js alert 
    await jsAPromptBtnEle.click();

    await page.waitForTimeout(1000);
})

test('Automatically accept', async ({ page }) => {
    await page.goto(jsAlertUrl);
    const jsAPromptBtnEle = page.locator('[onclick="jsPrompt()"]');

    // Trigger js alert 
    await jsAPromptBtnEle.click();

    await page.waitForTimeout(1000);
})

/**
 * Javascript snipet execution
 */
test('Execute JS without parameter', async ({ page }) => {
    await page.goto(floatingMenuUrl);

    await page.locator('h3').highlight();

    // Scroll to bottom
    await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
    })

    await page.waitForTimeout(1000);

    // Scroll to top
    await page.evaluate(() => {
        window.scrollTo(0, 0);
    })

    await page.waitForTimeout(1000);
})

test('Execute JS WITH parameter', async ({ page }) => {
    await page.goto(floatingMenuUrl);
    await page.waitForTimeout(1000);

    // Scroll 50% the height of page
    // await page.evaluate((scrollPercentage) => {
    //     window.scrollTo(0, scrollPercentage * document.body.scrollHeight);
    // }, 0.5)

    await scrollPageByPercentage(page, 0.5);

    await page.waitForTimeout(2000);
})

test.only('Execute JS And return the value', async ({ page }) => {
    await page.goto('https://www.foodandwine.com/');
    await page.waitForSelector('div[id="leaderboard-flex-1"]', { timeout: 10000 });
    await scrollPageByPercentage(page, 1);
    await page.waitForTimeout(1000);

    // const returnAdsValues = await page.evaluate((adSlot) => {
    //     const slot = googletag.pubads().getSlots().find(({ getSlotElementId }) => getSlotElementId() === adSlot);
    //     return slot.getTargetingMap();
    // }, 'leaderboard-flex-1');

    const returnAdsValues = await getAdParams(page, 'leaderboard-flex-1');

    console.log(returnAdsValues);

    await page.waitForTimeout(2000);
})