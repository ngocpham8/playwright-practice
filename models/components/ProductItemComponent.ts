import { Locator, Page } from "@playwright/test";

// Introducing main interaction methods
export default class ProductItemComponent {
    public static selector = '.product-item';
    // Scope to keep element selectors
    private productTitleLoc = '.product-title';
    private productPriceLoc = 'span[class*="actual-price"]';

    // Constructor
    constructor(private component: Locator) {
        this.component = component;
    }

    productTitle(): Locator {
        return this.component.locator(this.productTitleLoc);
    }

    productPrice(): Locator {
        return this.component.locator(this.productPriceLoc);
    }
}