import React from "react";
import { render } from "@testing-library/react";
import { TabPanel } from ".";

describe("Testing TabPanel", () => {
  it("Snapshots", () => {
    const { asFragment } = render(
      <TabPanel value="doc" current="doc">
        <p>Lorem ipsum dolor sit amet.</p>
      </TabPanel>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
