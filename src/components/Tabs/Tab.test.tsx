import React from "react";
import { render } from "@testing-library/react";
import { Tab } from ".";

describe("Testing Tab", () => {
  it("Snapshots", () => {
    const { asFragment } = render(<Tab label="Doc" value="doc" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
