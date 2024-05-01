import { Locator, Page } from "@playwright/test";
import FooterColumnComponent from "./FooterColumnComponent";

// Reuse Footer Column Components
export default class CustomerServiceColumnComponent extends FooterColumnComponent {
    public static selector = '.column.customer-service';

    // Constructor
    constructor(component: Locator) {
        super(component)
    }

}