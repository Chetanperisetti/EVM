import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { LoginPage } from '../pages/LoginPage';
import { CreateTripPage } from '../pages/CreateTripPage';

test('Login to the application', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.username.fill('user.re@gmail.com');
    await loginPage.password.fill('Test@123');
    await loginPage.loginBtn.click();
    //assertion to check that after login the application navigates to the dashboard or not
    await loginPage.verifyDashboard();
});

test.only('User can create a travel trip', async ({ page }) => {
  // Login
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.username.fill('user.re@gmail.com');
  await loginPage.password.fill('Test@123');
  await loginPage.loginBtn.click();
  await loginPage.verifyDashboard();

  // Navigate to Travel Link
  const createTripPage = new CreateTripPage(page);

  await createTripPage.navigateToTravel();

  await createTripPage.createTrip();
//   await createTripPage.travelLink.click();
//   await createTripPage.verifyTripPage();

//   //Fill Trip Details
//   await createTripPage.tripName.fill(`Trip - ${faker.word.noun()}`);

//   // Select Domestic
//   await createTripPage.travelMode.click();
//   await createTripPage.pickTravelMode();

//   // Start Date
//   await createTripPage.tripStartDate.click();
//   await createTripPage.datestart.click();

//   // End Date
//   await page.locator('.cdk-overlay-backdrop').click();
//   await createTripPage.tripEndDate.click();
//   await createTripPage.dateend.click();

//   // Reason
//   function getRandomIndex(length: number): number {
//     return Math.floor(Math.random() * length);
//   }

//   await createTripPage.reason();

//   // Booking Type
//   const bookingTypeDropdown = page.locator('#bookingType');
//   await bookingTypeDropdown.click();

//   const bookingTypeOptions = page.locator('mat-option');
//   const bookingCount = await bookingTypeOptions.count();

//   let selectedBookingType: string | null = null;
//   if (bookingCount > 0) {
//     const randomBookingIndex = getRandomIndex(bookingCount);
//     const bookingOption = bookingTypeOptions.nth(randomBookingIndex);
//     selectedBookingType = await bookingOption.innerText();
//     await bookingOption.click();
//   }

//   //Project Name (skip if Personal)
//   if (selectedBookingType && !selectedBookingType.includes("Personal")) {
//     const projectDropdown = page.locator('div').filter({ hasText: /^Project Name - Code\*$/ }).nth(2);
//     await projectDropdown.click();

//     const projectOptions = page.locator('mat-option');
//     const projectCount = await projectOptions.count();
//     if (projectCount > 0) {
//       const randomProjectIndex = getRandomIndex(projectCount);
//       await projectOptions.nth(randomProjectIndex).click();
//     }
//   } else {
//     console.log(`Skipping Project Name → Booking Type is: ${selectedBookingType}`);
//   }

//   // Passenger Form (skip if Business Travel)
//   if (selectedBookingType && !selectedBookingType.includes("Business")) {
//     console.log(`Filling passenger details for ${selectedBookingType}...`);

//     // Title dropdown
//     const titleDropdown = page.locator('#psi').getByRole('combobox');
//     await titleDropdown.click();

//     const titleOptions = page.getByRole('option');
//     const titleCount = await titleOptions.count();
//     if (titleCount > 0) {
//       const randomTitle = getRandomIndex(titleCount);
//       await titleOptions.nth(randomTitle).click();
//     }

//     // First Name
//     await page.locator('.form-group > .form-control').first().fill(faker.person.firstName());

//     // Last Name
//     const lastNameBox = page.locator('div').filter({ hasText: /^Last Name\*$/ }).getByRole('textbox');
//     await lastNameBox.fill(faker.person.lastName());

//     const year = faker.number.int({ min: 1990, max: 2005 });
//     const monthIndex = faker.number.int({ min: 0, max: 11 });
//     const day = faker.number.int({ min: 1, max: 28 });

//     // Open DOB picker
//     await page.locator('input[name="dp"]').click();

//     await page.getByRole('button', { name: 'Choose month and year' }).click();

//     await page.getByRole('button', { name: String(year) }).click();

//     const monthName = new Date(year, monthIndex).toLocaleString("en-US", { month: "short" });
//     await page.getByRole('button', { name: monthName }).click();

//     const dobDate = new Date(year, monthIndex, day);
//     const dobLabel = dobDate.toDateString(); 
//     await page.locator(`td[aria-label="${dobLabel}"]`).click();
//     const mobileBox = page.locator('div').filter({ hasText: /^Mobile\*$/ }).getByRole('textbox');
//     await mobileBox.fill('9123333333');
//     // await mobileBox.fill(faker.phone.number());
//     const emailBox = page.locator('div').filter({ hasText: /^Email ID\*$/ }).getByRole('textbox');
//     await emailBox.fill(faker.internet.email());

//     console.log("Passenger details filled successfully!");
//   } else {
//     console.log("Skipping passenger details → Business Travel");
//   }

// // Submit Trip 
//   if (selectedBookingType && selectedBookingType.includes("International")) {
//     // International -> Proceed + Popup Proceed
//     await page.getByRole('button', { name: 'Proceed' }).click();

//     const popupProceed = page.getByRole('button', { name: 'Proceed' });
//     await popupProceed.waitFor({ state: 'visible', timeout: 5000 });
//     await popupProceed.click();

//     console.log("International trip submitted successfully.");
//   } else {
//     // Domestic/Other -> Proceed + Popup Continue
//     await page.getByRole('button', { name: 'Proceed' }).click();

//     const popupContinue = page.getByRole('button', { name: 'Continue' });
//     await popupContinue.waitFor({ state: 'visible', timeout: 5000 });
//     await popupContinue.click();

//     console.log("Domestic trip submitted successfully.");
//   }

//   //book a ticket 
//   //domestic trip type 
//   await page.locator("label[for='mat-radio-2-input'] div[class='mat-radio-outer-circle']").check();
//   //from
//   await createTripPage.pickFromCity(page);

//   //to
// await createTripPage.pickToCity(page);
//   //search button
//   await page.getByRole("button",{ name : 'Search Online'}).click();

//   //progress bar should be hidden 
//   await page.waitForSelector("div[role='progressbar']", { state: "hidden" });


//   //select any flight 
//   const options = await page.$$("div.skysearch-fare-type");
//   const randomIndex = Math.floor(Math.random() * options.length);
//   await options[randomIndex].click();

//   //click on the check box 
//   await page.locator(".mat-checkbox-inner-container.mat-checkbox-inner-container-no-side-margin");
//   await page.getByRole("button",{name:"Proceed"}).click();

//   //continue
//   await page.getByRole("button",{ name : 'Continue'}).click();


//   //navigates to the payment page there you have to select the checkbox
//   await page.locator(".mat-checkbox-inner-container.mat-checkbox-inner-container-no-side-margin").check();

//   //book
//   await page.getByRole("button",{ name : 'Book & Submit'}).click();

});


