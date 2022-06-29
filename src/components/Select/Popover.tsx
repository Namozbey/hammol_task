import React, { useState, useEffect, useRef, ReactNode } from "react";
import { PopoverWrapper, ActionsWrapper, DropDownOption } from "./styled";

interface Option {
  label: string;
  action: () => void;
}

interface Props {
  options?: Option[];
  onChange?: (value: string, element: Option) => void;
  children: ReactNode;
  [key: string]: string | number | boolean | ReactNode;
}

export default function Popover(props: Props): JSX.Element {
  const { options, children, ...rest } = props;
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

  const onOptionClick = (elm: Option) => {
    elm.action();
    handleDropdown();
  };

  return (
    <PopoverWrapper ref={dropdownEl} onClick={handleDropdown}>
      {children}
      <ActionsWrapper onClick={(e) => e.stopPropagation()} open={isOpen}>
        {options &&
          options.map((elm, i) => (
            <DropDownOption
              key={i}
              fontSize="16px"
              lineHeight="19.5px"
              onClick={() => onOptionClick(elm)}
            >
              <p>{elm.label}</p>
            </DropDownOption>
          ))}
      </ActionsWrapper>
    </PopoverWrapper>
  );
}

Popover.defaultProps = {
  options: [
    { label: "Delete", action: () => console.log("Delete") },
    { label: "Edit", action: () => console.log("Edit") },
  ],
};
