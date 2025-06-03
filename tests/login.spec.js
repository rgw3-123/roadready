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
 

});