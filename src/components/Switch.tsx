import type { ChangeEventHandler } from "react";
import React from "react";
import { Control } from "./Control.js";
import type { BaseControlProps } from "./Control.js";

export interface SwitchProps extends BaseControlProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export function Switch({
  title,
  attention,
  description,
  checked,
  defaultChecked,
  onChange,
}: SwitchProps) {
  return (
    <Control title={title} attention={attention} description={description}>
      <label className="switch" style={{ marginLeft: 10 }}>
        <input
          type="checkbox"
          onChange={onChange}
          checked={checked}
          defaultChecked={defaultChecked}
        />
        <span className="slider"></span>
      </label>
    </Control>
  );
}
