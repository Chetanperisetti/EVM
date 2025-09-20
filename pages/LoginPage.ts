import { expect, Page } from "@playwright/test";

export class LoginPage {
  readonly page;
  readonly username;
  readonly password;
  readonly loginBtn;

  constructor(page: Page) {
    this.page = page;
    this.username = page.getByRole('textbox', { name: 'Email ID' });
    this.password = page.getByRole('textbox', { name: 'Password' });
    this.loginBtn = page.getByRole('button', { name: 'Login with Password' });
  }

  async goto() {
    await this.page.goto('/');
  }

  async enterUsername(email: string) {
    await this.username.fill(email);
  }

  async enterPassword(password: string) {
    await this.password.fill(password);
  }

  async clickLoginButton() {
    await this.loginBtn.click();
  }

  async verifyDashboardTitle() {
    await expect(this.page).toHaveURL(/.*dashboard/, { timeout: 10000 });

  }
  async expensesSection(){
    await expect(this.page.locator('.card-sec.flight-details')).toBeVisible()
  }   
  async sections(){
    const expectedCount = 6;
    const sections = this.page.locator("div.col-lg-6 div.col-lg-12");
    const actualCount = await sections.count();
    await expect(actualCount).toBe(expectedCount);
    for (let i = 0; i < actualCount; i++) {
    await expect(sections.nth(i)).toBeVisible();
    };
  }

  async logo(){
    await expect(this.page.locator("img[alt='Logo']")).toBeVisible();
  }
  async travelLink(){
    await expect(this.page.getByText("TRAVEL", { exact: true })).toBeVisible();
  }
  async expensesLink(){
    await expect(this.page.getByText("EXPENSES",{exact : true})).toBeVisible();
  }
  async profileSection(){
    await expect(this.page.locator('.profile-section-drop-down')).toBeVisible();
  }
}
