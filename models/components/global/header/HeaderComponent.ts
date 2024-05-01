import { Locator, Page } from "@playwright/test";
import SearchComponent from "../SearchComponent";

// Introducing main interaction methods
export default class HeaderComponent {
    public static selector = '.header';
   
    // Constructor
    constructor(private component: Locator) {
        this.component = component;
    }

    // Search component
    searchComponent(): SearchComponent{
        return new SearchComponent(this.component.locator(SearchComponent.selector));
    }
   
}