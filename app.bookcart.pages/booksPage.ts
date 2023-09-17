import { Page, expect } from "@playwright/test";
import BaseFunctions from "../app.book.base/baseFunctions";
import HeaderPage from "./headerPage";

export default class BookPage{
    private base:BaseFunctions;
    private header:HeaderPage;

    constructor(private page:Page){
        this.base = new BaseFunctions(page);
        this.header = new HeaderPage(page);
    }

    private Elements={
        categories:"app-book-filter a",
        title :"div.card-title",
        price : "div.card-title +p",
        addToCartBtn:"//button[@color='primary']",
        bookCard:"mat_card",
        snackBar:"simple_snack_bar",
    }


    async verifyAllCategories(categories:string[]){

        const bookCategories = this.page.locator(this.Elements.categories);
        // const text = await bookCategories.allTextContents();
        await expect(bookCategories).toHaveText(categories);
    }

    async addBookToCart(book:string){

        await this.header.enterBookName(book);
        await expect(this.page.locator(this.Elements.title))
        .toHaveText(book, {ignoreCase:true});

        this.page.click(this.Elements.addToCartBtn)
        const toast = this.page.locator(this.Elements.snackBar)
        await expect(toast).toBeVisible();
        await expect(toast).toHaveText("One Item added to cart")
        

    }

}
