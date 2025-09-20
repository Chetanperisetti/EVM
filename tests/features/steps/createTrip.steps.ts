import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { CreateTripPage } from '../../../pages/CreateTripPage';
import { faker } from '@faker-js/faker';

const { Given, When, Then } = createBdd();

let createTripPage: CreateTripPage;
let selectedBookingType: string | null;

Given('I navigate to the dashboard', async ({ page }) => {
  createTripPage = new CreateTripPage(page);
});

When('I click on the TRAVEL link', async () => {
  await createTripPage.travelLink.click();
});

Then('I should be navigated to the trip creation page', async () => {
  await createTripPage.verifyTripPage();
});

When('I enter a random trip name', async () => {
  await createTripPage.tripName.fill(`Trip - ${faker.word.noun()}`);
});

When('I select a travel mode', async () => {
  await createTripPage.travelMode.click();
  await createTripPage.pickTravelMode();
});

When('I select the trip start and end dates', async () => {
  await createTripPage.tripStartDate.click();
  await createTripPage.datestart.click();
  await createTripPage.page.locator('.cdk-overlay-backdrop').click();

  await createTripPage.tripEndDate.click();
  await createTripPage.dateend.click();
});

When('I select a random reason', async () => {
  await createTripPage.selectRandomReason();
});

When('I choose a booking type', async () => {
  selectedBookingType = await createTripPage.selectBookingType();
});

When('I select a project name if required', async () => {
  await createTripPage.selectProjectNameIfRequired(selectedBookingType);
});

When('I fill the passenger details if required', async () => {
  await createTripPage.fillPassengerFormIfRequired(selectedBookingType);
});

When('I submit the trip', async () => {
  await createTripPage.submitTrip(selectedBookingType);
});

When('I book a ticket', async () => {
  await createTripPage.bookTicket();
});

Then('the trip should be created successfully', async ({ page }) => {
  await expect(page).toHaveURL(/.*ticketBooking/);
});
