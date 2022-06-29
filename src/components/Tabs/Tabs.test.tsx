import React from "react";
import { render } from "@testing-library/react";
import { Tabs } from ".";

const options = [
  { label: "All", value: "all" },
  { label: "Docs", value: "doc" },
];

describe("Testing Tabs", () => {
  it("Snapshots", () => {
    const { asFragment } = render(
      <Tabs current="doc" options={options} extra={<button>Extra</button>} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
