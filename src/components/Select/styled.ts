import styled from "styled-components";

interface Props {
  open?: boolean;
}

interface DropdownOptionProps {
  isSelected?: boolean;
  fontSize?: string;
  lineHeight?: string | number;
}

interface PlaceholderProps {
  textTransform?: string;
}

export const Wrapper = styled.div`
  font-family: Montserrat, sans-serif;
  display: flex;
  align-items: center;
  border-radius: 4px;
  background-color: rgba(50, 50, 50, 0.8);
  padding: 17px 19px;
  position: relative;
  cursor: pointer;
`;

export const Placeholder = styled.div<PlaceholderProps>`
  background-color: transparent;
  border: none;
  outline: none;
  color: #fff;
  line-height: 24px;
  height: 24px;
  font-size: 20px;
  padding: 0;
  flex: auto;
  user-select: none;
  -webkit-touch-callout: none;
  text-transform: ${(props) => props.textTransform ?? "none"};
`;

export const Indicator = styled.span<Props>`
  color: #f65261;
  font-size: 40px;
  margin-right: -12px;
  line-height: 24px;
  transition-duration: 300ms;
  transform: rotate(${(props) => (props.open ? 180 : 0)}deg);
`;

export const OptionsWrapper = styled.div<Props>`
  position: absolute;
  background-color: #222222;
  min-width: 100%;
  width: auto;
  left: 0;
  bottom: -2px;
  transform: translateY(100%);
  z-index: 1;
  user-select: none;
  -webkit-touch-callout: none;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  visibility: ${(props) => (props.open ? "visible" : "hidden")};
  max-height: 252px;
  overflow-y: scroll;
`;

export const DropDownOption = styled.label<DropdownOptionProps>`
  width: 100%;
  display: flex;
  gap: 7px;
  align-items: center;
  padding: 9px 18px;
  box-sizing: border-box;
  white-space: nowrap;
  text-transform: capitalize;
  ${(props) =>
    props.isSelected ? "background-color: rgba(246, 82, 97, 0.8);" : ""}

  &:hover {
    background-color: #f65261;
  }

  > p {
    font-family: Montserrat, sans-serif;
    font-size: ${(props) => props.fontSize};
    line-height: ${(props) => props.lineHeight};
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0px;
    user-select: none;
    -webkit-touch-callout: none;
  }
`;

DropDownOption.defaultProps = {
  fontSize: "20px",
  lineHeight: "24px",
};

// ********************* Dropdown ************************

export const DropdownWrapper = styled.div`
  font-family: Montserrat, sans-serif;
  display: flex;
  gap: 10px;
  align-items: center;
  background-color: transparent;
  position: relative;
  cursor: pointer;
  padding: 0 4px;
`;

// ************************** Popover ******************************
export const PopoverWrapper = styled.div<Props>`
  display: inline-block;
  align-items: center;
  background-color: transparent;
  position: relative;
  cursor: pointer;
  user-select: none;
  -webkit-touch-callout: none;
`;

export const ActionsWrapper = styled.div<Props>`
  position: absolute;
  background-color: #222222;
  width: auto;
  min-width: 180px;
  padding: 12px 0;
  right: 0;
  top: 0;
  z-index: 1;
  user-select: none;
  -webkit-touch-callout: none;
  box-shadow: 0 20px 25px -5px rgb(255 255 255 / 0.1),
    0 8px 10px -6px rgb(255 255 255 / 0.1);
  visibility: ${(props) => (props.open ? "visible" : "hidden")};
`;
