const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://staging.roadreadywheels.com/');
  await page.goto('https://staging.roadreadywheels.com/');
  await page.getByPlaceholder('Enter password').click();
  await page.getByPlaceholder('Enter password').fill('roadready');
  await page.locator('#submit_staging_password').getByRole('button', { name: 'SUBMIT' }).click();
  await page.getByPlaceholder('Search globally for make,').click();
  await page.getByPlaceholder('Search globally for make,').fill('ford');
  await page.getByLabel('submit').click();
  await page.getByRole('link', { name: 'Best Match 2017-2022 17x6.5' }).click();
  await page.getByRole('button', { name: ' Add To Cart' }).click();
  await page.locator('#extend-offers-modal-iframe').contentFrame().locator('button[name="close"]').click();
  await page.getByRole('heading', { name: 'Subtotal (1 item) $' }).click();
  await page.getByRole('button', { name: ' Complete Checkout' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Continue' }).first().click();

});