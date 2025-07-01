import { Page, Locator } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly welcomeMessage: Locator;
    readonly loginMessage: Locator;
    readonly homeLink: Locator;
    readonly practiceLink: Locator
    readonly coursesLink: Locator;
    readonly blogLink: Locator;
    readonly contactLink: Locator;
    readonly logoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.welcomeMessage = this.page.getByText('Welcome to Practice Test');
        this.homeLink = this.page.getByRole('link', { name: 'Home' });
        this.practiceLink = this.page.getByRole('link', { name: 'Practice', exact: true });
        this.coursesLink = this.page.getByRole('link', { name: 'Courses', exact: true });
        this.blogLink = this.page.getByRole('link', { name: 'Blog', exact: true });
        this.contactLink = this.page.getByRole('link', { name: 'Contact', exact: true });
        this.loginMessage = this.page.getByRole('heading', { name: 'Logged In Successfully' });
        this.logoutButton = this.page.getByRole('link', { name: 'Log out' });
    }

    async navigate() {
        await this.page.goto('https://practicetestautomation.com/');
    }

    async clickPracticeLink() {
        await this.practiceLink.click();
    }

    async clickLogOutButton() {
        await this.logoutButton.click();
    }
}