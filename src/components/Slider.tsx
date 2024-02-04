import type { ChangeEventHandler } from "react";
import React, { useRef } from "react";
import { Control } from "./Control.js";
import type { BaseControlProps } from "./Control.js";

export interface SliderProps extends BaseControlProps {
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export function Slider({
  title,
  attention,
  description,
  defaultValue,
  min,
  max,
  step,
  onChange,
}: SliderProps) {
  const numberInput = useRef<HTMLInputElement | null>(null);
  const rangeInput = useRef<HTMLInputElement | null>(null);

  return (
    <Control title={title} attention={attention} description={description}>
      <input
        type="number"
        className="sliderVal"
        min={min}
        max={max}
        step={step}
        defaultValue={
          typeof defaultValue === "number"
            ? defaultValue.toString()
            : defaultValue
        }
        onChange={(event) => {
          if (rangeInput.current)
            rangeInput.current.valueAsNumber =
              event.currentTarget.valueAsNumber;
          if (onChange) onChange.call(undefined as never, event);
        }}
        ref={numberInput}
        style={{ marginRight: 0, borderWidth: 0 }}
      />
      <div className="slidecontainer" style={{ marginTop: -8 }}>
        <input
          className="sliderM"
          type="range"
          defaultValue={
            typeof defaultValue === "number"
              ? defaultValue.toString()
              : defaultValue
          }
          min={min}
          max={max}
          step={step}
          onChange={(event) => {
            if (numberInput.current)
              numberInput.current.valueAsNumber =
                event.currentTarget.valueAsNumber;
            if (onChange) onChange.call(undefined as never, event);
          }}
          ref={rangeInput}
        />
      </div>
    </Control>
  );
}
