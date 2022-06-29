import React from "react";
import { render } from "@testing-library/react";
import Tag from ".";

describe("Testing Tag", () => {
  it("Snapshots", () => {
    const { asFragment } = render(<Tag>2016</Tag>);
    expect(asFragment()).toMatchSnapshot();
  });
});
