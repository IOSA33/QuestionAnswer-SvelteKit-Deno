import { expect, test } from "@playwright/test";

test("The page has loaded", async ({ page }) => {
  await page.goto("/");
  await page.locator(".e2e-ready").waitFor();
});

test("Homepage has the correct title", async ({ page }) => {
  await expect(page).toHaveTitle("");
});

test("Page does not have a header with the text Hello", async ({ page }) => {
  const unwantedHeader1 = page.getByRole("heading", { name: "Hello" });
  await expect(unwantedHeader1).not.toBeVisible();
});

test("Page does not have a header with the text Notes", async ({ page }) => {
  const unwantedHeader2 = page.getByRole("heading", { name: "Notes" });
  await expect(unwantedHeader2).not.toBeVisible();
});

test("Page does not have a header with the text addbutton", async ({ page }) => {
  const unwantedHeader3 = page.getByRole("heading", { name: "addbutton" });
  await expect(unwantedHeader3).not.toBeVisible();
});