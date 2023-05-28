import React from "react";
import type { ChangeEventHandler, ReactNode } from "react";
import Control from "./Control.js";
import type { BaseControlProps } from "./Control.js";

export interface SelectProps extends BaseControlProps {
  children?: ReactNode;
  value?: string;
  defaultValue?: string;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
}

export default function Select({
  title,
  attention,
  description,
  children,
  defaultValue,
  value,
  onChange,
}: SelectProps) {
  return (
    <Control title={title} attention={attention} description={description}>
      <select
        className="inputGrey2"
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
      >
        {children}
      </select>
    </Control>
  );
}
