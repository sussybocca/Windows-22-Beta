import React, { useState, useEffect } from "react";
import { WindowProvider } from "./contexts/WindowContext";
import Desktop from "./components/Desktop";
import WindowsLayer from "./components/WindowsLayer";
import Taskbar from "./components/Taskbar";
import Cursor from "./components/Cursor";
import ClickAnimation from "./components/ClickAnimation";
import LoginScreen from "./apps/LoginScreen";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(() => {
    // 🔹 Keep login state persistent across reloads
    return localStorage.getItem("loggedIn") === "true";
  });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // ✅ Keep login saved
  useEffect(() => {
    localStorage.setItem("loggedIn", loggedIn);
  }, [loggedIn]);

  if (loading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-black text-white text-xl">
        Booting Windows 22...
      </div>
    );
  }

  // 🪟 Show login screen first
  if (!loggedIn) {
    return <LoginScreen setLoggedIn={setLoggedIn} />;
  }

  // 🧠 OS environment after login
  return (
    <WindowProvider>
      <div className="w-screen h-screen relative overflow-hidden">
        <Desktop />
        <WindowsLayer />
        <Taskbar />
        <ClickAnimation />
        <Cursor />
      </div>
    </WindowProvider>
  );
}
