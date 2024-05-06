import { Page } from "@playwright/test";
import Homepage from "../../models/pages/HomePage";
import FooterComponent from "../../models/components/global/footer/FooterComponent";
import InformationColumnComponent from "../../models/components/global/footer/InformationColumnComponent";
import FooterColumnComponent from "../../models/components/global/footer/FooterColumnComponent";
import { deepEqual, deepStrictEqual } from "assert";
import CustomerServiceColumnComponent from "../../models/components/global/footer/CustomerServiceColumnComponent";
import MyAccountColumnComponent from "../../models/components/global/footer/MyAccountColumnComponent";
import FollowUsColumnComponent from "../../models/components/global/footer/FollowUsColumnComponent";

export default class FooterTestFlow {
    constructor(private page: Page) {
        this.page = page;
    }

    async verifyFooterComponent(): Promise<void> {
        const homepage: Homepage = new Homepage(this.page);
        const footerComponent: FooterComponent = homepage.footerComponent();

        this.verifyInformationColumn(footerComponent);
        this.verifyCustomerServiceColumn(footerComponent);
        this.verifyMyAccountColumn(footerComponent);
        this.verifyFollowUsColumn(footerComponent);
    }

    private async verifyInformationColumn(footerComponent: FooterComponent): Promise<void> {
        const informationColumnComponent: InformationColumnComponent = footerComponent.informationColumnComponent();
        const title = await informationColumnComponent.title().textContent();
        console.log(title);
        await this.verifyFooterColumn(informationColumnComponent,
            ['Sitemap', 'Shipping & Returns', 'Privacy Notice', 'Conditions of Use', 'About us', 'Contact us'],
            ['/sitemap', '/shipping-returns', '/privacy-policy', '/conditions-of-use', '/about-us', '/contactus'])
    }

    private async verifyCustomerServiceColumn(footerComponent: FooterComponent): Promise<void> {
        const customerServiceColumnComponent: CustomerServiceColumnComponent = footerComponent.customerServiceColumnComponent();
        const title = await customerServiceColumnComponent.title().textContent();
        console.log(title);
        await this.verifyFooterColumn(customerServiceColumnComponent,
            ['Search', 'News', 'Blog', 'Recently viewed products', 'Compare products list', 'New products'],
            ['/search', '/news', '/blog', '/recentlyviewedproducts', '/compareproducts', '/newproducts'])
    }

    private async verifyMyAccountColumn(footerComponent: FooterComponent): Promise<void> {
        const myAccountColumnComponent: MyAccountColumnComponent = footerComponent.myAccountColumnComponent();
        const title = await myAccountColumnComponent.title().textContent();
        console.log(title);
        await this.verifyFooterColumn(myAccountColumnComponent,
            ['My account','Orders','Addresses','Shopping cart','Wishlist'],
            ['/customer/info','/customer/orders','/customer/addresses','/cart','/wishlist'])
    }

    private async verifyFollowUsColumn(footerComponent: FooterComponent): Promise<void> {
        const followUsColumnComponent: FollowUsColumnComponent = footerComponent.followUsColumnComponent();
        const title = await followUsColumnComponent.title().textContent();
        console.log(title);
        await this.verifyFooterColumn(followUsColumnComponent,
            ['Facebook','Twitter','RSS','YouTube','Google+'],
            ['http://www.facebook.com/nopCommerce','https://twitter.com/nopCommerce','/news/rss/1','http://www.youtube.com/user/nopCommerce','https://plus.google.com/+nopcommerce'])
    }

    private async verifyFooterColumn(footerColumnComp: FooterColumnComponent, expectedLinkTexts: string[], expectedHrefs: string[]): Promise<void> {
        const actualLinkTexts: string[] = [];
        const actualHrefs: string[] = [];

        const footerCompLinks = await footerColumnComp.links();
        for (let footerCompLink of footerCompLinks) {
            const footerLinkText = await footerCompLink.textContent() || '';
            const footerLinkHref = await footerCompLink.getAttribute('href') || '';
            actualLinkTexts.push(footerLinkText);
            actualHrefs.push(footerLinkHref);
        }

        deepStrictEqual(actualLinkTexts, expectedLinkTexts, `Actual link texts and expected link texts is not the same. Actual: ${actualLinkTexts}, Expected: ${expectedLinkTexts}`)
        deepStrictEqual(actualHrefs, expectedHrefs, `Actual hrefs and expected hrefs is not the same. Actual: ${actualHrefs}, Expected: ${expectedHrefs}`)

    }

}