import { test, expect } from '@playwright/test';
test('should click a button and verify text', async ({ context }) => {
        const page = await context.newPage();
        await page.goto('https://flipkart.com');
        await page.click('text=More Information');
        expect(await page.url()).toBe('https://www.iana.org/domains/flipkart');
      });
      test('should find specific text on the page', async ({ context }) => {
        const page = await context.newPage();
        await page.goto('https://www.flipkart.com/#');
        const textContent = await page.locator('p').innerText();
        expect(textContent).toContain('More information...');
      });