import React, { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children: ReactNode;
}

const Wrapper = styled.div`
  border: 1px solid #979797;
  border-radius: 4px;
  padding: 4px 16px;
  font-family: Montserrat, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0px;
  text-align: center;
`;

export default function Tag(props: Props) {
  return <Wrapper>{props.children}</Wrapper>;
}
