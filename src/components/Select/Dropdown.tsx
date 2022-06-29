import React, { useState, useEffect, useRef, useMemo, ReactNode } from "react";
import {
  DropdownWrapper,
  Placeholder,
  Indicator,
  OptionsWrapper,
  DropDownOption,
} from "./styled";

interface Props {
  options?: DropdownOption[];
  value?: string;
  onChange?: (value: string, element: DropdownOption) => void;
  [key: string]: string | number | boolean | ReactNode;
}

export default function Dropdown(props: Props): JSX.Element {
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

  const selectedLabel = useMemo(() => {
    const label = options.find((elm) => elm.value === value)?.label;
    if (!label) return value;
    return label;
  }, [value, options]);

  const onOptionClick = (value: string, element: DropdownOption) => {
    onChange(value, element);
    handleDropdown();
  };
  return (
    <DropdownWrapper ref={dropdownEl} onClick={handleDropdown} {...rest}>
      <Placeholder textTransform="uppercase">{selectedLabel}</Placeholder>
      <Indicator className="material-icons" open={isOpen}>
        arrow_drop_down
      </Indicator>
      <OptionsWrapper onClick={(e) => e.stopPropagation()} open={isOpen}>
        {options &&
          options.map((elm) => (
            <DropDownOption
              isSelected={elm.value === value}
              key={elm.value}
              onClick={() => onOptionClick(elm.value, elm)}
            >
              <p>{elm.label}</p>
            </DropDownOption>
          ))}
      </OptionsWrapper>
    </DropdownWrapper>
  );
}
