import React, { ReactNode } from "react";
import styled from "styled-components";
import Tab from "./Tab";
import TabPanel from "./TabPanel";

interface Option {
  value: string;
  label: string;
  content?: ReactNode;
}

interface Props {
  current: string;
  options: Option[];
  extra?: ReactNode;
  onChange?: (value: string, event: React.MouseEvent<HTMLElement>) => void;
}

const StyledTabs = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
  position: relative;

  &::after {
    content: "";
    width: 100%;
    height: 2px;
    border-bottom: 1px solid #232323;
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: #424242;
    box-shadow: 0 1px #080707;
  }
`;

const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const Content = styled.div`
  width: 100%;
`;

export default function Tabs(props: Props): JSX.Element {
  const { current, onChange, options, extra } = props;

  return (
    <>
      <StyledTabs>
        <OptionsContainer>
          {options.map((elm) => (
            <Tab
              key={elm.value}
              label={elm.label}
              value={elm.value}
              onClick={onChange}
              current={current}
            />
          ))}
        </OptionsContainer>
        {extra}
      </StyledTabs>
      <Content>
        {options.map((elm) => (
          <TabPanel key={elm.value} value={elm.value} current={current}>
            {elm.content}
          </TabPanel>
        ))}
      </Content>
    </>
  );
}

Tabs.defaultProps = {};
