import type { ChangeEventHandler, ReactNode } from "react";
import React, { Fragment, useEffect, useState } from "react";
import { getKeyCode, getKeyName } from "../keys.js";
import Control from "./Control.js";
import type { BaseControlProps } from "./Control.js";

export interface BindProps {
  bind: number;
  reset: () => void;
  unbind: () => void;
  setBind: (bind: number) => void;
}

export interface BindModeProps {
  value?: string;
  defaultValue?: string;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
}

export enum BindMode {
  toggle = "toggle",
  hold = "hold",
}

export function BindModePicker({
  value,
  defaultValue,
  onChange,
}: BindModeProps) {
  return (
    <div style={{ float: "right" }}>
      <select
        className="inputGrey2"
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
      >
        <option value={BindMode.toggle}>Press (Toggle)</option>,
        <option value={BindMode.hold}>Continuous (Hold)</option>
      </select>
    </div>
  );
}

export function Bind({ bind, reset, unbind, setBind }: BindProps) {
  const [changing, setChanging] = useState(false);

  useEffect(() => {
    if (!changing) return;

    const listener = (event: KeyboardEvent | MouseEvent) => {
      setChanging(false);
      setBind(getKeyCode(event));
      event.preventDefault();
    };

    window.addEventListener("mousedown", listener, { once: true });
    window.addEventListener("keydown", listener, { once: true });

    return () => {
      window.removeEventListener("mousedown", listener);
      window.removeEventListener("keydown", listener);
    };
  }, [changing]);

  return (
    <div style={{ float: "right" }}>
      <span className="reset" title="Reset Bind" onClick={() => reset()}>
        <i
          className="material-icons"
          style={{ fontSize: "40px", color: "var(--yellow)" }}
        >
          refresh
        </i>
      </span>
      <span className="unbind" title="Unbind" onClick={() => unbind()}>
        <i
          className="material-icons"
          style={{ fontSize: "40px", color: "var(--red)" }}
        >
          delete_forever
        </i>
      </span>
      <span
        className="settText floatRNoC keyIcon"
        onMouseOver={() => playTick()}
        onClick={() => setChanging(true)}
      >
        {changing ? "Press any Key" : getKeyName(bind)}
      </span>
    </div>
  );
}

export interface BindHolderProps extends BaseControlProps {
  children: ReactNode;
  modePicker?: ReactNode;
}

export default function BindHolder({
  title,
  attention,
  description,
  children,
  modePicker,
}: BindHolderProps) {
  const betweens: ReactNode[] = [];

  if (Array.isArray(children))
    for (let i = 0; i < children.length; i++) {
      betweens.push(<Fragment key={i}>{children[i]}</Fragment>);
      if (i + 1 !== children.length)
        betweens.push(<div className="bindSep" key={i + "_sep"}></div>);
    }
  else betweens.push(children);

  return (
    <Control title={title} attention={attention} description={description}>
      {modePicker}
      {betweens}
    </Control>
  );
}
