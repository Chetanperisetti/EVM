import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd();

Given('I am on the login page', async ({ page }) => {
  await page.goto('/');
});

When(
  'I login with email {string} and password {string}',
  async ({ page }, email: string, password: string) => {
    await page.getByRole('textbox', { name: 'Email ID' }).fill(email);
    await page.getByRole('textbox', { name: 'Password' }).fill(password);
    await page.getByRole('button', { name: 'Login with Password' }).click();
  }
);

Then('I should see the dashboard page', async ({ page }) => {
  await expect(page).toHaveURL(/.*dashboard/);
});
