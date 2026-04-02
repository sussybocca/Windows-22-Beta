import React, { createContext, useState } from "react";
import Calculator from "../apps/Calculator";
import Notepad from "../apps/Notepad";

export const WindowContext = createContext();

export const WindowProvider = ({ children }) => {
  const [windows, setWindows] = useState([]);

  // Store component types, not instances
  const appComponents = {
    Calculator: Calculator,  // Store the component, not <Calculator />
    Notepad: Notepad,        // Store the component, not <Notepad />
  };

  const openWindow = (name) => {
    setWindows((prev) => {
      const exists = prev.find((w) => w.name === name);

      if (exists) {
        return prev.map((w) => ({
          ...w,
          focused: w.name === name,
        }));
      }

      return [
        ...prev.map((w) => ({ ...w, focused: false })),
        { 
          name, 
          component: appComponents[name],  // Store component type
          focused: true 
        },
      ];
    });
  };

  const closeWindow = (name) => {
    setWindows((prev) => prev.filter((w) => w.name !== name));
  };

  const focusWindow = (name) => {
    setWindows((prev) =>
      prev.map((w) => ({ ...w, focused: w.name === name }))
    );
  };

  return (
    <WindowContext.Provider
      value={{ windows, openWindow, closeWindow, focusWindow }}
    >
      {children}
    </WindowContext.Provider>
  );
};
