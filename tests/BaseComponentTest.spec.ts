import { test } from '@playwright/test'
import { log } from 'console';
import Homepage from '../models/pages/HomePage';
import SearchComponent from '../models/components/global/SearchComponent';
import FooterColumnComponent from '../models/components/global/footer/FooterColumnComponent';
import FooterComponent from '../models/components/global/footer/FooterComponent';
import InformationColumnComponent from '../models/components/global/footer/InformationColumnComponent';
import CustomerServiceColumnComponent from '../models/components/global/footer/CustomerServiceColumnComponent';

test('Test Base Component in page', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');
    const homepage: Homepage = new Homepage(page);
    const footerComponent: FooterComponent = homepage.footerComponent();
    const informationColumnComponent: InformationColumnComponent = footerComponent.informationColumnComponent();
    const customerServiceColumnComponent: CustomerServiceColumnComponent = footerComponent.customerServiceColumnComponent();
    
    const informationColumnTitle = await informationColumnComponent.title().textContent();
    const customerServiceColumnTitle = await customerServiceColumnComponent.title().textContent();

    console.log(`informationColumnTitle: ${informationColumnTitle}`);
    console.log(`customerServiceColumnTitle: ${customerServiceColumnTitle}`);
    

    await page.waitForTimeout(2000);
})