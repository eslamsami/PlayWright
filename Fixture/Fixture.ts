import {test as basetest} from '@playwright/test';
import LoginPage from '../tests/Pages/LoginPage/Login';
import ProductPage from '../tests/Pages/ProductPage/AddFilterItem';
import CheckOutPage from '../tests/Pages/CheckOutPage/CheckOut';


type page ={
    loginpage:LoginPage;
    productpage:ProductPage;
    checkOutPage:CheckOutPage;
}

const testpage =basetest.extend<page>({
    loginpage : async({page},use)=>
        await use(new LoginPage(page))
    ,
    productpage : async({page},use)=>
        await use(new ProductPage(page))
    ,
    checkOutPage: async({page},use)=>
        await use(new CheckOutPage(page))
})

export const test = testpage;
export const expect =testpage.expect;