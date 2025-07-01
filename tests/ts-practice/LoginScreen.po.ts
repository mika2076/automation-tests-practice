import { Page, Locator, expect } from '@playwright/test';

export class LogIn {
    readonly page: Page;
    readonly testLoginLabel: Locator;
    readonly userNameField: Locator;
    readonly passwordField: Locator;
    readonly submitButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.testLoginLabel = this.page.getByRole('heading', { name: 'Test login' });
        this.userNameField = this.page.getByRole('textbox', { name: 'Username' });
        this.passwordField = this.page.getByRole('textbox', { name: 'Password' });
        this.submitButton = this.page.getByRole('button', { name: 'Submit' });
    }

    async verifyTestLoginScreen() {
        await expect(this.testLoginLabel).toBeVisible();
        await expect(this.userNameField).toBeVisible();
        await expect(this.passwordField).toBeVisible();
        await expect(this.submitButton).toBeVisible();
    }

    async enterUserName(userName: string) {
        await this.userNameField.fill(userName);
    }

    async enterPassword(password: string) {
        await this.passwordField.fill(password);
    }
    
    async clickSubmitButton() {
        await this.submitButton.click();
    }

}