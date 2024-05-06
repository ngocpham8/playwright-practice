import { Locator, Page } from "@playwright/test";
import FooterColumnComponent from "./FooterColumnComponent";

// Reuse Footer Column Components
export default class MyAccountColumnComponent extends FooterColumnComponent {
    public static selector = '.column.my-account';

    // Constructor
    constructor(component: Locator) {
        super(component)
    }

}