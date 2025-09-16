
// import { useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";
// import { motion } from "framer-motion";
// import ProductCard from "../components/ProductCard";

// export default function Products() {
//   const [products, setProducts] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchParams, setSearchParams] = useSearchParams();

//   const mainCategory = searchParams.get("mainCategory");

//   // ✅ Fetch products
//   useEffect(() => {
//     let url = "http://localhost:5000/products";
//     if (mainCategory) url += `?mainCategory=${mainCategory}`;

//     setLoading(true);
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => {
//         setProducts(data.products || []);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching products:", err);
//         setLoading(false);
//       });
//   }, [mainCategory]);

//   // ✅ Fetch categories for filter buttons
//   useEffect(() => {
//     fetch("http://localhost:5000/products")
//       .then((res) => res.json())
//       .then((data) => {
//         const uniqueCats = {};
//         data.products.forEach((product) => {
//           if (product.mainCategory) {
//             uniqueCats[product.mainCategory._id] = product.mainCategory;
//           }
//         });
//         setCategories(Object.values(uniqueCats));
//       })
//       .catch((err) => console.error("Error fetching categories:", err));
//   }, []);

//   if (loading)
//     return (
//       <div className="flex justify-center items-center h-64">
//         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#EFBBCF]" />
//       </div>
//     );

//   return (
//     <section className="my-10 px-4 md:px-8 max-w-7xl mx-auto">
//       {/* Animated Page Title */}
//       <motion.h2
//         className="text-3xl md:text-4xl font-bold text-center text-[#EFBBCF] mb-8"
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//       >
//         {mainCategory ? "Filtered Products" : "Our Products"}
//       </motion.h2>

//       {/* Category Filters */}
//       <motion.div
//         className="flex flex-wrap justify-center gap-3 mb-10"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         <button
//           onClick={() => setSearchParams({})}
//           className={`px-5 py-2 rounded-full border text-sm font-medium transition-all ${
//             !mainCategory
//               ? "bg-[#2F5233] text-white shadow"
//               : "bg-white text-[#2F5233] border-[#2F5233]/40 hover:bg-[#F7D6E0]/40"
//           }`}
//         >
//           All
//         </button>
//         {categories.map((cat) => (
//           <button
//             key={cat._id}
//             onClick={() => setSearchParams({ mainCategory: cat._id })}
//             className={`px-5 py-2 rounded-full border text-sm font-medium transition-all ${
//               mainCategory === cat._id
//                 ? "bg-[#2F5233] text-white shadow"
//                 : "bg-white text-[#2F5233] border-[#2F5233]/40 hover:bg-[#F7D6E0]/40"
//             }`}
//           >
//             {cat.name}
//           </button>
//         ))}
//       </motion.div>

//       {/* Products Grid */}
//       {products.length === 0 ? (
//         <p className="text-center text-gray-500">No products found.</p>
//       ) : (
//         <motion.div
//           className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           {products.map((product) => (
//             <motion.div
//               key={product._id}
//               whileHover={{ scale: 1.03 }}
//               transition={{ type: "spring", stiffness: 200 }}
//             >
//               <ProductCard product={product} />
//             </motion.div>
//           ))}
//         </motion.div>
//       )}
//     </section>
//   );
// }

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";
import FullPageLoader from "../components/FullPageLoader";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const mainCategory = searchParams.get("mainCategory");

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const [productsRes, allProductsRes] = await Promise.all([
          fetch(
            mainCategory
              ? `http://localhost:5000/products?mainCategory=${mainCategory}`
              : "http://localhost:5000/products"
          ),
          fetch("http://localhost:5000/products"),
        ]);

        const productsData = await productsRes.json();
        const allProductsData = await allProductsRes.json();

        setProducts(productsData.products || []);

        // Extract categories only once
        const uniqueCats = {};
        allProductsData.products.forEach((product) => {
          if (product.mainCategory) {
            uniqueCats[product.mainCategory._id] = product.mainCategory;
          }
        });
        setCategories(Object.values(uniqueCats));
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [mainCategory]);

  if (loading) return <FullPageLoader />;

  return (
    <section className="my-10 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Animated Page Title */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center text-[#EFBBCF] mb-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {mainCategory ? "Filtered Products" : "Our Products"}
      </motion.h2>

      {/* Filters */}
      <motion.div
        className="flex flex-wrap justify-center gap-3 mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <button
          onClick={() => setSearchParams({})}
          className={`px-5 py-2 rounded-full border text-sm font-medium transition-all ${
            !mainCategory
              ? "bg-[#2F5233] text-white shadow"
              : "bg-white text-[#2F5233] border-[#2F5233]/40 hover:bg-[#F7D6E0]/40"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat._id}
            onClick={() => setSearchParams({ mainCategory: cat._id })}
            className={`px-5 py-2 rounded-full border text-sm font-medium transition-all ${
              mainCategory === cat._id
                ? "bg-[#2F5233] text-white shadow"
                : "bg-white text-[#2F5233] border-[#2F5233]/40 hover:bg-[#F7D6E0]/40"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </motion.div>

      {/* Product Grid */}
      {products.length === 0 ? (
        <p className="text-center text-gray-500">No products found.</p>
      ) : (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.2 },
            },
          }}
        >
          {products.map((product) => (
            <motion.div
              key={product._id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </section>
  );
}
