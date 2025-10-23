import React, { createContext, useState } from "react";
import Calculator from "../apps/Calculator";
import Notepad from "../apps/Notepad";

export const WindowContext = createContext();

export const WindowProvider = ({ children }) => {
  const [windows, setWindows] = useState([]);

  const appComponents = {
    Calculator: <Calculator />,
    Notepad: <Notepad />,
  };

  const openWindow = (name) => {
    setWindows((prev) => {
      const exists = prev.find((w) => w.name === name);
      if (exists) {
        // focus the window
        return prev.map((w) => ({ ...w, focused: w.name === name }));
      }
      return [...prev, { name, component: appComponents[name], focused: true }];
    });
  };

  const closeWindow = (name) => {
    setWindows((prev) => prev.filter((w) => w.name !== name));
  };

  const focusWindow = (name) => {
    setWindows((prev) => prev.map((w) => ({ ...w, focused: w.name === name })));
  };

  return (
    <WindowContext.Provider value={{ windows, openWindow, closeWindow, focusWindow }}>
      {children}
    </WindowContext.Provider>
  );
};
