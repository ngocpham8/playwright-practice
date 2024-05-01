import { test } from '@playwright/test'
import { log } from 'console';
import Homepage from '../models/pages/HomePage';
import SearchComponent from '../models/components/global/SearchComponent';
import ProductItemComponent from '../models/components/ProductItemComponent';
import PageBodyComponent from '../models/components/global/PageBodyComponent';

test('Test List of Component in page', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');
    const homepage: Homepage = new Homepage(page);
    const pageBodyComponent: PageBodyComponent = await homepage.pageBodyComponent();
    const productItemComponentList: ProductItemComponent[] = await pageBodyComponent.productItemComponentList();
    for (const productItemComponent of productItemComponentList) {
        const productTitle = await productItemComponent.productTitle().textContent();
        const productPrice = await productItemComponent.productPrice().textContent();
        console.log(`${productTitle?.trim()}: ${productPrice?.trim()}`);
    };

    await page.waitForTimeout(2000);
})