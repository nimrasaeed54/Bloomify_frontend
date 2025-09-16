// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// export default function Bestsellers() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("http://localhost:5000/products?category=bestseller")
//       .then((res) => res.json())
//       .then((data) => {
//         setProducts(data.products || []);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching bestsellers:", err);
//         setLoading(false);
//       });
//   }, []);

//   if (loading)
//     return <p className="text-center mt-8 text-gray-400">Loading products...</p>;

//   return (
//     <section className="my-6 px-4 md:px-8 lg:px-16 bg-[#FAF9F6] relative overflow-hidden">
//   {/* Top wavy background SVG */}
//   <svg
//     className="absolute top-[134px] left-0 w-full -translate-y-1/2 z-0"
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 1440 320"
//   >
//     <path
//       fill="#C7B8EA"
//       fillOpacity="0.5"
//       d="M0,256L30,245.3C60,235,120,213,180,176C240,139,300,85,360,80C420,75,480,117,540,144C600,171,660,181,720,197.3C780,213,840,235,900,229.3C960,224,1020,192,1080,186.7C1140,181,1200,203,1260,197.3C1320,192,1380,160,1410,144L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
//     ></path>
//   </svg>

//   {/* Header */}
//   <div className="text-center mb-6 relative z-10">
//     <p className="text-xs text-[#2F5233] tracking-wide uppercase">Our</p>
//     <h2 className="text-3xl md:text-4xl font-extrabold text-[#EFBBCF]">
//       Best Sellers
//     </h2>
//     <p className="mt-2 text-[#2F5233] text-sm md:text-base max-w-lg mx-auto text-center leading-snug">
//       Discover our handpicked blooms that brighten every day <br />
//       with love, fragrance, and joy
//     </p>
//   </div>

//   {/* Products grid */}
//   <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 relative z-10 justify-items-center">
//     {products.slice(0, 6).map((product) => (
//       <Link
//         key={product._id}
//         to={`/products/${product._id}`}
//         className="flex flex-col items-center space-y-2 transition-transform transform hover:scale-105"
//       >
//         <div className="bg-[#EFBBCF] w-32 h-36 rounded-t-full overflow-hidden flex justify-center items-center shadow-md hover:shadow-lg transition-shadow">
//           <img
//             src={product.image}
//             alt={product.name}
//             className="w-full h-full object-contain p-2"
//           />
//         </div>
//         <div className="text-center px-2">
//           <h3 className="text-sm md:text-base font-medium text-gray-700 truncate">
//             {product.name}
//           </h3>
//           <p className="text-[#2F5233] font-semibold text-xs md:text-sm">
//             Rs {product.price}
//           </p>
//         </div>
//       </Link>
//     ))}
//   </div>
//     <svg
//     className="absolute bottom-0 left-0 w-full z-0"
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 1440 320"
//   >
//     <path
//       fill="#C7B8EA"
//       fillOpacity="0.5"
//       d="M0,256L30,245.3C60,235,120,213,180,176C240,139,300,85,360,80C420,75,480,117,540,144C600,171,660,181,720,197.3C780,213,840,235,900,229.3C960,224,1020,192,1080,186.7C1140,181,1200,203,1260,197.3C1320,192,1380,160,1410,144L1440,128L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
//     ></path>
//   </svg>
// </section>


//   );
// }
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Bestsellers() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/products?category=bestseller")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching bestsellers:", err);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <p className="text-center mt-8 text-gray-400">
        Loading products...
      </p>
    );

  return (
    <section className="my-6 px-4 md:px-8 lg:px-16 bg-[#FAF9F6] relative overflow-hidden">
      {/* Top wave - keep exactly as you set it */}
      <svg
        className="absolute top-[134px] left-0 w-full -translate-y-1/2 z-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#C7B8EA"
          fillOpacity="0.5"
          d="M0,256L30,245.3C60,235,120,213,180,176C240,139,300,85,360,80C420,75,480,117,540,144C600,171,660,181,720,197.3C780,213,840,235,900,229.3C960,224,1020,192,1080,186.7C1140,181,1200,203,1260,197.3C1320,192,1380,160,1410,144L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        ></path>
      </svg>

      {/* Header */}
      <motion.div
        className="text-center mb-6 relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="text-xs text-[#2F5233] tracking-wide uppercase">
          Our
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#EFBBCF]">
          Best Sellers
        </h2>
        <p className="mt-2 text-[#2F5233] text-sm md:text-base max-w-lg mx-auto text-center leading-snug">
          Discover our handpicked blooms that brighten every day <br />
          with love, fragrance, and joy
        </p>
      </motion.div>

      {/* Products grid */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 gap-4 relative z-10 justify-items-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        {products.slice(0, 6).map((product) => (
          <motion.div
            key={product._id}
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.9 },
              show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
            }}
          >
            <Link
              to={`/products/${product._id}`}
              className="flex flex-col items-center space-y-2 group transition-transform"
            >
              <motion.div
                className="bg-[#EFBBCF] w-32 h-36 rounded-t-full overflow-hidden flex justify-center items-center shadow-md group-hover:shadow-xl transition-all"
                whileHover={{ scale: 1.07, rotate: 2 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-2"
                />
              </motion.div>
              <div className="text-center px-2">
                <h3 className="text-sm md:text-base font-medium text-gray-700 group-hover:text-[#2F5233] transition-colors">
                  {product.name}
                </h3>
                <p className="text-[#2F5233] font-semibold text-xs md:text-sm">
                  Rs {product.price}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom wave - keep exactly as you set it */}
      <svg
        className="absolute bottom-0 left-0 w-full z-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#C7B8EA"
          fillOpacity="0.5"
          d="M0,256L30,245.3C60,235,120,213,180,176C240,139,300,85,360,80C420,75,480,117,540,144C600,171,660,181,720,197.3C780,213,840,235,900,229.3C960,224,1020,192,1080,186.7C1140,181,1200,203,1260,197.3C1320,192,1380,160,1410,144L1440,128L1440,0L0,0Z"
        ></path>
      </svg>
    </section>
  );
}
