import { test, expect } from '@playwright/test';
test('navigate to another page', async ({ context }) => {
    const page = await context.newPage();
    await page.goto('https://www.flipkart.com/#');
    await page.click('a');
    expect(await page.url()).toBe('https://www.iana.org/domains/flipkart');
  });
  test('find the heading on the page', async ({ context }) => {
    const page = await context.newPage();
    await page.goto('https://www.flipkart.com/#');
    const heading = await page.locator('h1').innerText();
    expect(heading).toBe('Example Domain');
  });
