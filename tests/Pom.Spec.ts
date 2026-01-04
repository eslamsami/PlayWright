import path from 'node:path';
import {  expect  ,test } from '../Fixture/Fixture';
import LoginPage from "./Pages/LoginPage/Login";
import ProductPage from "./Pages/ProductPage/AddFilterItem";
import * as TestData from "./TestData/Data.json"


test.beforeAll(async()=>{
    console.log('i came beforeAll')
})
test.afterAll(async()=>{
    console.log('i came afterAll')
})

test.beforeEach(async()=>{
    console.log('i came beforeEach')
})

test.afterEach(async()=>{
    console.log('i came afterEach')
})
test('E2E', async ({ page,loginpage,productpage }) => {

    // const loginPage = new LoginPage(page);
    // const productPage = new ProductPage(page);
await page.goto('https://www.saucedemo.com/');
await loginpage.EnterName(TestData.username);
await loginpage.Pass(TestData.password);
//await loginpage.takeScreenshot('./tests/screenshots/loginpage.png');
await loginpage.PressLogin();
await productpage.AddItem();
//await productpage.takeScreenshot('./tests/screenshots/ProductPage.png');
await productpage.ClickAddToCartBtn();
//await page.waitForTimeout(3000);
page.close();



})