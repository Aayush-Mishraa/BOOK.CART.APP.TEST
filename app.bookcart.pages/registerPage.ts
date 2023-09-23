import { Page, expect } from "@playwright/test";
import BaseFunctions from "../app.book.base/baseFunctions";
type gender ={
    m:"male",
    f:"female"
}

export default class RegisterPage{
    private base:BaseFunctions;

    constructor(private page:Page){
        this.base = new BaseFunctions(page);
    }

    private ELements ={
        fName:"input[formcontrolname='firstname']",
        lName:"input[formcontrolname='lastname']",
        userName:"input[formcontrolname='username']",
        password:"input[formcontrolname='password']",
        confirmPassword:"input[formcontrolname='confirmPassword']",
        maleInput:"input[value='Male']",
        femaleInput:"input[value='Female']",
        maleRadioBtn:"//span[contains(text(),'Male')]",
        femaleRadioBtn:"//span[contains(text(),'Female')]",
        regBtn:"button[color='primary']" 
    }
   
     async navigateToRegisterPage(){
        await this.base.goto("register")

        
     }
      // only for the positive senarios
    
      async registerUser (firstname: string, Lastname: string, userName: string,password: any, confirmPassword: string, gender: string){
        await this.page.fill(this.ELements.fName, firstname);
        await this.page.fill(this.ELements.lName, Lastname);
        //this must be unique always

        await this.page.fill(this.ELements.userName, userName);
        await this.page.fill(this.ELements.confirmPassword, confirmPassword);
        if("m")
        {
            await this.page.click(this.ELements.maleRadioBtn);
            await expect(this.page.locator(this.ELements.maleRadioBtn)).toBeChecked();

        }else{
            await this.page.click(this.ELements.femaleRadioBtn);
            await expect(this.page.locator(this.ELements.femaleRadioBtn)).toBeChecked();
        }
        await this.base.navigateTo(this.ELements.regBtn);     
      }
}