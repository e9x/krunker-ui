import type { ChangeEventHandler, MouseEventHandler } from "react";
import React, { forwardRef, useRef } from "react";
import Control from "./Control.js";
import type { BaseControlProps } from "./Control.js";

export interface PickerProps extends BaseControlProps {
  /**
   * Value of the path input. Use defaultValue if the path input should be editable
   */
  value?: string;
  /**
   * Default value of the path input
   */
  defaultValue?: string;
  /**
   * If the path input should be editable or read only.
   */
  readOnly?: boolean;
  /**
   * Called when the path input is updated
   */
  onChange?: ChangeEventHandler<HTMLInputElement>;
  /**
   * Called when the browse button is pressed
   */
  onBrowse?: MouseEventHandler<HTMLInputElement>;
}

/**
 * Generic path picker
 * Compatible with native clients and browsers
 */
const Picker = forwardRef<HTMLInputElement, PickerProps>(function Picker(
  {
    title,
    attention,
    description,
    value,
    defaultValue,
    readOnly,
    onChange,
    onBrowse,
  },
  ref
) {
  return (
    <Control title={title} attention={attention} description={description}>
      <div className="settingsBtn" style={{ width: 100 }} onClick={onBrowse}>
        Browse
      </div>
      <input
        ref={ref}
        type="text"
        name="text"
        className="inputGrey2"
        value={value}
        defaultValue={defaultValue}
        spellCheck={false}
        readOnly={readOnly}
        onChange={onChange}
      />
    </Control>
  );
});

export default Picker;
