
// import React from "react";
// import { motion } from "framer-motion";

// export default function OurStory() {
//   return (
//     <section className="relative py-24 bg-[#F7D6E0] overflow-hidden">
//       {/* Decorative Shapes */}
//       <div className="absolute top-10 left-4 w-28 md:w-36 opacity-20">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none">
//           <circle cx="100" cy="100" r="80" stroke="#A3C9A8" strokeWidth="8" />
//         </svg>
//       </div>
//       <div className="absolute bottom-10 right-4 w-32 md:w-40 opacity-20">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none">
//           <rect x="30" y="30" width="140" height="140" rx="20" stroke="#C7B8EA" strokeWidth="6" />
//         </svg>
//       </div>

//       <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center px-6 md:px-8">
//         {/* Stylish Collage (fixed height) */}
//         <div className="relative grid grid-cols-3 grid-rows-2 gap-3 h-[400px]">
//           {/* Large image */}
//           <motion.div
//             className="col-span-2 row-span-2 rounded-2xl overflow-hidden shadow-lg"
//             whileHover={{ scale: 1.03 }}
//           >
//             <img
//               src="https://images.unsplash.com/photo-1722509924884-5c2135db5b82?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               alt="Our Studio"
//               className="w-full h-full object-cover"
//             />
//           </motion.div>

//           {/* Smaller images that fill remaining space */}
//           <motion.div
//             className="rounded-2xl overflow-hidden shadow-md"
//             whileHover={{ scale: 1.05 }}
//           >
//             <img
//               src="https://images.unsplash.com/photo-1589244159943-460088ed5c92?q=80&w=890&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               alt="Bouquet"
//               className="w-full h-full object-cover"
//             />
//           </motion.div>

//           <motion.div
//             className="rounded-2xl overflow-hidden shadow-md"
//             whileHover={{ scale: 1.05 }}
//           >
//             <img
//               src="https://plus.unsplash.com/premium_photo-1661302804263-05dfbc580878?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dp"
//               alt="Flowers"
//               className="w-full h-full object-cover"
//             />
//           </motion.div>

      
//         </div>

//         {/* Text Content */}
//         <motion.div
//           initial={{ opacity: 0, x: 40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: false, amount: 0.3 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           <h2 className="text-3xl md:text-5xl font-bold text-[#333] mb-6 relative inline-block">
//             Our Story
//             <span className="absolute -bottom-2 left-0 w-16 h-1 bg-[#2F5233] rounded-full"></span>
//           </h2>

//           <p className="text-base md:text-lg text-[#444] leading-relaxed mb-5">
//             BloomNear was born with a simple mission: to bring joy, love, and
//             nature’s beauty closer to you. Every bouquet is handpicked with
//             care, crafted fresh, and delivered with love.
//           </p>

//           <p className="text-base md:text-lg text-[#444] leading-relaxed mb-8">
//             Whether it’s a celebration, a romantic gesture, or a “just because,”
//             we make sure your flowers speak from the heart.
//           </p>

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             className="bg-[#2F5233] hover:bg-[#244026] text-white px-8 py-3 rounded-full font-semibold transition shadow-md"
//           >
//             Learn More
//           </motion.button>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
import React from "react";
import { motion } from "framer-motion";

export default function OurStory() {
  // Animation variants
  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="relative py-24 bg-[#F7D6E0] overflow-hidden">
      {/* Decorative Shapes */}
      <div className="absolute top-10 left-4 w-28 md:w-36 opacity-20">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="80" stroke="#A3C9A8" strokeWidth="8" />
        </svg>
      </div>
      <div className="absolute bottom-10 right-4 w-32 md:w-40 opacity-20">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none">
          <rect x="30" y="30" width="140" height="140" rx="20" stroke="#C7B8EA" strokeWidth="6" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center px-6 md:px-8">
        {/* Stylish Collage */}
        <motion.div
          className="relative grid grid-cols-3 grid-rows-2 gap-3 h-[400px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={imageVariants}
        >
          {/* Large image */}
          <motion.div
            className="col-span-2 row-span-2 rounded-2xl overflow-hidden shadow-lg"
            whileHover={{ scale: 1.03 }}
          >
            <img
              src="https://images.unsplash.com/photo-1722509924884-5c2135db5b82?q=80&w=435&auto=format&fit=crop"
              alt="Our Studio"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Smaller images */}
          <motion.div
            className="rounded-2xl overflow-hidden shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="https://images.unsplash.com/photo-1589244159943-460088ed5c92?q=80&w=890&auto=format&fit=crop"
              alt="Bouquet"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            className="rounded-2xl overflow-hidden shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1661302804263-05dfbc580878?q=80&w=870&auto=format&fit=crop"
              alt="Flowers"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={textVariants}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#333] mb-6 relative inline-block">
            Our Story
            <span className="absolute -bottom-2 left-0 w-16 h-1 bg-[#2F5233] rounded-full"></span>
          </h2>

          <p className="text-base md:text-lg text-[#444] leading-relaxed mb-5">
            BloomNear was born with a simple mission: to bring joy, love, and
            nature’s beauty closer to you. Every bouquet is handpicked with
            care, crafted fresh, and delivered with love.
          </p>

          <p className="text-base md:text-lg text-[#444] leading-relaxed mb-8">
            Whether it’s a celebration, a romantic gesture, or a “just because,”
            we make sure your flowers speak from the heart.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-[#2F5233] hover:bg-[#244026] text-white px-8 py-3 rounded-full font-semibold transition shadow-md"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
