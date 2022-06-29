import React, { ReactNode } from "react";

interface Props {
  current: string;
  value: string;
  children: ReactNode;
}

export default function TabPanel(props: Props): JSX.Element {
  const { current, value, children } = props;

  if (current === value) {
    return <>{children}</>;
  }

  return null;
}
