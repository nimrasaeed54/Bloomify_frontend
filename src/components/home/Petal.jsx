// Petal component (flower-shaped particle)
const Petal = ({ color }) => {
  const left = Math.random() * 100 + "%";
  const delay = Math.random() * 5;
  const size = Math.random() * 20 + 12; // Bigger than dots

  return (
    <motion.div
      className="absolute opacity-70"
      style={{
        width: size,
        height: size * 1.8, // make it taller for petal shape
        backgroundColor: color,
        left,
        top: "-50px",
        borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%", // petal-like
      }}
      animate={{
        y: "110vh",
        x: [0, Math.random() * 50 - 25], // sway left/right
        rotate: [0, 45, -45, 0], // rotation effect
      }}
      transition={{
        duration: 8 + Math.random() * 4,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};
