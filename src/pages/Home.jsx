
import { useQuery } from "@tanstack/react-query";
import { getShops, getFunFacts } from "../api";
import { motion } from "framer-motion";

import Hero from "../components/home/Hero";
import FunFactsSection from "../components/home/FunFactCard";
import Bestsellers from "../components/home/Bestsellers";
import CategorySection from "../components/home/CategorySection";
import CTASection from "../components/CTASection";
import Testimonials from "../components/home/Testimonials";
import Newsletter from "../components/home/Newsletter";
import OurStory from "../components/home/OurStory";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Home() {
  const { data: shops } = useQuery({
    queryKey: ["shops"],
    queryFn: getShops,
  });

  const { data: funFacts } = useQuery({
    queryKey: ["funFacts"],
    queryFn: getFunFacts,
  });

  return (
    <div>

      <Hero />

     
      <div
  
      >
        <CategorySection />
      </div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
       viewport={{ once: false, amount: 0.3 }}
  onViewportLeave={(entry) => entry.target.style.opacity = 0}
      >
        <Bestsellers />
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
     viewport={{ once: false, amount: 0.3 }}
  onViewportLeave={(entry) => entry.target.style.opacity = 0}
      >
        <FunFactsSection />
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
  onViewportLeave={(entry) => entry.target.style.opacity = 0}
      >
        <OurStory />
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
     viewport={{ once: false, amount: 0.3 }}
  onViewportLeave={(entry) => entry.target.style.opacity = 0}
      >
        <Testimonials />
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
         viewport={{ once: false, amount: 0.3 }}
  onViewportLeave={(entry) => entry.target.style.opacity = 0}
      >
        <Newsletter />
      </motion.div>
    </div>
  );
}
