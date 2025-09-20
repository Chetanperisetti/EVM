import { expect, Page } from "@playwright/test";
import { faker } from "@faker-js/faker";

export class CreateTripPage {
  readonly page: Page;
  readonly travelLink;
  readonly tripName;
  readonly travelMode;
  readonly tripStartDate;
  readonly tripEndDate;
  readonly datestart;
  readonly dateend;

  constructor(page: Page) {
    this.page = page;
    this.travelLink = page.getByText("TRAVEL", { exact: true });
    this.tripName = page.locator('input[type="text inpAuto"]');
    this.travelMode = page.locator("#mat-select-0");
    this.tripStartDate = page
      .locator("div")
      .filter({ hasText: /^Trip Start Date\*$/ })
      .getByRole("textbox");
    this.tripEndDate = page.locator("#endDates");
    this.datestart = page.getByRole('button', { name: 'Sat Sep 20' });
    this.dateend = page.getByRole('button', { name: 'Thu Sep 25' });
  }

  async navigateToTravel() {
    await this.travelLink.click();
    await expect(this.page).toHaveURL(/.*createTrip/, { timeout: 10000 });
  }

  async verifyTripPage(){
        await expect(this.page).toHaveURL(/.*createTrip/, { timeout: 10000 });
    }
  async pickTravelMode() {
    const options = await this.page.locator("mat-option").allTextContents();
    const randomIndex = Math.floor(Math.random() * options.length);
    const selectedOption = options[randomIndex];
    await this.page.getByText(selectedOption, { exact: true }).click();

    if (selectedOption.includes("International")) {
      await this.page.getByRole("button", { name: "OK" }).click();
    }
    return selectedOption;
  }

  async selectRandomReason() {
    const reasonDropdown = this.page.getByRole("combobox", {
      name: "Select a reason",
    });
    await reasonDropdown.click();

    const reasonOptions = this.page.getByRole("option");
    const count = await reasonOptions.count();
    if (count > 0) {
      const index = Math.floor(Math.random() * count);
      await reasonOptions.nth(index).click();
    }
  }

  async selectBookingType() {
    const bookingTypeDropdown = this.page.locator("#bookingType");
    await bookingTypeDropdown.click();

    const bookingTypeOptions = this.page.locator("mat-option");
    const count = await bookingTypeOptions.count();

    let selectedType: string | null = null;
    if (count > 0) {
      const index = Math.floor(Math.random() * count);
      const option = bookingTypeOptions.nth(index);
      selectedType = await option.innerText();
      await option.click();
    }
    return selectedType;
  }

  async selectProjectNameIfRequired(selectedBookingType: string | null) {
    if (selectedBookingType && !selectedBookingType.includes("Personal")) {
      const projectDropdown = this.page
        .locator("div")
        .filter({ hasText: /^Project Name - Code\*$/ })
        .nth(2);
      await projectDropdown.click();

      const projectOptions = this.page.locator("mat-option");
      const count = await projectOptions.count();
      if (count > 0) {
        const index = Math.floor(Math.random() * count);
        await projectOptions.nth(index).click();
      }
    } else {
      console.log(`Skipping Project Name → Booking Type is: ${selectedBookingType}`);
    }
  }

  async fillPassengerFormIfRequired(selectedBookingType: string | null) {
    if (selectedBookingType && !selectedBookingType.includes("Business")) {
      console.log(`Filling passenger details for ${selectedBookingType}...`);

      // Title
      const titleDropdown = this.page.locator("#psi").getByRole("combobox");
      await titleDropdown.click();
      const titleOptions = this.page.getByRole("option");
      const count = await titleOptions.count();
      if (count > 0) {
        const randomTitle = Math.floor(Math.random() * count);
        await titleOptions.nth(randomTitle).click();
      }

      // First/Last Name
      await this.page
        .locator(".form-group > .form-control")
        .first()
        .fill(faker.person.firstName());
      await this.page
        .locator("div")
        .filter({ hasText: /^Last Name\*$/ })
        .getByRole("textbox")
        .fill(faker.person.lastName());

      // DOB
      const year = faker.number.int({ min: 1990, max: 2005 });
      const monthIndex = faker.number.int({ min: 0, max: 11 });
      const day = faker.number.int({ min: 1, max: 28 });

      await this.page.locator('input[name="dp"]').click();
      await this.page.getByRole("button", { name: "Choose month and year" }).click();
      await this.page.getByRole("button", { name: String(year) }).click();

      const monthName = new Date(year, monthIndex).toLocaleString("en-US", {
        month: "short",
      });
      await this.page.getByRole("button", { name: monthName }).click();

      const dobDate = new Date(year, monthIndex, day);
      const dobLabel = dobDate.toDateString();
      await this.page.locator(`td[aria-label="${dobLabel}"]`).click();

      // Mobile + Email
      await this.page
        .locator("div")
        .filter({ hasText: /^Mobile\*$/ })
        .getByRole("textbox")
        .fill("9123333333");
      await this.page
        .locator("div")
        .filter({ hasText: /^Email ID\*$/ })
        .getByRole("textbox")
        .fill(faker.internet.email());

      console.log("Passenger details filled successfully!");
    } else {
      console.log("Skipping passenger details → Business Travel");
    }
  }

  async submitTrip(selectedBookingType: string | null) {
    if (selectedBookingType && selectedBookingType.includes("International")) {
      await this.page.getByRole("button", { name: "Proceed" }).click();
      const popupProceed = this.page.getByRole("button", { name: "Proceed" });
      await popupProceed.waitFor({ state: "visible", timeout: 5000 });
      await popupProceed.click();
      console.log("International trip submitted successfully.");
    } else {
      await this.page.getByRole("button", { name: "Proceed" }).click();
      const popupContinue = this.page.getByRole("button", { name: "Continue" });
      await popupContinue.waitFor({ state: "visible", timeout: 5000 });
      await popupContinue.click();
      console.log("Domestic trip submitted successfully.");
    }
  }

async pickFromCity() {
  const field = this.page.locator(
    "div.cityairportlist.col-md-6.dropdownitem-border.fsw-inputbox.search-from-city input[placeholder='Select']"
  );
  await field.click();

  const options = this.page.locator("mat-option:visible");
  await expect(options.first()).toBeVisible({ timeout: 10000 });

  const count = await options.count();
  const index = Math.floor(Math.random() * count);
  await options.nth(index).click();
}

async pickToCity() {
  const field = this.page.locator(
    "div.cityairportlist.col-md-6.dropdownitem-border.fsw-inputbox.search-to-city input[placeholder='Select']"
  );
  await field.click();

  // Wait specifically for the correct dropdown panel to appear
  const dropdownPanel = this.page.locator("#mat-autocomplete-12");
  await expect(dropdownPanel).toBeVisible({ timeout: 10000 });

  // Narrow the options only within this dropdown
  const options = dropdownPanel.locator("mat-option span.airportname");

  // Ensure at least one option is visible
  await expect(options.first()).toBeVisible({ timeout: 10000 });

  const count = await options.count();
  const index = Math.floor(Math.random() * count);
  const selectedOption = options.nth(index);

  const optionText = await selectedOption.textContent();
  console.log(`Selected 'To' city: ${optionText}`);

  // Click the full mat-option, not just the span
  await selectedOption.locator('..').click(); // Move to parent mat-option
}


  async bookTicket() {
    await this.page
      .locator("label[for='mat-radio-2-input'] div[class='mat-radio-outer-circle']")
      .check();
    await this.pickFromCity();
    await this.pickToCity();
    await this.page.getByRole("button", { name: "Search Online" }).click();
    await this.page.waitForSelector("div[role='progressbar']", { state: "hidden" });

    const flights = await this.page.$$("div.skysearch-fare-type");
    const index = Math.floor(Math.random() * flights.length);
    await flights[index].click();

    await this.page
      .locator(".mat-checkbox-inner-container.mat-checkbox-inner-container-no-side-margin")
      .click();
    await this.page.getByRole("button", { name: "Proceed" }).click();
    await this.page.getByRole("button", { name: "Continue" }).click();
    await this.page
      .locator(".mat-checkbox-inner-container.mat-checkbox-inner-container-no-side-margin")
      .check();
    await this.page.getByRole("button", { name: "Book & Submit" }).click();
  }

  async createTrip() {
    await this.tripName.fill(`Trip - ${faker.word.noun()}`);
    const travelMode = await this.pickTravelMode();

    const startDate = await this.startDate();
    await this.selectEndDate(startDate);

    await this.selectRandomReason();
    const bookingType = await this.selectBookingType();
    await this.selectProjectNameIfRequired(bookingType);
    await this.fillPassengerFormIfRequired(bookingType);
    await this.submitTrip(bookingType);
    await this.bookTicket();
  }

  // Start + End Date helpers
  async startDate(): Promise<Date> {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const ariaLabel = tomorrow.toDateString();
    await this.tripStartDate.click();
    await this.page.locator(`td[aria-label="${ariaLabel}"] div.mat-calendar-body-cell-content`).click();
    return tomorrow;
  }

  async selectEndDate(startDate: Date) {
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + 3);
    const ariaLabel = endDate.toDateString();
    await this.tripEndDate.click();
    await this.page.locator(`td[aria-label="${ariaLabel}"]`).click();
    return endDate;
  }
}
