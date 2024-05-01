import { Locator, Page } from "@playwright/test";
import FooterColumnComponent from "./FooterColumnComponent";

// Reuse Footer Column Components
export default class InformationColumnComponent extends FooterColumnComponent {
    public static selector = '.column.information';

    // Constructor
    constructor(component: Locator) {
        super(component)
    }

}