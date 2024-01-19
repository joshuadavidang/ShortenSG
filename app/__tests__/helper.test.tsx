import { validateFormLength } from "@/helpers";
import "@testing-library/jest-dom";
import "@/helpers/matchMedia";

describe("Input Field Validation", () => {
  test("Should return true if the input field is not empty", () => {
    const result = validateFormLength("Hello World");
    expect(result).toBe(true);
  });

  test("Should return false if the input field is empty", () => {
    const result = validateFormLength("");
    expect(result).toBe(false);
  });
});
