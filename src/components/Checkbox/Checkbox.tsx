import React, { ReactNode } from "react";
import styled from "styled-components";

const StyledCheckbox = styled.input`
  padding: 0;
  margin: 0;
  width: 16px;
  height: 16px;
`;

interface Props {
  name?: string;
  checked?: boolean;
  id?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  [key: string]: string | number | ReactNode;
}

export default function Checkbox(props: Props): JSX.Element {
  const { name, checked, id, onChange, ...rest } = props;
  return (
    <StyledCheckbox
      type="checkbox"
      name={name}
      id={id}
      checked={checked}
      onChange={onChange}
      {...rest}
    />
  );
}
