import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Checkbox } from ".";

describe("Testing Checkbox", () => {
  it("Snapshots", () => {
    const { asFragment } = render(<Checkbox name="checkbox" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("Fire change event", () => {
    const { getByTestId } = render(
      <Checkbox id="checkbox" data-testid="checkbox" />
    );
    const element = getByTestId("checkbox") as HTMLInputElement;
    expect(element.checked).toBe(false);

    fireEvent.change(element, { target: { checked: true } });
    expect(element.checked).toBe(true);
  });
});
