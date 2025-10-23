import React, { useState } from "react";
import Window from "../components/Window";

export default function Calculator() {
  const [display, setDisplay] = useState("");

  const handleClick = (val) => {
    if (val === "=") {
      try {
        setDisplay(eval(display).toString());
      } catch {
        setDisplay("Error");
      }
    } else if (val === "C") {
      setDisplay("");
    } else {
      setDisplay(display + val);
    }
  };

  const buttons = ["7","8","9","/","4","5","6","*","1","2","3","-","0",".","=","+","C"];

  return (
    <Window title="Calculator">
      <div className="flex flex-col gap-2">
        <input className="w-full p-2 border rounded text-right" value={display} readOnly />
        <div className="grid grid-cols-4 gap-2">
          {buttons.map((b) => (
            <button
              key={b}
              className="p-2 bg-gray-200 rounded hover:bg-blue-500 hover:text-white"
              onClick={() => handleClick(b)}
            >
              {b}
            </button>
          ))}
        </div>
      </div>
    </Window>
  );
}
