import { test, expect } from '@playwright/test';
import { HomePage } from './HomeScreen.po';
import { LogIn } from './LoginScreen.po';
import { PracticeScreen } from './PracticeScreen.po';

test.describe("Practice Test Automation", () => {
    let homePage: HomePage;
    let login: LogIn;
    let practiceScreen: PracticeScreen;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        login = new LogIn(page);
        practiceScreen = new PracticeScreen(page);
    });

    test('Verify Home Screen', async ({ page }) => {
        await homePage.navigate();
        await page.waitForLoadState("load");
        await expect(homePage.welcomeMessage).toBeVisible();
        await expect(homePage.homeLink).toBeVisible();
        await expect(homePage.practiceLink).toBeVisible();
        await expect(homePage.coursesLink).toBeVisible();
        await expect(homePage.blogLink).toBeVisible();
        await expect(homePage.contactLink).toBeVisible();
    });

    test('Verify Practice Screen', async ({ page }) => {
        await homePage.navigate();
        await page.waitForLoadState("load");
        await homePage.practiceLink.click();
        await expect(practiceScreen.practiceLabel).toBeVisible();
        await expect(practiceScreen.testLoginPageLink).toBeVisible();
        await expect(practiceScreen.testLoginPageDefinition).toBeVisible();
        await expect(practiceScreen.testExceptionsLink).toBeVisible();
        await expect(practiceScreen.testExceptionsPageDefinition).toBeVisible();
    });

    test('Verify Login Screen', async ({ page }) => {
        await homePage.navigate();
        await page.waitForLoadState("load");
        await homePage.practiceLink.click();
        await practiceScreen.testLoginPageLink.click();
        await expect(login.userNameField).toBeVisible();
        await expect(login.passwordField).toBeVisible();
        await expect(login.submitButton).toBeVisible();
    });
    
    test('Login Test', async ({ page }) => {
        await homePage.navigate();
        await page.waitForLoadState("load");
        await homePage.practiceLink.click();
        await practiceScreen.testLoginPageLink.click();
        await login.enterUserName("student");
        await login.enterPassword("Password123");
        await login.clickSubmitButton();
        await expect(homePage.loginMessage).toBeVisible();
    })
});
