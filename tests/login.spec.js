const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://staging.roadreadywheels.com/');

});