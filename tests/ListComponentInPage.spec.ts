import { test } from '@playwright/test'
import { log } from 'console';
import Homepage from '../models/pages/HomePage';
import SearchComponent from '../models/components/SearchComponent';
import ProductItemComponent from '../models/components/ProductItemComponent';

test('Test List of Component in page', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');
    const homepage: Homepage = new Homepage(page);
    const productItemComponentList: ProductItemComponent[] = await homepage.productItemComponentList();
    for (const productItemComponent of productItemComponentList) {
        const productTitle = await productItemComponent.productTitle().textContent();
        const productPrice = await productItemComponent.productPrice().textContent();
        console.log(`${productTitle?.trim()}: ${productPrice?.trim()}`);
    };

    await page.waitForTimeout(2000);
})