# Test info

- Name: Stage Environment - Site Health and Login Check >> Homepage loads and login works
- Location: /Users/bs01011/VS Code/Playwright/RideAlikeUptimeCheck/tests/AutomateBooking.spec.js:16:5

# Error details

```
Error: locator.waitFor: Target page, context or browser has been closed
Call log:
  - waiting for locator('div#some-unique-id span.mat-button-wrapper:has-text("Continue booking")') to be visible

    at /Users/bs01011/VS Code/Playwright/RideAlikeUptimeCheck/tests/AutomateBooking.spec.js:67:26
```

# Page snapshot

```yaml
- link "RideALike Logo":
  - /url: /
  - img "RideALike Logo"
- list:
  - listitem:
    - link "Discover":
      - /url: /
  - listitem:
    - link "Dashboard":
      - /url: /page/dashboard
  - listitem:
    - link "Partner with us":
      - /url: /partner
  - listitem:
    - link "Trips":
      - /url: /page/trips
  - listitem:
    - link "Profile":
      - /url: /page/profile
  - listitem:
    - link:
      - /url: /page/messages
  - listitem:
    - link "fiber_manual_record":
      - /url: /page/notifications
  - listitem:
    - button "Sign Out":
      - paragraph: Sign Out
- heading "Vehicle Details" [level=1]
- button
- button
- paragraph: "4.0"
- paragraph: .
- paragraph: 1 TRIP
- button [disabled]
- heading "Volvo Xpeditor XLL" [level=1]
- button
- paragraph: "2009"
- paragraph: 0-50k km
- paragraph: 5 Seats
- paragraph: 4 Doors
- paragraph: Automatic transmission
- paragraph: Regular fuel
- paragraph: Hybrid
- heading "Host" [level=3]
- paragraph: Host U.
- paragraph: "4.1"
- paragraph: .
- paragraph: 62 TRIPS
- button "Live Chat"
- heading "Features" [level=3]
- text: Air conditioning
- heading "Insurance" [level=3]
- paragraph: Insurance policy
- paragraph: "You choose your protection package with each trip:"
- paragraph: ✓ Standard protection with $1000 deductible
- paragraph: ✓ Premium protection with $0 deductible
- paragraph: "Whatever protection level you choose, you are covered with $2,000,000 Third Party Liability insurance. In addition, the coverage from RideAlike’s insurance partner includes the following features:"
- paragraph: ✓ Standard Accident Benefits
- paragraph: ✓ Up to $1,500 for transportation replacement
- paragraph: ✓ No depreciation on new vehicles
- heading "Vehicle rules" [level=3]
- text: No smoking No pets Unlimited mileage allowance Refuel with Regular only Return with the same fuel level Return in the same state of cleanliness
- heading "Booking rules" [level=3]
- text: Minimum trip 4 hrs Maximum trip 10 days Cannot be booked after 11:00 PM same day
- heading "Pickup and return location" [level=3]
- paragraph
- text: Delivery available within 50 km at $2/km.
- heading "Cancellation policy" [level=3]
- paragraph: Flexible
- paragraph: Full refund 24 hours prior to the trip
- heading "Vehicle reviews" [level=3]
- paragraph: "4.0"
- paragraph: Based on 1 reviews
- paragraph: 4 days @ $50/day
- heading "$240" [level=3]
- paragraph: "Pickup: May 13, 2025, 10:00 PM"
- paragraph: "Return: May 17, 2025, 12:00 AM"
- button "Continue booking"
- paragraph: You won’t be charged yet
- img "RideALike Logo"
- heading "Explore" [level=5]
- list:
  - listitem:
    - link "Trusted Community":
      - /url: /trustedcommunity
  - listitem:
    - link "Discounts":
      - /url: /promotions
  - listitem:
    - link "Refer-a-Friend":
      - /url: /refer-a-friend
  - listitem:
    - link "Blog":
      - /url: /blog
- heading "RideAlike" [level=5]
- list:
  - listitem:
    - link "About Us":
      - /url: /page/about-us
  - listitem:
    - link "Press":
      - /url: /press
  - listitem: Policies
- heading "Support" [level=5]
- list:
  - listitem:
    - link "Learn More":
      - /url: /learn-more
  - listitem:
    - link "Contact Us":
      - /url: /page/contact-us
  - listitem:
    - link "FAQ":
      - /url: /faq
- link "RideAlike Facebook":
  - /url: https://www.facebook.com/RideAlike
  - img "RideAlike Facebook"
- link "RideAlike Instagram":
  - /url: https://www.instagram.com/ridealike/
  - img "RideAlike Instagram"
- link "RideAlike Tiktok":
  - /url: https://www.tiktok.com/@ridealike
  - img "RideAlike Tiktok"
- link "RideAlike Twitter":
  - /url: https://twitter.com/RideAlike/with_replies?fbclid=IwAR3d_ECgZylq3FiqxDBByW83BPBRqV6rzX8Vhb_iVSoo4Z4FCg-Gm1hJMrc
  - img "RideAlike Twitter"
- link "RideAlike Linkedin":
  - /url: https://www.linkedin.com/company/ridealike/
  - img "RideAlike Linkedin"
- link "RideAlike YouTube":
  - /url: https://www.youtube.com/channel/UCoFJl5TOwJQ_PDIvBhnSXWg
  - img "RideAlike YouTube"
- link "Get RideALike on Google Play":
  - /url: https://play.google.com/store/apps/details?id=com.ridealike.app
  - img "Get RideALike on Google Play"
- link "Get RideALike on App Store":
  - /url: https://apps.apple.com/us/app/ridealike/id1571154008
  - img "Get RideALike on App Store"
- img "Northbridge Insurance Logo"
- img "Interac Logo"
- img "Paypal Logo"
- img "Stripe Logo"
- img "Proud Canadian RideALike"
- paragraph: © Copyright RideAlike Inc. 2025
```

# Test source

```ts
   1 | const { test, expect, chromium } = require('@playwright/test');
   2 | require('dotenv').config(); // Load .env variables
   3 |
   4 | const ENVIRONMENTS = [
   5 |   {
   6 |     name: 'Stage Environment',
   7 |     url: 'https://stage.ridealike.com/',
   8 |     email: process.env.STAGE_EMAIL || 'userx@yopmail.com',
   9 |     password: process.env.STAGE_PASSWORD || 'Aem@bs23',
  10 |   },
  11 | ];
  12 |
  13 | // Use .describe.parallel if needed for multiple envs
  14 | for (const env of ENVIRONMENTS) {
  15 |   test.describe(`${env.name} - Site Health and Login Check`, () => {
  16 |     test('Homepage loads and login works', async ({ browser }) => {
  17 |       // --- Grant location permission and set geolocation ---
  18 |       const context = await browser.newContext({
  19 |         geolocation: { latitude: 23.7566, longitude: 90.4644 }, // Example: mohakhali
  20 |         permissions: ['geolocation']
  21 |       });
  22 |       const page = await context.newPage();
  23 |
  24 |       // Step 1: Go to the homepage
  25 |       await page.goto(env.url, { waitUntil: 'load', timeout: 15000 });
  26 |       await expect(page).toHaveTitle(/RideAlike/i);
  27 |
  28 |       // Step 2: Click the homepage Sign In button
  29 |       await page.getByRole('button', { name: 'Sign In' }).first().click();
  30 |       await page.waitForURL('**/authentication');
  31 |
  32 |       // Step 3: Click the second Sign In button
  33 |       await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  34 |
  35 |       // Step 4: Wait for login fields and fill credentials
  36 |       await page.waitForSelector('input[formcontrolname="Email"]', { timeout: 10000 });
  37 |       await page.fill('input[formcontrolname="Email"]', env.email);
  38 |       await page.fill('input[formcontrolname="Password"]', env.password);
  39 |
  40 |       // Step 5: Submit
  41 |       await page.getByRole('button', { name: 'Sign In' }).click();
  42 |
  43 |       // Optional wait to allow UI changes after login
  44 |       await page.waitForTimeout(3000);
  45 |
  46 |       // Step 6: Click the Search button
  47 |      
  48 |       const searchButton = page.getByRole('button', { name: 'Search', exact: true }).first();
  49 |       await searchButton.waitFor({ state: 'visible', timeout: 10000 });
  50 |       await expect(searchButton).toBeEnabled();
  51 |       await searchButton.click();
  52 |       // Optional: verify action
  53 |       console.log('✅ Search button clicked successfully.');
  54 |       await page.waitForTimeout(3000);
  55 |
  56 |       // Step 7: Click on car
  57 |       const acuraElement = page.locator('h5', { hasText: 'Volvo Xpeditor XLL' });
  58 |       await acuraElement.waitFor({ state: 'visible', timeout: 10000 });
  59 |       await expect(acuraElement).toBeVisible();
  60 |       await acuraElement.click();
  61 |       await page.waitForTimeout(5000);
  62 |                  
  63 |       // Step 8: Click on Continue booking
  64 |           // Click "Continue booking"
  65 | //const continueBookingBtn = page.locator('span.mat-button-wrapper', { hasText: 'CONTINUE BOOKING' });
  66 | const continueBookingBtn = page.locator('div#some-unique-id span.mat-button-wrapper:has-text("Continue booking")');
> 67 | await continueBookingBtn.waitFor({ state: 'visible', timeout: 10000 });
     |                          ^ Error: locator.waitFor: Target page, context or browser has been closed
  68 | await continueBookingBtn.click();
  69 | await page.waitForTimeout(2000); // wait 2 seconds
  70 |
  71 | // Click "Get Pricing"
  72 | const getPricingBtn = page.locator('button:has(span.mat-button-wrapper:has-text("Get Pricing"))');
  73 | await getPricingBtn.waitFor({ state: 'visible', timeout: 10000 });
  74 | await getPricingBtn.click();
  75 | await page.waitForTimeout(2000); // wait 2 seconds
  76 |
  77 | // Click "Confirm Trip"
  78 | const confirmTripBtn = page.locator('button:has(span.mat-button-wrapper:has-text("Confirm Trip"))');
  79 | await confirmTripBtn.waitFor({ state: 'visible', timeout: 10000 });
  80 | await confirmTripBtn.click();
  81 | await page.waitForTimeout(2000); // wait 2 seconds
  82 |
  83 |       // Step 7: Check for "Sign Out" button as login success
  84 |       await page.waitForSelector('button:has-text("Sign Out")', { timeout: 10000 });
  85 |       await expect(page.getByRole('button', { name: 'Sign Out' })).toBeVisible();
  86 |
  87 |       await context.close();
  88 |     });
  89 |   });
  90 | }
  91 |
  92 |
```