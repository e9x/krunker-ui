declare interface SettingsTab {
  name: string;
  categories: [];
}

declare interface GameWindow {
  // required
  header: string;
  label: string;
  // optional
  tabIndex?: number;
  extraCls?: string;
  width?: string | number;
  height?: string;
  maxHeight?: string;
  popup?: boolean;
  sticky?: boolean;
  dark?: boolean;
  radius?: number;
  hideScroll?: boolean;
  forceScroll?: boolean;
  closed?: boolean;
  menuOpen?: boolean;
}

declare type GameWindowRender = GameWindow &
  ({ html: string } | { gen(): string });

declare interface Settings extends GameWindow {
  genList(): string;
  getSettings(): string;
  /**
   * Record<settingType: string, GameWindowTab[]>
   */
  tabs: Record<string, SettingsTab[]>;
  settingType: string;
  tabIndex: number;
}

// eslint-disable-next-line no-var
declare var windows: GameWindow[];

/**
 *
 * @param id ID of the window starting from 1.
 */
declare function showWindow(id: number): void;

declare const SOUND: {
  play(id: string, vol: number): void;
};

declare function playTick(): void;

declare function playSelect(v?: number): void;
