import React, { useContext } from "react";
import { WindowContext } from "../contexts/WindowContext";

export default function WindowsLayer() {
  const { windows, closeWindow } = useContext(WindowContext);

  return (
    <div className="absolute inset-0 z-20 pointer-events-none">
      {windows.map((win) => (
        <div
          key={win.name}
          className="absolute top-24 left-24 w-96 h-64 bg-gray-800 text-white rounded shadow-lg border border-gray-600 p-3 pointer-events-auto"
        >
          <div className="flex justify-between items-center bg-gray-700 p-2 rounded-t">
            <span>{win.name}</span>
            <button
              onClick={() => closeWindow(win.name)}
              className="bg-red-500 text-white px-2 rounded"
            >
              ✕
            </button>
          </div>
          <div className="p-3">
            <p>This is the {win.name} app.</p>
          </div>
        </div>
      ))}
    </div>
  );
}
