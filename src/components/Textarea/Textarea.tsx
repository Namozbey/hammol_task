import React from "react";
import styled from "styled-components";
// import { Wrapper } from "../Select/styled";

interface Props {
  value?: string;
  placeholder?: string;
  className?: string;
  style?: object;
  size?: number;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  [key: string]: string | number | boolean | object;
}

const Wrapper = styled.div`
  font-family: Montserrat, sans-serif;
  display: flex;
  align-items: center;
  border-radius: 4px;
  background-color: rgba(50, 50, 50, 0.8);
  position: relative;
`;

const StyledTextarea = styled.textarea<Props>`
  background-color: transparent;
  border: none;
  outline: none;
  color: #fff;
  padding: 17px 19px;
  line-height: 24px;
  height: calc(${(props) => props.size} * 24px);
  min-height: 24px;
  font-size: 20px;
  flex: auto;
`;

export default function TextArea(props: Props): JSX.Element {
  const { value, placeholder, className, style, size, onChange, ...rest } =
    props;

  return (
    <Wrapper style={style} className={className}>
      <StyledTextarea
        value={value}
        placeholder={placeholder}
        size={size}
        onChange={onChange}
        {...rest}
      />
    </Wrapper>
  );
}

TextArea.defaultProps = {
  size: 4,
};
