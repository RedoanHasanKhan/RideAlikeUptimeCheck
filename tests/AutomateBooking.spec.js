const { test, expect, chromium } = require('@playwright/test');
require('dotenv').config(); // Load .env variables

const ENVIRONMENTS = [
  {
    name: 'Stage Environment',
    url: 'https://stage.ridealike.com/',
    email: process.env.STAGE_EMAIL || 'userx@yopmail.com',
    password: process.env.STAGE_PASSWORD || 'Aem@bs23',
  },
];

// Use .describe.parallel if needed for multiple envs
for (const env of ENVIRONMENTS) {
  test.describe(`${env.name} - Site Health and Login Check`, () => {
    test('Homepage loads and login works', async ({ browser }) => {
      // --- Grant location permission and set geolocation ---
      const context = await browser.newContext({
        geolocation: { latitude: 23.7566, longitude: 90.4644 }, // Example: mohakhali
        permissions: ['geolocation']
      });
      const page = await context.newPage();

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

      // Optional wait to allow UI changes after login
      await page.waitForTimeout(3000);

      // Step 6: Click the Search button
     
      const searchButton = page.getByRole('button', { name: 'Search', exact: true }).first();
      await searchButton.waitFor({ state: 'visible', timeout: 10000 });
      await expect(searchButton).toBeEnabled();
      await searchButton.click();
      // Optional: verify action
      console.log('✅ Search button clicked successfully.');
      await page.waitForTimeout(3000);

      // Step 7: Click on car
      const acuraElement = page.locator('h5', { hasText: 'Volvo Xpeditor XLL' });
      await acuraElement.waitFor({ state: 'visible', timeout: 10000 });
      await expect(acuraElement).toBeVisible();
      await acuraElement.click();
      await page.waitForTimeout(5000);
                 
      // Step 8: Click on Continue booking
          // Click "Continue booking"
//const continueBookingBtn = page.locator('span.mat-button-wrapper', { hasText: 'CONTINUE BOOKING' });
const continueBookingBtn = page.locator('div#some-unique-id span.mat-button-wrapper:has-text("Continue booking")');
await continueBookingBtn.waitFor({ state: 'visible', timeout: 10000 });
await continueBookingBtn.click();
await page.waitForTimeout(2000); // wait 2 seconds

// Click "Get Pricing"
const getPricingBtn = page.locator('button:has(span.mat-button-wrapper:has-text("Get Pricing"))');
await getPricingBtn.waitFor({ state: 'visible', timeout: 10000 });
await getPricingBtn.click();
await page.waitForTimeout(2000); // wait 2 seconds

// Click "Confirm Trip"
const confirmTripBtn = page.locator('button:has(span.mat-button-wrapper:has-text("Confirm Trip"))');
await confirmTripBtn.waitFor({ state: 'visible', timeout: 10000 });
await confirmTripBtn.click();
await page.waitForTimeout(2000); // wait 2 seconds

      // Step 7: Check for "Sign Out" button as login success
      await page.waitForSelector('button:has-text("Sign Out")', { timeout: 10000 });
      await expect(page.getByRole('button', { name: 'Sign Out' })).toBeVisible();

      await context.close();
    });
  });
}

