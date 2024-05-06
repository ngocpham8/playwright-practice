import { Locator, Page } from "@playwright/test";
import InformationColumnComponent from "./InformationColumnComponent";
import CustomerServiceColumnComponent from "./CustomerServiceColumnComponent";
import MyAccountColumnComponent from "./MyAccountColumnComponent";
import FollowUsColumnComponent from "./FollowUsColumnComponent";

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

    myAccountColumnComponent(): MyAccountColumnComponent {
        return new MyAccountColumnComponent(this.component.locator(MyAccountColumnComponent.selector));
    }

    followUsColumnComponent(): FollowUsColumnComponent {
        return new FollowUsColumnComponent(this.component.locator(FollowUsColumnComponent.selector));
    }
}