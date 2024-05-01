import { Page } from "@playwright/test";

// Introducing main interaction methods
export default class LoginPageMethod01 {
    // Scope to keep element selectors
    private usernameLoc = '#username';
    private passwordLoc = '#password';
    private loginButtonLoc = 'button[type="submit"]';

    // Constructor
    constructor(private page: Page) {
        this.page = page;
    }
    // Main interaction methods
    async inputUsername(username: string) {
        await this.page.locator(this.usernameLoc).fill(username);
    }

    async inputPassword(password: string) {
        await this.page.locator(this.passwordLoc).fill(password);
    }

    async clickOnLoginBtn() {
        await this.page.locator(this.loginButtonLoc).click();
    }
}