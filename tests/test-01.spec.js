import { test, expect } from '@playwright/test';

test('displays message when button is clicked', async ({ page }) => {
    await page.goto('http://localhost:3000');

    const button = page.locator('#messageButton');
    await expect(button).toBeVisible();

    // Click the button
    await button.click();

    // Expect the message to appear
    const message = page.locator('#message');
    await expect(message).toHaveText('You clicked the button');
});
