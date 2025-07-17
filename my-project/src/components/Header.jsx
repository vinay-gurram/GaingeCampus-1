import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 70 }}
      className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 shadow-lg text-white"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <motion.h1
          className="text-3xl font-bold tracking-tight"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
        >
          🤖 Gainge AI Assistant
        </motion.h1>
        <p className="text-sm text-indigo-100 mt-2 sm:mt-0">Smart. Fast. Reliable.</p>
      </div>
    </motion.header>
  );
};

export default Header;
