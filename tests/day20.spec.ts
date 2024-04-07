import { test } from '@playwright/test';
test('Dropdown', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/dropdown');
    const dropdownEle = page.locator('#dropdown');
    await page.waitForTimeout(1000);

    // Select option 1
    await dropdownEle.selectOption({ index: 1 });
    // Select option 2
    await page.waitForTimeout(1000);
    await dropdownEle.selectOption({ value: '2' });

    await page.waitForTimeout(1000);
})

test('iFrame', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/iframe');
    const iframe = page.frameLocator('iframe[id^="mce"]');

    // Find edit text element
    await page.waitForTimeout(1000);
    const editTextEle = iframe.locator('body p');

    // Clear then input text
    await editTextEle.click();
    await editTextEle.clear();
    await editTextEle.fill('Testing');

    // Interact with main frame
    const footerPowerByLinkEle = page.locator('//a[contains(text(),"Elemental")]');
    await footerPowerByLinkEle.click();

    await page.waitForTimeout(1000);
})

test('Mouse Hover and narrodown searching scope', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/hovers');
    // Find all figures
    const allFigureEles = await page.locator('.figure').all();

    // Loop and narrdow down by search locator from other locator
    for (const figureEle of allFigureEles) {
        const imageEles = figureEle.locator('img');

        const userNameEle = await figureEle.locator('h5');
        const viewProfileLinkEle = await figureEle.locator('a');
        const isUserNameVisible = await userNameEle.isVisible();
        const isViewProfileLinkVisible = await viewProfileLinkEle.isVisible();

        // Mouse hover 
        await imageEles.hover();
    }

    await page.waitForTimeout(1000);
})

test.only('Dynamic controls', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/dynamic_controls');
    // Locate 2 parent components
    const checkboxCompo = await page.locator('#checkbox-example');
    const inputExampleCompo = await page.locator('#input-example');

    // Interact with checkbox 
    const checkboxEle = await checkboxCompo.locator('#checkbox input');
    const isEnabled = await checkboxEle.isEnabled();
    let isSelected = await checkboxEle.isChecked();
    if (!isSelected) {
        await checkboxEle.click();
    }

    isSelected = await checkboxEle.isChecked();
    if (!isSelected) {
        await checkboxEle.click();
    }

    const removeButtonEle = checkboxCompo.locator('button');
    await removeButtonEle.click();
    await page.waitForSelector('#checkbox-example #checkbox input', { state: 'hidden', timeout: 5 * 1000 });

    // Interact with input
    const inputEle = await inputExampleCompo.locator('input');
    const enableButtonEle = await inputExampleCompo.locator('button');

    const isEditable = await inputEle.isEditable();
    if (!isEditable) {
        await enableButtonEle.click();
    }

    await page.waitForSelector('p:has-text("It\'s enabled!")', { state: 'visible', timeout: 5 * 1000 });

    await inputEle.fill('Testing');

    await page.waitForTimeout(2000);
})

