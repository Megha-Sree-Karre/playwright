import { test, expect } from '@playwright/test';
test.describe('My Test Suite', () => {
    test.use({
        context: async ({ browser }, use) => {
          const context = await browser.newContext();
          await use(context);
          await context.close();
        }
      });})
      test('should open the homepage', async ({ context }) => {
        const page = await context.newPage();
        await page.goto('https://www.flipkart.com/#');
        expect(await page.title()).toBe('Example Domain');
      });
      test('should navigate to another page', async ({ context }) => {
        const page = await context.newPage();
        await page.goto('https://www.flipkart.com/#');
        await page.click('a');
        expect(await page.url()).toBe('https://www.iana.org/domains/example');
      });
      test('should find the heading on the page', async ({ context }) => {
        const page = await context.newPage();
        await page.goto('https://www.flipkart.com/#');
        const heading = await page.locator('h1').innerText();
        expect(heading).toBe('Example Domain');
      });
      