import React from "react";
import { render } from "@testing-library/react";
import { MultipleSelect } from ".";

const options = [
  { label: "All", value: "all" },
  { label: "Docs", value: "doc" },
];

describe("Testing Multiple Select", () => {
  it("Snapshots", () => {
    const { asFragment } = render(
      <MultipleSelect value={["doc"]} options={options} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
