import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import usePpayaQuery from "./hooks/use-ppaya-query";

jest.mock("./hooks/use-ppaya-query");
jest.useFakeTimers();

describe("App tests", () => {
  beforeEach(() => {
    jest.runAllTimers();
  });

  it("renders the tailwind message", () => {
    (usePpayaQuery as jest.Mock).mockImplementation(() => ({
      loading: false,
      data: [],
    }));

    render(<App />);

    const tailwindText = screen.getByText(/This project is using TailwindCSS/i);
    expect(tailwindText).toBeInTheDocument();
  });
});
