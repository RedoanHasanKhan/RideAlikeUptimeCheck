const { test, expect } = require('@playwright/test');

const URL_TO_TEST = 'https://ridealike.com/';

test.describe('Site Health Check', () => {
  test('Page loads successfully', async ({ page }) => {
    const response = await page.goto(URL_TO_TEST, { waitUntil: 'load', timeout: 15000 });
    expect(response.status()).toBeLessThan(400); // 200-399 = success
    await expect(page).toHaveTitle(/.+/); // Check that title is present
  });
});
