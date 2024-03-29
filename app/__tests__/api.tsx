import axios from "axios";
import "@/helpers/matchMedia";
import "@testing-library/jest-dom";
import { GenerateShortUrl, isUrlAvailable, isValidUrl } from "@/api";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("APIs", () => {
  test("Should return true if original url is valid", async () => {
    const formData = new FormData();
    formData.append(
      "ogUrl",
      "https://www.crowdtask.gov.sg/quest/budget-meal/infobites",
    );
    mockedAxios.post.mockResolvedValue({
      data: { isValid: true },
    });
    const result = await isValidUrl(formData);
    const { isValid } = result.data;
    expect(isValid).toBe(true);
  });

  test("Should return true if long url exists in database", async () => {
    const formData = new FormData();
    formData.append(
      "ogUrl",
      "https://www.crowdtask.gov.sg/quest/budget-meal/infobites",
    );
    mockedAxios.post.mockResolvedValue({
      data: { isExist: true },
    });
    const result = await isUrlAvailable(formData);
    const { isExist } = result.data;
    expect(isExist).toBe(true);
  });

  test("should generate a short url", async () => {
    const formData = new FormData();
    formData.append(
      "ogUrl",
      "https://www.crowdtask.gov.sg/quest/budget-meal/infobites",
    );
    mockedAxios.post.mockResolvedValue({
      data: { url: "https://generated-short-url.com" },
    });
    const result = await GenerateShortUrl(formData);
    const { url } = result.data;
    expect(url).toBe("https://generated-short-url.com");
  });
});
