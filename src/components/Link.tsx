import type { MouseEventHandler } from "react";
import React from "react";
import type { BaseControlProps } from "./Control.js";
import { ControlContainer, ControlTitle } from "./Control.js";

export interface LinkProps extends BaseControlProps {
  href: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export function Link({
  title,
  attention,
  description,
  href,
  onClick,
}: LinkProps) {
  return (
    <ControlContainer description={description}>
      <a href={href} onClick={onClick}>
        <ControlTitle attention={attention}>{title}</ControlTitle>
      </a>
    </ControlContainer>
  );
}
