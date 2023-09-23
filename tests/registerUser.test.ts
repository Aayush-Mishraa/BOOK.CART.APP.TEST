import test from "@playwright/test";

import RegisterPage from "../app.bookcart.pages/registerPage";
import * as data from "../utils/testdata/registerUser.json";



test("Register User", async ({page})=>{
// lets focus without fixtures
    const Register = new RegisterPage(page)
    await test.step("Goto applcation", async ()=>{
        await Register.navigateToRegisterPage();

    })
    await test.step("Create user", async ()=>{
        await Register.registerUser(data.firstName, data.lastName, data.userName, data.password,data.lastName, "m");
    }); 
    //just to see the executiom
    await page.waitForTimeout(5000)
});