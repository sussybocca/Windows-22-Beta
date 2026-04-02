import React, { useState } from "react";

export default function Calculator() {
  const [result, setResult] = useState("0");

  return (
    <div className="p-2">
      <div className="text-right text-2xl mb-2">{result}</div>
      <div className="grid grid-cols-4 gap-1">
        {[1,2,3,4,5,6,7,8,9,0].map(num => (
          <button key={num} className="p-2 bg-gray-200 rounded" onClick={() => setResult(prev => prev === "0" ? String(num) : prev + num)}>
            {num}
          </button>
        ))}
      </div>
    </div>
  );
}
