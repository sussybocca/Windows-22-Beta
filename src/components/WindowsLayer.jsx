import React, { useContext } from "react";
import { WindowContext } from "../contexts/WindowContext";
import Window from "./Window";

export default function WindowsLayer() {
  const { windows } = useContext(WindowContext);

  return (
    <>
      {windows.map((win) => (
        <Window key={win.name} title={win.name} focused={win.focused}>
          {win.component}
        </Window>
      ))}
    </>
  );
}
