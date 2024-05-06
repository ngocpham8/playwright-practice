import { test } from '@playwright/test'
import FooterTestFlow from '../../test-flows/global/FooterTestFlow';

// Data driven
const BASE_URL = 'https://demowebshop.tricentis.com';
const PAGES = [{
    pageName: 'Home Page',
    slug: '/'
},
{
    pageName: 'Login',
    slug: '/login'
},
{
    pageName: 'Register',
    slug: '/register'
}]
PAGES.forEach(page => {
    const { pageName, slug } = page;
    test(`Test Footer Component on ${pageName}`, async ({ page }) => {
        await page.goto(BASE_URL.concat(slug));
        const footerTestFlow: FooterTestFlow = new FooterTestFlow(page);
        await footerTestFlow.verifyFooterComponent();

        await page.waitForTimeout(2000);
    })
})