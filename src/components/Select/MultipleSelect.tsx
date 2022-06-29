import React, { useState, useEffect, useRef, ReactNode } from "react";
import {
  Wrapper,
  Indicator,
  Placeholder,
  OptionsWrapper,
  DropDownOption,
} from "./styled";
import { Checkbox } from "../Checkbox";

interface Option {
  label: string;
  value: string;
}

interface Props {
  options: Option[];
  value: string[];
  onChange?: (value: string[]) => void;
  [key: string]: string | number | boolean | ReactNode;
}

export default function Select(props: Props): JSX.Element {
  const { options, value, onChange, ...rest } = props;
  const [isOpen, setIsOpen] = useState(false);
  const dropdownEl = useRef(null);

  const handleClose = (event: any) => {
    const path = event.composedPath();

    const isClickInside = path.find(
      (element: any) => element === dropdownEl.current
    );

    if (isClickInside === undefined) {
      if (isOpen) {
        setIsOpen(false);
      }
    }
  };

  const handleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    document.addEventListener("mouseup", handleClose);
    return () => {
      document.removeEventListener("mouseup", handleClose);
    };
  }, [isOpen]);

  const onCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    newValue: string
  ) => {
    if (e.target.checked) {
      onChange([...value, newValue]);
    } else {
      onChange(value.filter((elm) => elm !== newValue));
    }
  };

  return (
    <Wrapper ref={dropdownEl} onClick={handleDropdown} {...rest}>
      <Placeholder>Select Genre</Placeholder>
      <Indicator className="material-icons" open={isOpen}>
        arrow_drop_down
      </Indicator>
      <OptionsWrapper onClick={(e) => e.stopPropagation()} open={isOpen}>
        {options &&
          options.map((elm) => (
            <DropDownOption key={elm.value}>
              <Checkbox
                name={elm.value}
                onChange={(e) => onCheckboxChange(e, elm.value)}
                checked={value?.includes(elm.value)}
              />
              <p>{elm.label}</p>
            </DropDownOption>
          ))}
      </OptionsWrapper>
    </Wrapper>
  );
}

Select.defaultProps = {
  value: [],
};
