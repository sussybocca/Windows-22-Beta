import React, { useContext, useState } from "react";
import { WindowContext } from "../contexts/WindowContext";

const apps = [
  { name: "Calculator", icon: "🧮" },
  { name: "Notepad", icon: "📝" },
];

export default function Desktop({ wallpaper = "/wallpapers/win11.jpg" }) {
  const { openWindow } = useContext(WindowContext);
  const [selected, setSelected] = useState(null);

  // Deselect when clicking empty desktop area
  const handleDesktopClick = (e) => {
    if (e.target.classList.contains("desktop")) {
      setSelected(null);
    }
  };

  return (
    <div
      className="desktop w-full h-full bg-cover relative"
      style={{ backgroundImage: `url(${wallpaper})` }}
      onClick={handleDesktopClick}
    >
      <div className="grid grid-cols-6 gap-6 p-6">
        {apps.map((app) => {
          const isSelected = selected === app.name;
          return (
            <div
              key={app.name}
              className={`desktop-icon flex flex-col items-center cursor-pointer select-none p-2 rounded transition ${
                isSelected
                  ? "bg-blue-500/50 backdrop-blur-sm scale-105"
                  : "hover:bg-white/10"
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setSelected(app.name);
              }}
              onDoubleClick={(e) => {
                e.stopPropagation();
                openWindow(app.name); // Opens app on double click
              }}
            >
              <div className="text-5xl">{app.icon}</div>
              <div className="mt-1 text-sm text-center text-white drop-shadow-md">
                {app.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
