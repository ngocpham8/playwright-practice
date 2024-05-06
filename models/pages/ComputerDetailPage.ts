import { Locator, Page } from "@playwright/test";
import ComputerEssentialComponent from "../components/computer/ComputerEssentialComponent";

type ComputerComponentConstructor<T extends ComputerEssentialComponent> = new (component: Locator) => T;

export default class ComputerDetailPage {
    constructor(private page: Page) {
        this.page = page;
    }

    //Boundary Generic Type
    computerComp<T extends ComputerEssentialComponent>(computerComponentClass: ComputerComponentConstructor<T>): T {
        //Reflect meta data

        return new computerComponentClass(this.page.locator(computerComponentClass.selectorValue))
    }
}