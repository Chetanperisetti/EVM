import { createBdd } from 'playwright-bdd';
import { faker } from '@faker-js/faker';
import { expect } from '@playwright/test';
import  {CreateTripPage } from '../../../pages/CreateTripPage';

const { Given, When, Then } = createBdd();

When('I navigate to Travel and create a trip', async ({ page }) => {
  const createTripPage = new CreateTripPage(page);

  // Travel navigation
  await createTripPage.travelLink.click();
  await createTripPage.verifyTripPage();

  // Trip Name
  await createTripPage.tripName.fill(`Trip - ${faker.word.noun()}`);

  // Travel Mode (Domestic / International)
  await createTripPage.travelMode.click();
  await createTripPage.pickTravelMode();

  // Dates
  // const startDate = await createTripPage.startDate();
  // await createTripPage.selectEndDate(startDate);
    await createTripPage.tripStartDate.click();
    await createTripPage.datestart.click();
    await page.locator('.cdk-overlay-backdrop').click();
    await createTripPage.tripEndDate.click();
    await createTripPage.dateend.click();

  // Reason
  await createTripPage.selectRandomReason();

  // Booking Type
  const selectedBookingType = await createTripPage.selectBookingType();

  // Project Name
  await createTripPage.selectProjectNameIfRequired(selectedBookingType);

  // Passenger form
  await createTripPage.fillPassengerFormIfRequired(selectedBookingType);

  // Submit trip
  await createTripPage.submitTrip(selectedBookingType);

  // Book a ticket
  await createTripPage.bookTicket();
});

Then('the trip should be created successfully', async ({ page }) => {
  await expect(page).toHaveURL(/.*ticketBooking/); 
  console.log("Trip created successfully and navigated to ticket booking.");
});
