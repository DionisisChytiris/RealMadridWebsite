// Basic E2E smoke tests
import { test, expect } from '@playwright/test';

// Home page loads and has title
test('home loads with correct title and navbar visible', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('networkidle');
  await expect(page).toHaveTitle(/Real Madrid FC Website/i);
  // Assert a stable, user-visible element instead of #root (which can be 0x0 pre-hydration)
  await expect(page.locator('.nav2').getByRole('link', { name: /^Tickets$/i })).toBeVisible({ timeout: 10_000 });
});

// Navigate via navbar to a couple of routes that exist
// Adjust selectors if navbar structure changes
test('navigate to Tickets and Tour pages', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('networkidle');

  // Click Tickets in the top navbar (exact text to avoid matching "Tour Tickets", etc.)
  const ticketsLink = page.locator('.nav2').getByRole('link', { name: /^Tickets$/i }).first();
  await ticketsLink.waitFor({ state: 'visible' });
  await ticketsLink.click();
  await expect(page).toHaveURL(/\/tickets$/);

  // Go to Tour (exact text)
  const tourLink = page.locator('.nav2').getByRole('link', { name: /^Tour$/i }).first();
  await tourLink.waitFor({ state: 'visible' });
  await tourLink.click();
  await expect(page).toHaveURL(/\/tour$/);
});
