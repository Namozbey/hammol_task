import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Popover } from ".";

const options = [
  { label: "All", action: () => console.log("all") },
  { label: "Docs", action: () => console.log("docs") },
];

describe("Testing Popover", () => {
  it("Snapshots", () => {
    const { asFragment } = render(
      <Popover options={options}>
        <button>click</button>
      </Popover>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("Fire change event", () => {
    let isClicked = false;
    const action = () => {
      isClicked = true;
    };

    const newOptions = [
      { label: "All", action: () => console.log("all") },
      { label: "Docs", action },
    ];

    render(
      <Popover options={newOptions}>
        <button>expand</button>
      </Popover>
    );
    const element = screen.getByText("expand");
    fireEvent.click(element);
    fireEvent.click(screen.getByText("Docs"));

    expect(isClicked).toBe(true);
  });
});
