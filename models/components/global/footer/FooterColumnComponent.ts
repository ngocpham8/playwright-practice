import { Locator, Page } from "@playwright/test";

// Base Component has no selector
export default class FooterColumnComponent {
    private titleSel: string = "h3";
    private linkSel: string = "li a";

    // This one is to force the concrete class(component)'s constructor to call parent(base component)'s constructor.
    constructor(private component: Locator) {
        this.component = component;
        this.component.scrollIntoViewIfNeeded();
    }

    title(): Locator{
        return this.component.locator(this.titleSel);
    }

    links(): Promise<Locator[]>{
        return this.component.locator(this.linkSel).all();
    }
}