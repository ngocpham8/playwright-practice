import { Locator, Page } from "@playwright/test";
import InformationColumnComponent from "./InformationColumnComponent";
import CustomerServiceColumnComponent from "./CustomerServiceColumnComponent";

// Introducing main interaction methods
export default class FooterComponent {
    public static selector = '.footer';

    // Constructor
    constructor(private component: Locator) {
        this.component = component;
    }

    informationColumnComponent(): InformationColumnComponent {
        return new InformationColumnComponent(this.component.locator(InformationColumnComponent.selector));
    }

    customerServiceColumnComponent(): CustomerServiceColumnComponent {
        return new CustomerServiceColumnComponent(this.component.locator(CustomerServiceColumnComponent.selector));
    }
}