import type { ComponentType, ReactNode } from "react";
import React, { useState } from "react";

export interface Tab {
  name: string;
  body: ComponentType;
}

export default function Settings({
  header,
  tabs,
  defaultTabID = 0,
  onTabChange,
}: {
  defaultTabID?: number;
  /**
   * Allow saving the last tab ID
   */
  onTabChange?: (tabID: number) => void;
  header?: ReactNode;
  tabs: Tab[];
}) {
  const [tabID, setTabID] = useState<number>(defaultTabID);
  const tab = tabs[tabID];
  if (!tab) throw new TypeError("Bad tab");
  const { body: Body } = tab;

  return (
    <>
      <div className="settingsHeader">
        {header}
        <div id="settingsTabLayout">
          {tabs.map((tab, i) => (
            <div
              className={`settingTab ${tabID === i ? "tabANew" : ""}`}
              onMouseEnter={() => playTick()}
              onClick={() => {
                playSelect(0.1);
                setTabID(i);
                if (onTabChange) onTabChange(i);
              }}
              key={i}
            >
              {tab.name}
            </div>
          ))}
        </div>
      </div>
      <div id="settHolder">
        <Body />
      </div>
    </>
  );
}
