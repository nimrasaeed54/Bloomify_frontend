// src/components/FullPageLoader.jsx
import { motion } from "framer-motion";

export default function FullPageLoader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#FAF9F6] z-50">
      {/* Cute spinning flower or ring */}
      <motion.div
        className="w-16 h-16 border-4 border-[#EFBBCF] border-t-[#2F5233] rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
    </div>
  );
}
