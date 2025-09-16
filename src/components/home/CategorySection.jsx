
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CategorySection = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("http://localhost:5000/products");
        const data = await res.json();

        const categoryMap = {};
        data.products.forEach((product) => {
          const cat = product.mainCategory;
          if (cat && !categoryMap[cat._id]) {
            categoryMap[cat._id] = {
              _id: cat._id,
              name: cat.name,
              image: cat.image,
            };
          }
        });

        setCategories(Object.values(categoryMap).slice(0, 4));
      } catch (err) {
        console.error(err);
      }
    };

    fetchCategories();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const arrowColors = ["#EFBBCF", "#A3C9A8", "#C7B8EA", "#2F5233"];

  return (
    <section className="py-12 bg-[#FAF9F6]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Section Title */}
        <motion.p
          className="text-sm font-bold uppercase tracking-wide text-[#A3C9A8]"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our
        </motion.p>

        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#EFBBCF] mt-1"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          Shop by Category
        </motion.h2>

        <motion.p
          className="text-lg text-[#333333] mt-2 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Discover flowers by collection
        </motion.p>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {categories.map((cat, index) => (
            <motion.div
              key={cat._id}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                rotate: 1,
                boxShadow: "0 12px 30px rgba(0,0,0,0.1)",
              }}
              transition={{ type: "spring", stiffness: 200 }}
              onClick={() => navigate(`/products?mainCategory=${cat._id}`)}
              className="group relative flex items-center justify-between p-6 cursor-pointer border border-[#EFBBCF]/40 rounded-2xl bg-white shadow-sm overflow-hidden"
            >
              {/* Decorative overlay */}
              <span className="absolute inset-0 bg-gradient-to-tr from-[#EFBBCF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

              {/* Text Section */}
              <div className="flex flex-col justify-center text-left pr-4 relative z-10 w-2/3">
                <h3 className="text-xl font-semibold text-[#2F5233]">
                  {cat.name}
                </h3>
                <p className="text-sm text-gray-500 mb-2">
                  Fresh & handpicked
                </p>

                {/* Long Arrow CTA */}
                <motion.div
                  className="flex items-center gap-2 opacity-0 translate-x-[-20px] group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <span className="text-sm font-medium" style={{ color: arrowColors[index % arrowColors.length] }}>
                    Explore
                  </span>
                  <ArrowRight
                    size={34} // bigger arrow
                    strokeWidth={2.5}
                    color={arrowColors[index % arrowColors.length]}
                  />
                </motion.div>
              </div>

              {/* Image */}
              <motion.img
                src={cat.image}
                alt={cat.name}
                className="h-28 w-auto object-contain relative z-10"
                whileHover={{ scale: 1.08, rotate: -2 }}
                transition={{ type: "spring", stiffness: 150 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CategorySection;
