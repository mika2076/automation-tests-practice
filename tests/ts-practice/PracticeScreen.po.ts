import { Page, Locator, expect } from '@playwright/test';

export class PracticeScreen {
    readonly page: Page;
    readonly practiceLabel: Locator;
    readonly testLoginPageLink: Locator;
    readonly testExceptionsLink : Locator;
    readonly testLoginPageDefinition : Locator;
    readonly testExceptionsPageDefinition : Locator;

    constructor(page: Page) {
        this.page = page;
        this.practiceLabel = this.page.getByRole('heading', { name: 'Practice' });
        this.testLoginPageLink = this.page.getByRole('link', { name: 'Test Login Page' });
        this.testExceptionsLink = this.page.getByRole('link', { name: 'Test Exceptions' });
        this.testLoginPageDefinition = this.page.getByRole('paragraph').filter({ hasText: 'Simple login page where' });
        this.testExceptionsPageDefinition = this.page.getByText('Page to reproduce the most');
    }

    async verifyPracticeScreen() {
        await expect(this.practiceLabel).toHaveText("Practice");
        await expect(this.testLoginPageLink).toBeVisible();
        await expect(this.testLoginPageDefinition).toHaveText("Simple login page where testers can execute positive and negative login test cases");
    }

    async clickTestLoginPageLink() {
        await this.testLoginPageLink.click();
    }
}