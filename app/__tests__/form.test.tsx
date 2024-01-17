import { fireEvent, render, screen } from "@testing-library/react";
import { Providers } from "@/redux/provider";
import "@/helpers/matchMedia";
import "@testing-library/jest-dom";
import Form from "@/components/Form";

beforeEach(() => {
  jest.spyOn(console, "error");
  /* eslint-disable no-console */
  // @ts-expect-error jest.spyOn adds this functionallity
  console.error.mockImplementation(() => null);
});

describe("Form Component", () => {
  test("Should consists of an input field and a submit button", () => {
    const { getByText } = render(
      <Providers>
        <Form />
      </Providers>,
    );

    const inputField = screen.getByRole("textbox", { name: "" });
    const buttonText = getByText("Shorten URL");
    expect(inputField).toBeInTheDocument();
    expect(buttonText).toBeInTheDocument();
  });

  test("Should trigger the submit button and set the form state value correctly", () => {
    render(
      <Providers>
        <Form />
      </Providers>,
    );
    const inputField = screen.getByRole("textbox") as HTMLInputElement;
    const submitBtn = screen.getByRole("button", { name: "Shorten URL" });
    fireEvent.change(inputField, {
      target: { value: "https://testasuperlongurlhere.com" },
    });
    fireEvent.click(submitBtn);
    expect(inputField.value).toBe("https://testasuperlongurlhere.com");
  });
});
