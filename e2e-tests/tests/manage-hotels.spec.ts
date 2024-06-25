import { test, expect } from "@playwright/test";
import path from "path";

const UI_URL = "http://localhost:5173/";

test.beforeEach(async ({ page }) => {
  await page.goto(UI_URL);

  // Navigate to Sign In page
  await page.getByRole("link", { name: "Sign In" }).click();
  await expect(page.getByRole("heading", { name: "Sign In" })).toBeVisible();

  // Perform Login
  await page.locator("[name=email]").fill("test_register_75552@test.com");
  await page.locator("[name=password]").fill("password123");
  await page.getByRole("button", { name: "Login" }).click();

  // Verify login was successful
  await expect(page.getByRole("link", { name: "My Bookings" })).toBeVisible();
  await expect(page.getByRole("link", { name: "My Hotels" })).toBeVisible();
});
// test to add hotel
test("should allow user to add a hotel", async ({ page }) => {
  // Ensure the login session is maintained
  await page.goto(`${UI_URL}add-hotel`);

  // Fill hotel details
  await page.locator('[name="name"]').fill("Test Hotel");
  await page.locator('[name="city"]').fill("Test City");
  await page.locator('[name="country"]').fill("Test Country");
  await page
    .locator('[name="description"]')
    .fill("This is a description for the Test Hotel");
  await page.locator('[name="pricePerNight"]').fill("100");
  await page.selectOption('select[name="starRating"]', "3");

  // Select hotel type
  await page.getByText("Budget").click();

  // Select facilities
  await page.getByLabel("Free Wifi").check();
  await page.getByLabel("Parking").check();

  // Fill in guest counts
  await page.locator('[name="adultCount"]').fill("2");
  await page.locator('[name="childCount"]').fill("4");

  // Upload images
  await page.setInputFiles('[name="imageFiles"]', [
    path.join(__dirname, "files", "1.png"),
    path.join(__dirname, "files", "2.png"),
  ]);

  // Submit form
  await page.getByRole("button", { name: "Save" }).click();

  // Verify hotel is saved
  await expect(page.getByText("Hotel Saved!")).toBeVisible();
});

// Test show my hotels
test("should display hotels", async ({ page }) => {
  await page.goto(`${UI_URL}my-hotels`);

  await expect(page.getByText("Dublin Getaways")).toBeVisible();
  await expect(page.getByText("Lorem ipsum dolor sit amet")).toBeVisible();
  await expect(page.getByText("Dublin, Ireland")).toBeVisible();
  await expect(page.getByText("All Inclusive")).toBeVisible();
  await expect(page.getByText("£119 per night")).toBeVisible();
  await expect(page.getByText("2 adults, 3 children")).toBeVisible();
  await expect(page.getByText("2 Star Rating")).toBeVisible();

  await expect(
    page.getByRole("link", { name: "View Details" }).first()
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "Add Hotel" })).toBeVisible();
});

// test("should edit hotel", async ({ page }) => {
//   await page.goto(`${UI_URL}my-hotels`);

//   await page.getByRole("link", { name: "View Details" }).first().click();

//   await page.waitForSelector('[name="name"]', { state: "attached" });
//   await expect(page.locator('[name="name"]')).toHaveValue("Dublin Getaways");
//   await page.locator('[name="name"]').fill("Dublin Getaways UPDATED");
//   await page.getByRole("button", { name: "Save" }).click();
//   await expect(page.getByText("Hotel Saved!")).toBeVisible();

//   await page.reload();

//   await expect(page.locator('[name="name"]')).toHaveValue(
//     "Dublin Getaways UPDATED"
//   );
//   await page.locator('[name="name"]').fill("Dublin Getaways");
//   await page.getByRole("button", { name: "Save" }).click();
// });
