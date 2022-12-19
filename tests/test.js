import { expect, test } from '@playwright/test';

test('best test ever', async ({ page }) => {
	await page.goto('/');
	expect(true).toBe(true);
});
