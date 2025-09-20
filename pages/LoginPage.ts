import { expect, Page } from "@playwright/test";

export class LoginPage{

    readonly page;
    readonly username;
    readonly password;
    readonly loginBtn;
    constructor(page:Page){
        this.page = page;
        this.username = page.getByRole('textbox', { name: 'Email ID' });
        this.password = page.getByRole('textbox', { name: 'Password' });
        this.loginBtn = page.getByRole('button', { name: 'Login with Password' });
    }
    async goto(){
        await this.page.goto('/');
    }
    async verifyDashboard(){
        await expect(this.page).toHaveURL(/.*dashboard/, { timeout: 10000 });
    }
}