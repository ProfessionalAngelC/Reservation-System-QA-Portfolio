
import { test, expect } from '@playwright/test';

test('Admin can log in successfully', async ({ page }) => {

  await page.goto('https://automationintesting.online/admin');

  await page.getByRole('textbox', { name: 'Username' }).fill('admin');

  await page.getByRole('textbox', { name: 'Password' }).fill('password');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByRole('button', { name: 'Logout' })).toBeVisible();

});



test('Invalid admin login shows error message', async ({ page }) => {

  await page.goto('https://automationintesting.online/admin');

  await page.getByRole('textbox', { name: 'Username' }).fill('admin');

  await page.getByRole('textbox', { name: 'Password' }).fill('wrongpassword123');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByText('Invalid credentials')).toBeVisible();

});



test('Booking section displays all room categories', async ({ page }) => {

  await page.goto('https://automationintesting.online/');

  await page.locator('#navbarNav').getByRole('link', { name: 'Booking' }).click();

  await expect(page.getByRole('heading', { name: 'Our Rooms' })).toBeVisible();

  await expect(page.getByRole('heading', { name: 'Single' })).toBeVisible();

  await expect(page.getByRole('heading', { name: 'Double' })).toBeVisible();

  await expect(page.getByRole('heading', { name: 'Suite' })).toBeVisible();

});
