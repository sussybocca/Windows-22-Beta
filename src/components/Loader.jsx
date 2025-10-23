import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black">
      <motion.div
        className="w-20 h-20 border-4 border-blue-500 border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
    </div>
  );
}
