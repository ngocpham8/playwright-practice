import { Page } from "@playwright/test";

export async function scrollPageByPercentage(page: Page, scrollPercentage: number) {
    await page.evaluate(scrollPercentage => {
        window.scrollTo(0, scrollPercentage * document.body.scrollHeight);
    }, scrollPercentage);
}