import React from "react";
import styled from "styled-components";

interface Props {
  value: string;
  label: string;
  current?: string;
  onClick?: (value: string, event: React.MouseEvent<HTMLElement>) => void;
}

interface StyledProps {
  value: string;
  current: string;
}

const StyledTab = styled.div<StyledProps>`
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  padding: 20px 0;
  cursor: pointer;
  user-select: none;
  -webkit-touch-callout: none;
  position: relative;

  &::after {
    transition-duration: 500ms;
    content: "";
    height: 3px;
    width: ${(props) => (props.value === props.current ? "100%" : "0px")};
    position: absolute;
    bottom: 0;
    left: ${(props) => (props.value === props.current ? 0 : "50%")};
    background-color: #f65261;
    z-index: 1;
  }
`;

const Title = styled.p`
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  text-transform: uppercase;
`;

export default function Tab(props: Props): JSX.Element {
  const { value, current, label, onClick } = props;

  return (
    <StyledTab
      current={current}
      value={value}
      onClick={(e) => onClick(value, e)}
    >
      <Title>{label}</Title>
    </StyledTab>
  );
}

Tab.defaultProps = {};
