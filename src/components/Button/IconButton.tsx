import React, { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  style?: object;
  className?: string;
  iconClassName?: string;
  iconName?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  [key: string]: string | number | ReactNode;
}

const StyledIconButton = styled.button`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin: 0;
  padding: 0;
  border: none;
  cursor: pointer;
  background-color: rgba(35, 35, 35, 0.9);

  > span {
    color: #fff;
  }

  &:active {
    opacity: 0.8;
    transition-duration: 150ms;
  }
`;

export default function IconButton(props: Props): JSX.Element {
  const { style, className, iconClassName, iconName, onClick, ...rest } = props;
  return (
    <StyledIconButton
      style={style}
      className={className}
      onClick={onClick}
      {...rest}
    >
      <span className={iconClassName}>{iconName}</span>
    </StyledIconButton>
  );
}

IconButton.defaultProps = {
  iconClassName: "material-icons",
  iconName: "more_vert",
};
