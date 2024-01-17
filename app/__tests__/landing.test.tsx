import Landing from "@/components/Landing";
import { render, screen } from "@testing-library/react";
import { Providers } from "@/redux/provider";
import "@/helpers/matchMedia";
import "@testing-library/jest-dom";

beforeEach(() => {
  jest.spyOn(console, "error");
  /* eslint-disable no-console */
  // @ts-expect-error jest.spyOn adds this functionallity
  console.error.mockImplementation(() => null);
});

describe("Landing Page", () => {
  test("Should renders and matches the user interface correctly", () => {
    const { asFragment } = render(
      <Providers>
        <Landing />
      </Providers>,
    );
    const fragment = asFragment();
    expect(fragment).toMatchSnapshot();
  });

  test("Should render 3 headings in the landing page", () => {
    render(
      <Providers>
        <Landing />
      </Providers>,
    );
    expect(
      screen.getByText("Bid farewell to long and ugly URLs"),
    ).toBeInTheDocument();
    expect(screen.getByText("✂️ Shorten them now")).toBeInTheDocument();
    expect(
      screen.getByText("One step closer to looking credible ⤵"),
    ).toBeInTheDocument();
  });
});
