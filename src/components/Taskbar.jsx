import React, { useContext } from "react";
import { WindowContext } from "../contexts/WindowContext";

export default function Taskbar() {
  const { windows, focusWindow, openWindow } = useContext(WindowContext);

  return (
    <div className="taskbar fixed bottom-0 left-0 right-0 h-14 bg-black/50 backdrop-blur-md flex items-center gap-2 px-4 z-30">
      {windows.map((win) => (
        <button
          key={win.name}
          className={`px-3 py-1 rounded ${
            win.focused ? "bg-blue-500 text-white" : "bg-gray-700 text-white"
          }`}
          onClick={() => {
            if (win.component) focusWindow(win.name);
            else openWindow(win.name);
          }}
        >
          {win.name}
        </button>
      ))}
    </div>
  );
}
