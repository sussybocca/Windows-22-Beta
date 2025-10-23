import React, { useState, useContext } from "react";
import { WindowContext } from "../contexts/WindowContext";

const apps = [
  { name: "Calculator", icon: "🧮" },
  { name: "Notepad", icon: "📝" },
];

export default function StartMenu() {
  const [open, setOpen] = useState(false);
  const { openWindow } = useContext(WindowContext);

  return (
    <>
      <button
        className="fixed bottom-16 left-4 px-4 py-2 bg-blue-500 text-white rounded z-30"
        onClick={() => setOpen(!open)}
      >
        Start
      </button>

      {open && (
        <div className="start-menu fixed bottom-20 left-4 w-48 bg-white/50 backdrop-blur-md p-2 rounded z-30 flex flex-col gap-2">
          {apps.map((app) => (
            <button
              key={app.name}
              className="flex items-center gap-2 p-2 rounded hover:bg-blue-500 hover:text-white"
              onClick={() => {
                openWindow(app.name);
                setOpen(false); // close start menu
              }}
            >
              <span className="text-xl">{app.icon}</span>
              <span>{app.name}</span>
            </button>
          ))}
        </div>
      )}
    </>
  );
}
