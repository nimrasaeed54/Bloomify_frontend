import { motion } from "framer-motion";

function FloralButton({ children, onClick }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="relative px-8 py-3 font-semibold text-white rounded-2xl 
                 bg-[#2F5233] 
                 shadow-lg shadow-[#A3C9A850] overflow-hidden"
    >
      {/* Decorative glow effect */}
      <span className="absolute inset-0  rounded-2xl"></span>
      
      {/* Text */}
      <span className="relative z-10 flex items-center gap-2">
         {children}
      </span>
    </motion.button>
  );
}

export default FloralButton;
