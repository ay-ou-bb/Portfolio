import { motion } from "framer-motion";

// زدت export default هنايا
const RevealOnScroll = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      {children}
    </motion.div>
  );
};

export default RevealOnScroll;