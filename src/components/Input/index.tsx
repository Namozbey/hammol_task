import React, { ReactNode } from "react";
import "./style.scss";

interface Props {
  children?: number | string | ReactNode;
  type?: string;
  placeholder?: string;
  className?: string;
  style?: object;
  value?: string | number;
  defaultValue?: string | number;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  [key: string]: string | number | ReactNode;
}

export default function Input(props: Props): JSX.Element {
  const {
    className,
    style,
    type,
    value,
    defaultValue,
    onBlur,
    onChange,
    onKeyDown,
    ...rest
  } = props;
  return (
    <div className={`nr-input ${className ?? ""}`} style={style}>
      <input
        defaultValue={defaultValue}
        onBlur={onBlur}
        type={type}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        {...rest}
      />
      {type === "date" && (
        <span className="open-button material-icons-outlined">
          calendar_month
        </span>
      )}
    </div>
  );
}

Input.defaultProps = {
  type: "text",
};
