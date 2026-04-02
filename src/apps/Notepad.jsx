import React, { useState } from "react";

export default function Notepad() {
  const [text, setText] = useState("");

  return (
    <textarea
      className="w-full h-full p-2 border border-gray-300 rounded resize-none"
      value={text}
      onChange={(e) => setText(e.target.value)}
      style={{ width: "100%", height: "100%", minHeight: "200px" }}
    />
  );
}
