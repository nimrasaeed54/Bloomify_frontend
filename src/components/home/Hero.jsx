// import FloralButton from "../ui/FloralButton";
// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import hero1 from "../../assets/hero1.png";
// import hero4 from "../../assets/hero4.png";

// const flowers = [
//   {
//     title: "Roses",
//     image: hero1,
//     color: "#ce0044",
//     text: "Timeless symbols of love and beauty",
//   },
//   {
//     title: "Carnation",
//     image: "/images/mix.png",
//     color: "#a80aa8",
//     text: "A timeless symbol of admiration and gratitude.",
//   },
//   {
//     title: "Sunflower",
//     image: hero4,
//     color: "#F4B400",
//     text: "Radiating joy, warmth, and positivity",
//   },
//   {
//     title: "Tulips", 
//     image: "/images/tulip_bouquet.png",
//     color: "#EFBBCF",
//     text: "Elegant blooms that whisper joy and grace",
//   },
// ];

// function Hero() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(
//       () => setCurrent((prev) => (prev + 1) % flowers.length),
//       5000
//     );
//     return () => clearInterval(interval);
//   }, []);

//   const currentFlower = flowers[current];
//   const adjustedTitle =
//     currentFlower.title === "Roses" || currentFlower.title === "Tulips"
//       ? `${currentFlower.title}   ` // Add spaces to visually balance width
//       : currentFlower.title;

//   return (
//     <section
//       className="relative h-[95vh] w-full flex flex-col items-center justify-center overflow-hidden transition-colors duration-700"
//       style={{
//       backgroundColor: `${currentFlower.color}33`, // the 33 gives ~20% opacity

//       }}
//     >
//       <AnimatePresence mode="wait">
//         <motion.h1
//           key={adjustedTitle}
//           className="absolute top-[35%] -translate-y-1/2 text-[7rem] md:text-[12rem] font-extrabold select-none leading-none whitespace-nowrap tracking-wide"
//           style={{ color: currentFlower.color }}
//           initial={{ opacity: 0.9, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0.6, y: -30 }}
//           transition={{ duration: 0.8 }}
//         >
//           {adjustedTitle.toUpperCase()}
//         </motion.h1>
//       </AnimatePresence>

//       <AnimatePresence mode="wait">
//         <motion.img
//           key={currentFlower.image}
//           src={currentFlower.image}
//           alt={currentFlower.title}
//           className="relative z-10 max-h-[45vh] md:max-h-[60vh] object-contain"
//           initial={{ opacity: 0, scale: 0.85 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 0.85 }}
//           transition={{ duration: 0.8 }}
//         />
//       </AnimatePresence>

//       <div className="relative z-20 text-center mt-6">
//         <h2
//           className="text-3xl md:text-5xl font-bold text-[#333] mb-3"
//           style={{
//             fontSize:
//               currentFlower.title === "Roses" || currentFlower.title === "Tulips"
//                 ? "3.5rem"
//                 : "3rem",
//           }}
//         >
//           {currentFlower.title}
//         </h2>
//         <p className="text-lg md:text-xl text-[#555] max-w-2xl mx-auto mb-2">
//           {currentFlower.text}
//         </p>
//         {/* <FloralButton>Shop Now</FloralButton> */}
//       </div>
//     </section>
//   );
// }

// export default Hero;
import FloralButton from "../ui/FloralButton";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import hero1 from "../../assets/hero1.png";
import hero4 from "../../assets/hero4.png";

const flowers = [
  {
    title: "Roses",
    image: "/images/roses.png",
    color: "#ce0044",
    text: "Timeless symbols of love and beauty",
  },
  {
    title: "Carnation",
    image: "/images/mix.png",
    color: "#a80aa8",
    text: "A timeless symbol of admiration and gratitude.",
  },
  {
    title: "Sunflower",
    image: hero4,
    color: "#F4B400",
    text: "Radiating joy, warmth, and positivity",
  },
  {
    title: "Tulips",
    image: "/images/tulip_bouquet.png",
    color: "#EFBBCF",
    text: "Elegant blooms that whisper joy and grace",
  },
];

function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % flowers.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  const currentFlower = flowers[current];

  return (
    <section
      className="relative w-full flex flex-col items-center justify-center overflow-hidden transition-colors duration-700 min-h-[90vh] md:min-h-[95vh]"
      style={{ backgroundColor: `${currentFlower.color}33` }}
    >
      <AnimatePresence mode="wait">
        <motion.h1
          key={currentFlower.title}
          className="absolute top-[42%] sm:top-[65%] md:top-[45%] text-[3rem] sm:text-[5rem] md:text-[6rem] lg:text-[12rem] font-extrabold select-none leading-none whitespace-nowrap tracking-wide text-center w-full px-2"
          style={{ color: currentFlower.color ,
              // fontSize: `clamp(3rem, 8vw, 16rem)`,
          }}
          initial={{ opacity: 0.9, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0.6, y: -30 }}
          transition={{ duration: 0.8 }}
        >
          {currentFlower.title.toUpperCase()}
        </motion.h1>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.img
          key={currentFlower.image}
          src={currentFlower.image}
          alt={currentFlower.title}
          className="relative z-10 max-h-[35vh] sm:max-h-[35vh] md:max-h-[45vh] lg:max-h-[65vh] object-contain mt- sm:mt- md:mt-"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.85 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>

      <div className="relative z-20 text-center mt-6 px-4 sm:px-6 md:px-0">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#333] mb-3">
          {currentFlower.title}
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#555] max-w-md sm:max-w-xl md:max-w-2xl mx-auto mb-4">
          {currentFlower.text}
        </p>
        {/* <FloralButton>Shop Now</FloralButton> */}
      </div>
    </section>
  );
}

export default Hero;
