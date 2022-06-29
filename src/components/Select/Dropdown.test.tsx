import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Dropdown } from ".";

const options = [
  { label: "All", value: "all", sortOrder: "asc" },
  { label: "Docs", value: "doc", sortOrder: "asc" },
];

describe("Testing Dropdown", () => {
  it("Snapshots", () => {
    const { asFragment } = render(<Dropdown value="doc" options={options} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("Fire change event", () => {
    const onChange = (val: string, elm: DropdownOption) => {
      expect(val).toBe("doc");
      expect(elm).toEqual(options[1]);
      console.log("worked");
    };

    const { getByTestId } = render(
      <Dropdown data-testid="dropdown" options={options} onChange={onChange} />
    );
    const element = getByTestId("dropdown");
    fireEvent.click(element);
    fireEvent.click(screen.getByText("Docs"));
  });
});
