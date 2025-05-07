# Test info

- Name: Site Health Check >> Page loads successfully
- Location: /Users/bs01011/VS Code/Playwright/RideAlikeUptimeCheck/tests/siteHealthCheck.spec.js:6:3

# Error details

```
Error: page.goto: NS_ERROR_UNKNOWN_HOST
Call log:
  - navigating to "https://ridealike.co/", waiting until "load"

    at /Users/bs01011/VS Code/Playwright/RideAlikeUptimeCheck/tests/siteHealthCheck.spec.js:7:33
```

# Page snapshot

```yaml
- heading "Hmm. We’re having trouble finding that site." [level=1]
- paragraph: We can’t connect to the server at ridealike.co.
- paragraph
- strong: "If you entered the right address, you can:"
- list:
  - listitem: Try again later
  - listitem: Check your network connection
  - listitem: Check that Nightly has permission to access the web (you might be connected but behind a firewall)
- button "Try Again"
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
     |                                 ^ Error: page.goto: NS_ERROR_UNKNOWN_HOST
   8 |     expect(response.status()).toBeLessThan(400); // 200-399 = success
   9 |     await expect(page).toHaveTitle(/.+/); // Check that title is present
  10 |   });
  11 | });
  12 |
```