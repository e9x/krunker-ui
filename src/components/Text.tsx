import type { ChangeEventHandler } from "react";
import React from "react";
import { Control } from "./Control.js";
import type { BaseControlProps } from "./Control.js";

export interface TextProps extends BaseControlProps {
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  /**
   * False by default.
   */
  spellCheck?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export function Text({
  title,
  attention,
  description,
  placeholder,
  value,
  defaultValue,
  spellCheck,
  onChange,
}: TextProps) {
  return (
    <Control title={title} attention={attention} description={description}>
      <input
        type="text"
        name="text"
        className="inputGrey2"
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        spellCheck={spellCheck === true}
      />
    </Control>
  );
}
