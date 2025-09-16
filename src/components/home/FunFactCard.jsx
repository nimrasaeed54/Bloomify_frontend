
// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function FunFactsSection() {
//   const [funFacts, setFunFacts] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);

//   useEffect(() => {
//     fetch("http://localhost:5000/funfacts")
//       .then((res) => res.json())
//       .then((data) => setFunFacts(data))
//       .catch(() => {
//         setFunFacts([
//           {
//             _id: "1",
//             flower: "Rose",
//             fact: "Roses are related to apples, raspberries, cherries, peaches, plums, nectarines, pears and almonds.",
//             meaning: "Love",
//             image:
//               "https://images.unsplash.com/photo-1597826368522-9f4cb5a6ba48?auto=format&fit=crop&w=800&q=80",
//           },
//           {
//             _id: "2",
//             flower: "Sunflower",
//             fact: "Sunflowers display a behavior called heliotropism, where the flower heads follow the sun across the sky.",
//             meaning: "Adoration",
//             image:
//               "https://images.unsplash.com/photo-1597848212624-e9d2c1b6a5f6?auto=format&fit=crop&w=800&q=80",
//           },
//           {
//             _id: "3",
//             flower: "Lavender",
//             fact: "Lavender has been used for over 2,500 years for medicinal and culinary purposes.",
//             meaning: "Calmness",
//             image:
//               "https://images.unsplash.com/photo-1593186505405-1812c7bc9292?auto=format&fit=crop&w=800&q=80",
//           },
//         ]);
//       });
//   }, []);

//   useEffect(() => {
//     if (isHovered || funFacts.length === 0) return;
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % funFacts.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [funFacts, isHovered]);

//   if (funFacts.length === 0)
//     return (
//       <div className="flex justify-center items-center h-96">
//         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#EFBBCF]" />
//       </div>
//     );

//   const currentFact = funFacts[currentIndex];

//   return (
//     <section className="relative w-full py-20 md:py-28 flex flex-col items-center justify-center overflow-hidden px-4 md:px-8 bg-[#FAF9F6]">
//       {/* ✨ Animated Background Blobs */}
//       <motion.div
//         className="absolute top-0 left-0 w-96 h-96 bg-[#F7D6E0] rounded-full mix-blend-multiply blur-3xl opacity-30"
//         animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
//         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//       />
//       <motion.div
//         className="absolute bottom-0 right-0 w-80 h-80 bg-[#C7B8EA] rounded-full mix-blend-multiply blur-3xl opacity-25"
//         animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
//         transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//       />

//       {/* Floating Decorative Icons */}
//       <motion.div
//         className="absolute top-10 right-16 text-[#A3C9A8] text-5xl opacity-50"
//         animate={{ y: [0, -15, 0] }}
//         transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//       >
//         🌸
//       </motion.div>
//       <motion.div
//         className="absolute bottom-12 left-12 text-[#EFBBCF] text-4xl opacity-50"
//         animate={{ y: [0, 15, 0] }}
//         transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//       >
//         🌿
//       </motion.div>

//       {/* Title */}
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: false, amount: 0.3 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="text-center mb-12 z-10"
//       >
//         <p className="text-sm text-[#2F5233] uppercase tracking-widest font-semibold">
//           Did You Know?
//         </p>
//         <h2 className="text-3xl md:text-5xl font-extrabold text-[#333]">
//           Floral <span className="text-[#EFBBCF]">Fun Facts</span>
//         </h2>
//         <motion.div
//           className="w-24 h-1 bg-[#A3C9A8] mx-auto mt-4"
//           initial={{ scaleX: 0 }}
//           whileInView={{ scaleX: 1 }}
//           transition={{ duration: 0.6 }}
//         />
//       </motion.div>

//       {/* Content */}
//       <div
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         className="w-full max-w-6xl flex justify-center z-10"
//       >
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentFact._id}
//             initial={{ opacity: 0, y: 40, scale: 0.95 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             exit={{ opacity: 0, y: -40, scale: 0.95 }}
//             transition={{ duration: 0.7, ease: "easeInOut" }}
//             className="flex flex-col lg:flex-row items-center justify-center gap-12"
//           >
//             {/* Image */}
//             <motion.div
//               className="relative order-2 lg:order-1"
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.2, duration: 0.6 }}
//             >
//               {/* Glowing pulse ring */}
//               <motion.div
//                 className="absolute -inset-8 rounded-full border-4 border-[#EFBBCF] opacity-30"
//                 animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
//                 transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//               />
//               <motion.img
//                 src={currentFact.image}
//                 alt={currentFact.flower}
//                 className="relative w-72 h-72 md:w-96 md:h-96 rounded-full object-cover shadow-2xl border-4 border-white"
//                 whileHover={{ scale: 1.05, rotate: 2 }}
//                 transition={{ type: "spring", stiffness: 250 }}
//               />
//             </motion.div>

//             {/* Text */}
//             <motion.div
//               className="order-1 lg:order-2 bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl max-w-md"
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.3, duration: 0.6 }}
//             >
//               <motion.h3
//                 className="text-2xl md:text-3xl font-bold text-[#2F5233] mb-3"
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.4 }}
//               >
//                 {currentFact.flower}
//               </motion.h3>
//               <motion.p
//                 className="text-lg md:text-xl text-[#555] italic mb-4 leading-relaxed"
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.5 }}
//               >
//                 "{currentFact.fact}"
//               </motion.p>
//               {currentFact.meaning && (
//                 <motion.div
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.6 }}
//                   className="pt-4 border-t border-[#F7D6E0]"
//                 >
//                   <p className="text-[#2F5233] font-medium flex items-center gap-2">
//                     🌷 Symbolism:
//                   </p>
//                   <p className="text-[#555]">{currentFact.meaning}</p>
//                 </motion.div>
//               )}
//             </motion.div>
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* Navigation dots */}
//       <div className="flex justify-center mt-10 space-x-3 z-10">
//         {funFacts.map((_, index) => (
//           <motion.button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             whileHover={{ scale: 1.2 }}
//             className={`w-3 h-3 rounded-full transition-all duration-300 ${
//               index === currentIndex
//                 ? "bg-[#2F5233] scale-125"
//                 : "bg-[#A3C9A8] opacity-40"
//             }`}
//           />
//         ))}
//       </div>

//       {/* Progress bar */}
//       <div className="w-64 h-1 bg-[#F7D6E0] rounded-full mt-6 overflow-hidden z-10">
//         <motion.div
//           key={currentIndex}
//           className="h-full bg-[#2F5233]"
//           initial={{ width: "0%" }}
//           animate={{ width: "100%" }}
//           transition={{ duration: 5, ease: "linear" }}
//         />
//       </div>
//     </section>
//   );
// }
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FunFactsSection() {
  const [funFacts, setFunFacts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/funfacts")
      .then((res) => res.json())
      .then((data) => setFunFacts(data))
      .catch(() => {
        setFunFacts([
          {
            _id: "1",
            flower: "Rose",
            fact: "Roses are related to apples, raspberries, cherries, peaches, plums, nectarines, pears and almonds.",
            meaning: "Love",
            image:
              "https://images.unsplash.com/photo-1597826368522-9f4cb5a6ba48?auto=format&fit=crop&w=800&q=80",
          },
          {
            _id: "2",
            flower: "Sunflower",
            fact: "Sunflowers display heliotropism, where the flower heads follow the sun across the sky.",
            meaning: "Adoration",
            image:
              "https://images.unsplash.com/photo-1597848212624-e9d2c1b6a5f6?auto=format&fit=crop&w=800&q=80",
          },
          {
            _id: "3",
            flower: "Lavender",
            fact: "Lavender has been used for over 2,500 years for medicinal and culinary purposes.",
            meaning: "Calmness",
            image:
              "https://images.unsplash.com/photo-1593186505405-1812c7bc9292?auto=format&fit=crop&w=800&q=80",
          },
        ]);
      });
  }, []);

  useEffect(() => {
    if (isHovered || funFacts.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % funFacts.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [funFacts, isHovered]);

  if (funFacts.length === 0)
    return (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#EFBBCF]" />
      </div>
    );

  const currentFact = funFacts[currentIndex];

  // always show next items in order (cyclic)
  const upcomingFacts = [
    funFacts[(currentIndex + 1) % funFacts.length],
    funFacts[(currentIndex + 2) % funFacts.length],
    funFacts[(currentIndex + 3) % funFacts.length],
  ];

  return (
    <section className="relative w-full py-16 md:py-24 px-6 md:px-12 bg-[#FAF9F6] overflow-hidden">
      {/* Title on top */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#333]">
          Did You Know?
        </h2>
        <div className="w-20 h-1 bg-[#A3C9A8] mx-auto mt-3" />
      </motion.div>

      {/* Main grid layout */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto_200px] gap-10 items-center">
        {/* Left - Fact Text */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentFact._id}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-[#2F5233]">
              {currentFact.flower}
            </h3>
            <p className="text-lg md:text-xl text-[#555] mt-3 leading-relaxed italic">
              "{currentFact.fact}"
            </p>
            {currentFact.meaning && (
              <p className="mt-4 text-[#2F5233] font-medium">
              Symbolism: <span className="text-[#555]">{currentFact.meaning}</span>
              </p>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Center - Image with glowing ring slightly left */}
        <motion.div
          className="relative flex justify-center items-center md:-translate-x-10"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            className="absolute -inset-6 rounded-full border-4 border-[#EFBBCF] opacity-40"
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.img
            key={currentFact.image}
            src={currentFact.image}
            alt={currentFact.flower}
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-2xl border-4 border-white"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05, rotate: 2 }}
          />
        </motion.div>

        {/* Right - Static Upcoming Cards */}
        <div className="hidden md:flex flex-col gap-4">
          {upcomingFacts.map((fact) => (
            <motion.div
              key={fact._id}
              className="flex items-center gap-3 bg-white shadow-md rounded-xl p-3 cursor-pointer hover:shadow-lg transition"
              whileHover={{ scale: 1.05 }}
              onClick={() => setCurrentIndex(funFacts.indexOf(fact))}
            >
              <img
                src={fact.image}
                alt={fact.flower}
                className="w-12 h-12 rounded-full object-cover border border-gray-200"
              />
              <div className="text-left">
                <p className="text-sm font-medium text-gray-700">{fact.flower}</p>
                <p className="text-xs text-gray-500 truncate w-28">
                  {fact.meaning}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-48 mx-auto mt-10 h-1 bg-[#F7D6E0] rounded-full overflow-hidden">
        <motion.div
          key={currentIndex}
          className="h-full bg-[#2F5233]"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 6, ease: "linear" }}
        />
      </div>
    </section>
  );
}
