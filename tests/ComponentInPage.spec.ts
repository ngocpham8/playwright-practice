import { test } from '@playwright/test'
import { log } from 'console';
import Homepage from '../models/pages/HomePage';
import SearchComponent from '../models/components/SearchComponent';

test('Test Component in page', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');
    const homepage: Homepage = new Homepage(page);
    const searchComponent: SearchComponent = homepage.searchComponent();
    await searchComponent.searchBox().click();
    await searchComponent.searchBox().fill('laptop');
    await searchComponent.searchBtn().click();

    await page.waitForTimeout(2000);
})