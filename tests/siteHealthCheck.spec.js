const { test, expect } = require('@playwright/test');

const URL_TO_TEST = 'https://ridealike.com/';
const EMAIL = process.env.LOGIN_EMAIL || 'jk@yopmail.com';
const PASSWORD = process.env.LOGIN_PASSWORD || 'Aem@bs23';

test.describe('Site Health and Login Check', () => {
  test('Homepage loads and login works', async ({ page }) => {
    // Step 1: Go to the homepage
    await page.goto(URL_TO_TEST, { waitUntil: 'load', timeout: 15000 });
    await expect(page).toHaveTitle(/RideAlike/i);

    // Step 2: Click the homepage Sign In button
    await page.getByRole('button', { name: 'Sign In' }).first().click();

    // Wait for navigation
    await page.waitForURL('**/authentication');

    // Step 3: Click the second Sign In button
    await page.getByRole('button', { name: 'Sign in', exact: true }).click();

    // Wait for login page to appear
    await page.waitForSelector('input[formcontrolname="Email"]', { timeout: 10000 });

    // Step 4: Fill in credentials
    await page.fill('input[formcontrolname="Email"]', EMAIL);
    await page.fill('input[formcontrolname="Password"]', PASSWORD);

    // Step 5: Click the Sign In button
    await page.getByRole('button', { name: 'Sign In' }).click();

    // Step 6: Verify successful login by checking for Sign Out button
    await page.waitForSelector('button:has-text("Sign Out")', { timeout: 10000 });
    await expect(page.getByRole('button', { name: 'Sign Out' })).toBeVisible();
  });
});


/*const { test, expect } = require('@playwright/test');

const URL_TO_TEST = 'https://ridealike.co/';

test.describe('Site Health Check', () => {
  test('Page loads successfully', async ({ page }) => {
    const response = await page.goto(URL_TO_TEST, { waitUntil: 'load', timeout: 15000 });
    expect(response.status()).toBeLessThan(400); // 200-399 = success
    await expect(page).toHaveTitle(/.+/); // Check that title is present
  });
});*/
