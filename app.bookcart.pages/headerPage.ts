import { Page } from "@playwright/test";
import BaseFunctions from "../app.book.base/baseFunctions";

export default class HeaderPage{
    constructor(private page:Page, private base:BaseFunctions){


     }
     private headerPageElements= {
        searchInput:"search books or authors",
        cartBtn: "(//mat-icon[contains(@class,'mat-icon notranslate')])[3]",
        cartValue:"#mat-badge-content-0",
        loginLink:"(//span[text()='Login'])[1]",
        userMenu:"//button[contains(@class,'mat-focus-indicator mat-menu-trigger')]",
        myOrders:"//button[text()='My Orders' and @role='menuitem']",
        logoutLink:"//button[text()='Logout' and @role='menuitem'] ",
     }
     async enterBookName(bookname:string){
       await this.page.getByPlaceholder(this.headerPageElements.searchInput)
       .type(bookname)

     }

     async clickOnCart(){
        await this.page.click(this.headerPageElements.cartBtn)
     }

     async getCartValue(){
        this.page.textContent(this.headerPageElements.cartValue)
     }

     async clickLoginLink(){
       await this.base.navigateTo(this.headerPageElements.loginLink);
        // await this.base.waitAndClick(this.headerPageElements.loginLink);
     }

     async clickOnUserMenu(){
      await this.base.waitAndClick(this.headerPageElements.userMenu);
    
     }  

     async clickOnMyOrder(){
        await this.base.waitAndClick(this.headerPageElements.myOrders);
      
       }  

       async logoutUser(){
        await this.base.navigateTo(this.headerPageElements.logoutLink);
      
       }  



}