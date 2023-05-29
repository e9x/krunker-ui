import type { MouseEventHandler } from "react";
import React, { useRef } from "react";
import Control from "./Control.js";
import type { BaseControlProps } from "./Control.js";

export interface PickerProps extends BaseControlProps {
  accept?: string;
  multiple?: boolean;
  value?: string;
  onBrowse: MouseEventHandler<HTMLInputElement>;
}

export default function Picker({
  title,
  attention,
  description,
  value,
  onBrowse,
}: PickerProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <Control title={title} attention={attention} description={description}>
      <input
        ref={inputRef}
        type="text"
        name="text"
        className="inputGrey2"
        value={value}
        spellCheck={false}
        readOnly
      />
      <div className="settingsBtn" style={{ width: 100 }} onClick={onBrowse}>
        Browse
      </div>
    </Control>
  );
}
