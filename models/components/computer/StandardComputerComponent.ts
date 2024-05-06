import { Locator } from "@playwright/test";
import ComputerEssentialComponent from "./ComputerEssentialComponent";
import { selector } from "../SelectorDecorator";

@selector(".StandardComputerComponent.selector")
export default class StandardComputerComponent extends ComputerEssentialComponent {
    public selectProcessorType(type: string): Promise<void> {
        console.log('selectProcessorType | StandardComputerComponent ');
        
        return Promise.resolve(undefined);
    }
    public selectRAMType(type: string): Promise<void> {
        return Promise.resolve(undefined);

    }

    constructor(component: Locator) {
        super(component);
    }

}