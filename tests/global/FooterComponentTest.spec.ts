import { test } from '@playwright/test'
import FooterTestFlow from '../../test-flows/global/FooterTestFlow';

test('Test Footer Component on Homepage', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');
    const footerTestFlow: FooterTestFlow = new FooterTestFlow(page);
    await footerTestFlow.verifyFooterComponent();


    await page.waitForTimeout(2000);
})