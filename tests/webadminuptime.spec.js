const { test, expect } = require('@playwright/test');

const adminEnvs = [
  {
    url: 'https://webadmin.ridealike.com/',
    email: process.env.ADMIN_PROD_EMAIL || 'salekinnewaz0@gmail.com',
    password: process.env.ADMIN_PROD_PASSWORD || 'Ridealike1234'
  },
  {
    url: 'https://test.admin.ridealike.com/',
    email: process.env.ADMIN_TEST_EMAIL || 'redoanhasankhan@gmail.com',
    password: process.env.ADMIN_TEST_PASSWORD || 'Aem@bs23'
  },
  {
    url: 'https://stage.admin.ridealike.com/',
    email: process.env.ADMIN_STAGE_EMAIL || 'redoanhasankhan@gmail.com',
    password: process.env.ADMIN_STAGE_PASSWORD || 'Aem@bs23'
  }
];

adminEnvs.forEach(({ url, email, password }) => {
  test.describe(`WebAdmin Login Check - ${url}`, () => {
    test(`Login and verify dashboard at ${url}`, async ({ page }) => {
      // Open admin URL
      await page.goto(url, { waitUntil: 'load', timeout: 15000 });

      // Wait for login form
      await page.waitForSelector('input[formcontrolname="Email"]', { timeout: 10000 });

      // Fill in login credentials
      await page.fill('input[formcontrolname="Email"]', email);
      await page.fill('input[formcontrolname="Password"]', password);

      // Click LOGIN
      await page.getByRole('button', { name: 'LOGIN', exact: true }).click();

      // Confirm successful login by checking for Dashboard
      await page.waitForSelector('a[href="/dashboard"] span:has-text("Dashboard")', { timeout: 10000 });
      //await expect(page.locator('h1')).toHaveText('Dashboard');
      await expect(page.locator('a[href="/dashboard"] span.nav-link-title')).toBeVisible();


      //await expect(page.getByText('Dashboard')).toBeVisible();
    });
  });
});
