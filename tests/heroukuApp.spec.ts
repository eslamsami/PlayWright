import { test, expect } from '@playwright/test';

test('Heroku', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('link', { name: 'Form Authentication' }).click();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
  await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
  await expect(page.getByRole('heading', { name: 'Login Page1' })).toBeVisible();
  await expect(page.locator('i')).toContainText('Login');
  await page.getByRole('button', { name: ' Login' }).click();
  await expect(page.locator('h2')).toContainText('Secure Area');
  await expect(page.locator('#flash')).toContainText('You logged into a secure area! ×');
  await page.getByRole('link', { name: 'Logout' }).click();
  await expect(page.getByText('You logged out of the secure')).toBeVisible();
});