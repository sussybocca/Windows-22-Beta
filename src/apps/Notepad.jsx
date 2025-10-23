import React, { useState } from "react";
import Window from "../components/Window";

export default function Notepad() {
  const [text, setText] = useState("");

  return (
    <Window title="Notepad">
      <textarea
        className="w-full h-full p-2 border border-gray-300 rounded resize-none"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </Window>
  );
}
