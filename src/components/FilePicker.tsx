import type { ChangeEventHandler } from "react";
import React, { forwardRef, useImperativeHandle, useRef } from "react";
import Control from "./Control.js";
import type { BaseControlProps } from "./Control.js";

export interface FilePickerProps extends BaseControlProps {
  accept?: string;
  multiple?: boolean;
  value?: string;
  defaultValue?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

/**
 * Control to get the handle of a file.
 */
const FilePicker = forwardRef<HTMLInputElement, FilePickerProps>(
  function FilePicker(
    { title, attention, description, value, defaultValue, multiple, onChange },
    ref
  ) {
    const picker = useRef<HTMLInputElement | null>(null);

    useImperativeHandle(ref, () => picker.current!, [picker]);

    return (
      <Control title={title} attention={attention} description={description}>
        <div
          className="settingsBtn"
          style={{ width: 100 }}
          onClick={() => picker.current!.click()}
        >
          Browse
        </div>
        <input
          ref={picker}
          hidden
          type="file"
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          multiple={multiple}
        />
      </Control>
    );
  }
);

export default FilePicker;
