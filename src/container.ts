import type { ReactNode } from "react";
import { createRoot } from "react-dom/client";

export type RenderOnDemand = () => ReactNode;

/**
 *
 * @description The raw HTML instantitates a custom element that executes code to create a react-dom root in it's parent. When the innerHTML of the parent is set, the react-dom root is unmounted. This allows for the mount and unmount lifecycles to be triggered.
 * @returns Raw HTML to create a hook element.
 */
export function createRenderContainer(d: RenderOnDemand) {
  const id = "a-" + Math.random().toString().slice(2);

  class HTMLProxyElement extends HTMLElement {
    connectedCallback() {
      const settHolder = this.parentElement! as HTMLDivElement;

      this.remove();

      const root = createRoot(settHolder);

      root.render(d());

      Reflect.defineProperty(settHolder, "innerHTML", {
        configurable: true,
        set: (html) => {
          // remove descriptor
          Reflect.deleteProperty(settHolder, "innerHTML");

          root.unmount();

          settHolder.innerHTML = html;
        },
      });
    }
  }

  customElements.define(id, HTMLProxyElement);

  return `<${id} />`;
}
