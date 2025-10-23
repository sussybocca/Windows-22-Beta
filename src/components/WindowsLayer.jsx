import React, { useContext } from "react";
import { WindowContext } from "../contexts/WindowContext";

export default function WindowsLayer() {
  const { windows, closeWindow, focusWindow } = useContext(WindowContext);

  return (
    <div className="absolute inset-0 z-20 pointer-events-none">
      {windows.map((win, index) => (
        <div
          key={win.name}
          className="absolute w-[400px] h-[300px] bg-white/80 backdrop-blur-md rounded-xl shadow-xl border border-gray-300 pointer-events-auto"
          style={{
            top: 100 + index * 40, // dynamic top
            left: 100 + index * 40, // dynamic left
            zIndex: win.focused ? 50 : 20,
          }}
          onMouseDown={() => focusWindow(win.name)}
        >
          {/* Title bar */}
          <div className="flex justify-between items-center bg-gray-200 px-3 py-1 rounded-t-xl cursor-pointer">
            <span className="font-semibold text-gray-700">{win.name}</span>
            <button
              onClick={() => closeWindow(win.name)}
              className="text-red-500 hover:text-red-700"
            >
              ✕
            </button>
          </div>

          {/* Window content */}
          <div className="p-3 overflow-auto">{win.component}</div>
        </div>
      ))}
    </div>
  );
}
