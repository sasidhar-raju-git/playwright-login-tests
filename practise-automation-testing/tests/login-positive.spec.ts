import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { config } from '../utils/config';

test.describe('TC-POS | Positive Login Scenarios', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('TC001 - Valid login with correct credentials shows success page', async ({ page }) => {
    await loginPage.login(config.validUsername, config.validPassword);
    await loginPage.assertLoginSuccess();
    await expect(page).toHaveURL(/logged-in-successfully/);
  });

  test('TC002 - Valid login redirects away from login URL', async ({ page }) => {
    await loginPage.login(config.validUsername, config.validPassword);
    await expect(page).not.toHaveURL('/');
    await expect(page).toHaveURL(/logged-in-successfully/);
  });

  test('TC003 - Login form fields are visible and interactive', async () => {
    await loginPage.assertFieldsVisible();
    await loginPage.enterUsername(config.validUsername);
    await expect(loginPage.usernameInput).toHaveValue(config.validUsername);
  });

  test('TC004 - Password field masks the entered text', async () => {
    await loginPage.enterPassword(config.validPassword);
    await loginPage.assertPasswordFieldMasked();
  });

  test('TC005 - Login page has correct page title', async () => {
    const title = await loginPage.getPageTitle();
    expect(title).toBeTruthy();
    expect(title.toLowerCase()).toContain('login');
  });
});