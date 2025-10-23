import React, { useState, useEffect } from "react";
import { WindowProvider } from "./contexts/WindowContext";
import Desktop from "./components/Desktop";
import WindowsLayer from "./components/WindowsLayer";
import Taskbar from "./components/Taskbar";
import LoginScreen from "./apps/LoginScreen";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-black text-white">
        Loading...
      </div>
    );
  }

  if (!loggedIn) return <LoginScreen setLoggedIn={setLoggedIn} />;

  return (
    <WindowProvider>
      <div className="w-screen h-screen relative overflow-hidden">
        <Desktop />
        <WindowsLayer />
        <Taskbar />
      </div>
    </WindowProvider>
  );
}
