# Krunker UI

React Components for Krunker

## Usage

1. Add the global types for Krunker. This makes your code aware of `window.windows`, `playSound()`, and other features.

   env.d.ts:

   ```ts
   /// <reference types="krunker-ui/window" />
   ```

2. Import the components

   ```tsx
   import Switch from "krunker-ui/components/Switch";

   function MyInterface() {
     const [unlimitedFPS, setUnlimitedFPS] = useConfig("unlimitedFPS");

     return (
       <Switch
         title="Unlimited FPS"
         description="Disables the FPS limit"
         defaultChecked={unlimitedFPS}
         onChange={(event) => {
           setUnlimitedFPS(event.currentTarget.checked);
           alert("Client will now restart");
           ipcRenderer.send("restart");
         }}
       />
     );
   }
   ```

3. Render your interface in a window:

   (This is subject to change)

   ```ts
   const html = createRenderContainer(() => <MyInterface />);

   const window: GameWindowRender = {
     header: "",
     label: "",
     width: 1100,
     popup: true,
     sticky: true,
     forceScroll: true,
     gen: () => html,
   };

   const id = windows.length;

   windows.push(window);

   // ...

   // Show the window
   showWindow(id);
   ```
