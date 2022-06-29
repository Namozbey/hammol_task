/* eslint-disable indent */
import React, { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  type?: "button" | "submit" | "reset";
  children: number | string | ReactNode;
  variant: "text" | "contained" | "outlined";
  size: {
    x: string;
    y: string;
  };
  icon?: {
    left?: string;
    right?: string;
  };
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const defineColorByVariant = (variant: string) => {
  switch (variant) {
    case "text":
      return `
        background-color: rgba(96, 96, 96, 0.68);
        color: #f65261;
        border-color: transparent;
      `;
    case "contained":
      return `
        background-color: #f65261;
        color: #fff;
        border-color: #f65261;
      `;
    case "outlined":
      return `
        color: #f65261;
        background-color: transparent;
        border-color: #f65261;
      `;
    default:
      return "";
  }
};

const StyledButton = styled.button<Props>`
  width: ${(props) => props.size.x};
  height: ${(props) => props.size.y};
  ${(props) => defineColorByVariant(props.variant)}
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  line-height: 24px;
  font-size: 20px;
  text-transform: uppercase;
  font-family: Montserrat, sans-serif;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
  -webkit-touch-callout: none;
  border-style: solid;
  border-width: 1.5px;
  margin: 0;
  padding: 0;

  &:active {
    opacity: 0.8;
    transition-duration: 150ms;
  }
`;
export default function Button(props: Props): JSX.Element {
  const { type, children, size, variant, icon, ...rest } = props;

  return (
    <StyledButton
      size={size}
      type={type}
      variant={variant}
      // className={`nr-button nr-button-${variant}`}
      {...rest}
    >
      {icon && icon.left && <span className="material-icons">{icon.left}</span>}
      {children}
      {icon && icon.right && (
        <span className="material-icons">{icon.right}</span>
      )}
    </StyledButton>
  );
}

Button.defaultProps = {
  children: "",
  variant: "contained",
  size: { x: "180px", y: "57px" },
  type: "button",
};
