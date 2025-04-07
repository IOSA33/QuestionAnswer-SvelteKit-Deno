import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://www.aalto.fi/en");
  await page.getByRole("button", { name: "Allow all" }).click();
});

test("Aalto site has title Aalto University.", async ({ page }) => {
  expect(await page.title()).toBe("Aalto University");
});

test("Clicking Apply to Aalto and verifying page title", async ({ page }) => {
  await page.getByRole("link", { name: "Apply to Aalto" }).click();
  expect(await page.title()).toBe("Study at Aalto | Aalto University");
});

test("Clicking Study at Aalto to Aalto and verifying page title", async ({ page }) => {
    await page.getByRole("link", { name: "Study at Aalto" }).click();
    expect(await page.title()).toBe("Study at Aalto | Aalto University");
});

test("Clicking Open positions to Aalto and verifying page title", async ({ page }) => {
    await page.getByRole("link", { name: "Open positions" }).click();
    expect(await page.title()).toBe("Open positions | Aalto University");
});

test("Clicking Contact us to Aalto and verifying page title", async ({ page }) => {
    await page.getByRole("link", { name: "Contact us" }).click();
    expect(await page.title()).toBe("Aalto University contact information | Aalto University");
});