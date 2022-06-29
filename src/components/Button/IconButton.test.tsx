import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { IconButton } from ".";

describe("Testing IconButton", () => {
  it("Snapshots", () => {
    const { asFragment } = render(<IconButton />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("Fire click event", () => {
    const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      expect(e).not.toBeUndefined();
      expect(e).not.toBeNull();
    };

    const { getByText } = render(
      <IconButton iconName="drop_down" onClick={onClick} />
    );
    const element = getByText("drop_down");
    fireEvent.click(element);
  });
});
