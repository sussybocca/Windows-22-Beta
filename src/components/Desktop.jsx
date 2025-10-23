import React, { useContext, useState } from "react";
import { WindowContext } from "../contexts/WindowContext";

const apps = [
  { name: "Calculator", icon: "🧮" },
  { name: "Notepad", icon: "📝" },
];

export default function Desktop({ wallpaper = "/wallpapers/win11.jpg" }) {
  const { openWindow } = useContext(WindowContext);
  const [selected, setSelected] = useState(null);

  return (
    <div
      className="desktop w-full h-full bg-cover relative"
      style={{ backgroundImage: `url(${wallpaper})` }}
      onClick={() => setSelected(null)}
    >
      <div className="grid grid-cols-6 gap-6 p-6">
        {apps.map((app) => (
          <div
            key={app.name}
            className={`desktop-icon flex flex-col items-center cursor-pointer select-none p-2 rounded ${
              selected === app.name ? "bg-blue-500/50" : ""
            }`}
            onClick={(e) => {
              e.stopPropagation();
              setSelected(app.name);
              openWindow(app.name); // single-click reliably opens app
            }}
          >
            <div style={{ fontSize: 48 }}>{app.icon}</div>
            <div className="mt-1 text-sm text-center text-white">{app.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
