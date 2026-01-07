import path from 'node:path';
import {  expect  ,test } from '../Fixture/Fixture';
import LoginPage from "./Pages/LoginPage/Login";
import ProductPage from "./Pages/ProductPage/AddFilterItem";
import CheckOutPage from "./Pages/CheckOutPage/CheckOut";
import AddFilterItem from './Pages/ProductPage/AddFilterItem';
import * as TestData from "./TestData/Data.json"

test('AddItem', async ({ page,loginpage,productpage,checkOutPage }) => {

await page.goto('https://www.saucedemo.com/');
await loginpage.EnterName(TestData.username);
//await loginpage.Pass(TestData.password);
await loginpage.PressLogin();
await productpage.FilterLowToHigh();
await productpage.AddSauceLabOnesie();
await productpage.AddSauceLabsFleeceJacket();
await productpage.ClickAddToCartBtn();
await checkOutPage.assertFleeceJacketIsInCart();
await checkOutPage.assertOnesieIsInCart();
await checkOutPage.checkOut();
await checkOutPage.firstName();
await checkOutPage.lastname();
await checkOutPage.zipCode();
await checkOutPage.continue();
await checkOutPage.finish();





//await page.screenshot({path:''});
//page.close();



})