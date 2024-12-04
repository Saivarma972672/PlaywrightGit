const { test, expect } = require('@playwright/test');

test('has title', async ({ browser,page }) => {

   await page.goto('https://www.google.com/');

});