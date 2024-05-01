import { test } from '@playwright/test'
import LoginPageMethod02 from '../models/pages/LoginPageMethod02'
import { log } from 'console';

test('Test POM method 1 - Introducing finding element methods', async ({ page }) => {
    const loginPage: LoginPageMethod02 = new LoginPageMethod02(page);
    await page.goto('https://the-internet.herokuapp.com/login');
    const username = loginPage.username();
    await username.fill('tomsmith');
    await loginPage.password().fill('SuperSecretPassword!');
    await loginPage.loginBtn().click();
    await page.waitForURL('**/secure');
})