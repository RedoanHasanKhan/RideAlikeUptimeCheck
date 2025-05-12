const { test, expect } = require('@playwright/test');
require('dotenv').config(); // Load .env variables

const ENVIRONMENTS = [
  {
    name: 'Test Environment',
    url: 'https://test.ridealike.com/',
    email: process.env.TEST_EMAIL || 'userx@yopmail.com',
    password: process.env.TEST_PASSWORD || 'Aem@bs23',
  },
  {
    name: 'Stage Environment',
    url: 'https://stage.ridealike.com/',
    email: process.env.STAGE_EMAIL || 'userx@yopmail.com',
    password: process.env.STAGE_PASSWORD || 'Aem@bs23',
  },
];

for (const env of ENVIRONMENTS) {
  test.describe(`${env.name} - Site Health and Login Check`, () => {
    test('Homepage loads and login works', async ({ page }) => {
      // Step 1: Go to the homepage
      await page.goto(env.url, { waitUntil: 'load', timeout: 15000 });
      await expect(page).toHaveTitle(/RideAlike/i);

      // Step 2: Click the homepage Sign In button
      await page.getByRole('button', { name: 'Sign In' }).first().click();
      await page.waitForURL('**/authentication');

      // Step 3: Click the second Sign In button
      await page.getByRole('button', { name: 'Sign in', exact: true }).click();

      // Step 4: Wait for login fields and fill credentials
      await page.waitForSelector('input[formcontrolname="Email"]', { timeout: 10000 });
      await page.fill('input[formcontrolname="Email"]', env.email);
      await page.fill('input[formcontrolname="Password"]', env.password);

      // Step 5: Submit
      await page.getByRole('button', { name: 'Sign In' }).click();

      // Step 6: Check for "Sign Out" button as login success
      await page.waitForSelector('button:has-text("Sign Out")', { timeout: 10000 });
      await expect(page.getByRole('button', { name: 'Sign Out' })).toBeVisible();
    });
  });
}
