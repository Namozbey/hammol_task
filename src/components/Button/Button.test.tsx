import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Testing Button", () => {
  it("Snapshots", () => {
    const ContainedButton = render(
      <Button variant="contained">contained</Button>
    );
    expect(ContainedButton.asFragment()).toMatchSnapshot();

    const OutlinedButton = render(<Button variant="outlined">outlined</Button>);
    expect(OutlinedButton.asFragment()).toMatchSnapshot();

    const textButton = render(<Button variant="text">text</Button>);
    expect(textButton.asFragment()).toMatchSnapshot();
  });

  it("Fire click event", () => {
    const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      expect(e).not.toBeUndefined();
      expect(e).not.toBeNull();
    };

    const { getByText } = render(<Button onClick={onClick}>click</Button>);
    const element = getByText("click");
    fireEvent.click(element);
  });
});
