import { Page } from "@playwright/test";
import Homepage from "../../models/pages/HomePage";
import FooterComponent from "../../models/components/global/footer/FooterComponent";
import InformationColumnComponent from "../../models/components/global/footer/InformationColumnComponent";

export default class FooterTestFlow {
    constructor(private page: Page) {
        this.page = page;
    }

    async verifyFooterComponent(): Promise<void> {
        this.verifyInformationColumn();
        this.verifyCustomerServiceColumn();
        this.verifyMyAccountColumn();
        this.verifyFollowUsColumn();
    }

    private async verifyInformationColumn(): Promise<void> {
        const homepage: Homepage = new Homepage(this.page);
        const footerComponent: FooterComponent = homepage.footerComponent();
        const informationColumnComponent: InformationColumnComponent = footerComponent.informationColumnComponent();
        const title = await informationColumnComponent.title().textContent();
        console.log(title);
        
    }

    private verifyCustomerServiceColumn(): void {

    }

    private verifyMyAccountColumn(): void {

    }

    private verifyFollowUsColumn(): void {

    }

}