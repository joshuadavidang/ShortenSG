import { isValidUrl, validateFormLength } from "@/helper";
import "@testing-library/jest-dom";
import "@/helper/matchMedia";

describe("Input Field Validation", () => {
  test("Should return true if the input field is not empty", () => {
    const result = validateFormLength("Hello World");
    expect(result).toBe(true);
  });

  test("Should return false if the input field is empty", () => {
    const result = validateFormLength("");
    expect(result).toBe(false);
  });

  test("Should return true if the protocol 'https' or 'http' exist in the url", () => {
    const result = isValidUrl(
      "https://www.crowdtask.gov.sg/quest/budget-meal/infobites"
    );
    expect(result).toBe(true);
  });

  test("Should return false if the protocol 'https' or 'http' does not exist in the url", () => {
    const result = isValidUrl(
      "www.crowdtask.gov.sg/quest/budget-meal/infobites"
    );
    expect(result).toBe(false);
  });
});
