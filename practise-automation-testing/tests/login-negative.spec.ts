import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { config } from '../utils/config';

test.describe('TC-NEG | Negative Login Scenarios', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('TC006 - Login with invalid username shows error message', async ({ page }) => {
    await loginPage.login(config.invalidUsername, config.validPassword);
    await loginPage.assertErrorMessage('Your username is invalid!');
    await expect(page).toHaveURL(/practise-test-login/);
  });

  test('TC007 - Login with invalid password shows error message', async ({ page }) => {
    await loginPage.login(config.validUsername, config.invalidPassword);
    await loginPage.assertErrorMessage('Your password is invalid!');
    await expect(page).toHaveURL(/practise-test-login/);
  });

  test('TC008 - Login with empty username shows error message', async () => {
    await loginPage.login('', config.validPassword);
    await loginPage.assertErrorMessage('Your username is invalid!');
  });

  test('TC009 - Login with empty password shows error message', async () => {
    await loginPage.login(config.validUsername, '');
    await loginPage.assertErrorMessage('Your password is invalid!');
  });

  test('TC010 - Login with both fields empty shows error message', async () => {
    await loginPage.login('', '');
    await expect(loginPage.errorMessage).toBeVisible();
  });
});