import type { MouseEventHandler } from "react";
import React from "react";
import { Control } from "./Control.js";
import type { BaseControlProps } from "./Control.js";

export interface ButtonProps extends BaseControlProps {
  text: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

export function Button({
  title,
  attention,
  description,
  text,
  onClick,
}: ButtonProps) {
  return (
    <Control title={title} attention={attention} description={description}>
      <div className="settingsBtn" onClick={onClick}>
        {text}
      </div>
    </Control>
  );
}
