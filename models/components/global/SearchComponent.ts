import { Locator, Page } from "@playwright/test";

// Introducing main interaction methods
export default class SearchComponent {
    public static selector = '.search-box';
    // Scope to keep element selectors
    private searchBoxLoc = 'input[id="small-searchterms"]';
    private searchBtnLoc = 'input[class*="search-box-button"]';

    // Constructor
    constructor(private component: Locator) {
        this.component = component;
    }
    // Narrow down searching scope
    searchBox(): Locator {
        return this.component.locator(this.searchBoxLoc);
    }

    searchBtn(): Locator {
        return this.component.locator(this.searchBtnLoc);
    }
}