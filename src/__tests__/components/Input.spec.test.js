import React from "react";
import { render, screen } from "@testing-library/react";
import Input from "../../components/Input";

describe("Input Component", () => {
  test("should be able te render an input", () => {
    render(
      <Input error="" name="Email" placeholder="Email" register={() => {}} />
    );
    expect(screen.getByPlaceholderText("Email")).toBeTruthy();
  });
});
