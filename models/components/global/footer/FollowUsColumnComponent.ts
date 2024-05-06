import { Locator, Page } from "@playwright/test";
import FooterColumnComponent from "./FooterColumnComponent";

// Reuse Footer Column Components
export default class FollowUsColumnComponent extends FooterColumnComponent {
    public static selector = '.column.follow-us';

    // Constructor
    constructor(component: Locator) {
        super(component)
    }

}