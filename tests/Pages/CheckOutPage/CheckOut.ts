import BasePage from "../BasePage";
import { expect } from '@playwright/test';

 export default class ProductPage extends BasePage{

        private readonly OnesieItem =
  this.page.locator('.inventory_item_name', { hasText: 'Sauce Labs Onesie' });

private readonly FleeceJacketItem =
  this.page.locator('.inventory_item_name', { hasText: 'Sauce Labs Fleece Jacket' });

        private readonly CheckOut = this.page.locator('[id="checkout"]');
        private readonly FirstName = this.page.locator('[id="first-name"]');
        private readonly LastName = this.page.locator('[id="last-name"]');
        private readonly ZipCode = this.page.locator('[id="postal-code"]');
        private readonly Continue = this.page.locator('[id="continue"]');
        private readonly Finish = this.page.locator('[id="finish"]');
        
async assertOnesieIsInCart() {
  await expect(this.OnesieItem).toHaveText('Sauce Labs Onesie');
}

async assertFleeceJacketIsInCart() {
  await expect(this.FleeceJacketItem).toBeVisible();
}

async checkOut() {
await this.ClickOnElement(this.CheckOut);
}
async firstName() {
await this.EnterText(this.FirstName,"Eslam");
}

async lastname() {
await this.EnterText(this.LastName,"Eslam");
}

async zipCode() {
await this.EnterText(this.ZipCode,"11211");
}
async continue() {
await this.ClickOnElement(this.Continue);
 }

 async finish() {
await this.ClickOnElement(this.Finish);
}
 }