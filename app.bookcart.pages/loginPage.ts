import { Page } from "@playwright/test";
import BaseFunctions from "../app.book.base/baseFunctions";
import Assert from "../app.book.base/assert";

export default class LoginPage{
    constructor(private page:Page, 
        private base:BaseFunctions, 
        private assert:Assert) { }
    
    private Elements={
        userInput:"Username",
        passwordInput:"Password",
        loginBtn:"button[color='primary']",
        errorMessage:"alert"
    }

    async enterUserName(user:string){
        await this.page.fill(this.Elements.userInput,user);
    }
    async enterPassword(Password:string){
        await this.page.fill(this.Elements.passwordInput,Password);
    }

    async clickLoginButton(){

        await this.base.navigateTo(this.Elements.errorMessage)
  
        // await this.page.click(this.Elements.loginBtn);
    }

    async getErrorMessage(){
        await this.page.click(this.Elements.errorMessage);

    }
    async loginUser(user,password)
    {
        // await this.assert.assertURL("https://bookcart.azurewebsites.net/login")
        await this.enterUserName(user);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }
}