# Test info

- Name: Site Health Check >> Page loads successfully
- Location: /Users/bs01011/VS Code/Playwright/RideAlikeUptimeCheck/tests/siteHealthCheck.spec.js:6:3

# Error details

```
Error: page.goto: A server with the specified hostname could not be found.
Call log:
  - navigating to "https://ridealike.co/", waiting until "load"

    at /Users/bs01011/VS Code/Playwright/RideAlikeUptimeCheck/tests/siteHealthCheck.spec.js:7:33
```

# Test source

```ts
   1 | const { test, expect } = require('@playwright/test');
   2 |
   3 | const URL_TO_TEST = 'https://ridealike.co/';
   4 |
   5 | test.describe('Site Health Check', () => {
   6 |   test('Page loads successfully', async ({ page }) => {
>  7 |     const response = await page.goto(URL_TO_TEST, { waitUntil: 'load', timeout: 15000 });
     |                                 ^ Error: page.goto: A server with the specified hostname could not be found.
   8 |     expect(response.status()).toBeLessThan(400); // 200-399 = success
   9 |     await expect(page).toHaveTitle(/.+/); // Check that title is present
  10 |   });
  11 | });
  12 |
```