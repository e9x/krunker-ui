import type { ChangeEventHandler } from "react";
import React from "react";
import type { BaseControlProps } from "./Control.js";
import { Control } from "./Control.js";

export interface ColorPickerProps extends BaseControlProps {
  value?: string;
  defaultValue?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export function ColorPicker({
  title,
  attention,
  description,
  value,
  defaultValue,
  onChange,
}: ColorPickerProps) {
  return (
    <Control title={title} attention={attention} description={description}>
      <input
        type="color"
        name="color"
        style={{ float: "right" }}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
      />
    </Control>
  );
}
