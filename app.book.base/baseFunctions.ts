import { Page } from "@playwright/test";

export default class BaseFunctions{

    constructor(private page:Page){
    }

    async goto(url :string){
        await this.page.goto(url,{
            waitUntil:"load"
        });

    }

    async waitAndClick(locator:string){
        const element = this.page.locator(locator);
        await element.waitFor({
            state:"visible"

        });
        await element.click();

    }

    async navigateTo(link:string){
        await Promise.all([
            this.page.waitForNavigation(),
            this.page.click(link)

        ]);

    }

}