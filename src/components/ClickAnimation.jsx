import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function ClickAnimation() {
  const [clicks, setClicks] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      const id = Date.now();
      setClicks((prev) => [...prev, { id, x: e.clientX, y: e.clientY }]);
      // Remove the click animation after 500ms
      setTimeout(
        () => setClicks((prev) => prev.filter((c) => c.id !== id)),
        500
      );
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {clicks.map(({ id, x, y }) => (
        <motion.div
          key={id}
          className="absolute w-8 h-8 rounded-full bg-blue-500 opacity-50 pointer-events-none"
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ left: x - 16, top: y - 16 }}
        />
      ))}
    </div>
  );
}
