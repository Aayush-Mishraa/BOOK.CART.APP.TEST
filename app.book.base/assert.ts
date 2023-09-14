import { expect, Page } from "@playwright/test";
export default class Assert{
    constructor(private page:Page){}

    async assertTitile(title:string)
    {
        await expect(this.page).toHaveTitle(title);

    };
    async assertTitileContains(title:string)
    {
        const pageTitle = await this.page.title()
        expect(pageTitle).toContain(title);
        
    };
    async assertURL(url:string){
        await expect(this.page).toHaveURL(`/.*${url}/`)
    }
    async assertURLContains(title:string)
    {
        const pageURL = this.page.url();
        expect(pageURL).toContain(title);
    }

}
