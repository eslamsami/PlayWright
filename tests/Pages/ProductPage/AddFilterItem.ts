import BasePage from "../BasePage";

 export default class ProductPage extends BasePage{

private readonly FilterItem = this.page.locator('[class="product_sort_container"]');

        private readonly SauceLabOnesie = this.page.locator('[id="add-to-cart-sauce-labs-onesie"]');

        private readonly SauceLabsFleeceJacket = this.page.locator('[id="add-to-cart-sauce-labs-fleece-jacket"]');


async FilterLowToHigh() {
await this.FilterItem.selectOption({ label:'Price (low to high)'});
}


    async AddSauceLabOnesie() {
await this.ClickOnElement(this.SauceLabOnesie);
}

async AddSauceLabsFleeceJacket() {
await this.ClickOnElement(this.SauceLabsFleeceJacket);
}



 private readonly SauceLabCartBtn = this.page.locator('[id="add-to-cart-sauce-labs-backpack"]');

    private readonly CartBtn = this.page.locator('[id="shopping_cart_container"]');

        async AddItem() {
await this.ClickOnElement(this.SauceLabCartBtn);
}

    async ClickAddToCartBtn() {
await this.ClickOnElement(this.CartBtn);
}
 }