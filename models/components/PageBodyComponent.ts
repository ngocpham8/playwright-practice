import { Locator, Page } from "@playwright/test";
import ProductItemComponent from "./ProductItemComponent";

export default class PageBodyComponent {
    public static selector = '.page-body';
   
    // Constructor
    constructor(private component: Locator) {
        this.component = component;
    }

    async productItemComponentList(): Promise<ProductItemComponent[]> {
        const productItemComponents = await this.component.locator(ProductItemComponent.selector).all();
        return productItemComponents.map(comp => new ProductItemComponent(comp));
    }
   
}