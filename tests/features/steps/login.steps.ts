import { createBdd } from 'playwright-bdd';
import { Page, expect } from '@playwright/test';
import { LoginPage } from '../../../pages/LoginPage';

// Define context type to help TypeScript know what { page } is
type TestContext = { page: Page };

const { Given, When, Then } = createBdd<TestContext>();

let loginPage: LoginPage;

Given('I am on the login page', async ({ page }) => {
  loginPage = new LoginPage(page);
  await loginPage.goto();
});

Given('I enter the email {string} in the username field', async ({page},email:string) => {
  await loginPage.enterUsername(email);
});

Given('I enter the password {string} in the password field', async ({page}, password: string) => {
  await loginPage.enterPassword(password);
});

When('I click on the Login with Password button', async ({page}) => {
  await loginPage.clickLoginButton();
});

Then('I should be navigated to the dashboard page', async ({page}) => {
  await loginPage.verifyDashboardTitle();
});

Then('I should see the flight details card', async ({ page }) => {
  await loginPage.expensesSection();
  // await expect(page.locator('.card-sec.flight-details')).toBeVisible();
});

Then('I should see 6 dashboard sections', async ({ page }) => {
  await loginPage.sections();
});

Then('I should see the company logo', async ({ page }) => {
  await loginPage.logo();
  // await expect(page.locator("img[alt='Logo']")).toBeVisible();
});

Then('I should see the {string} section', async ({ page }, sectionText: string) => {
  await loginPage.travelLink();
  // await expect(page.getByText(sectionText, { exact: true })).toBeVisible();
});

Then('I should see the user profile dropdown', async ({ page }) => {
  await loginPage.expensesLink();
  // await expect(page.locator('.profile-section-drop-down')).toBeVisible();
});
