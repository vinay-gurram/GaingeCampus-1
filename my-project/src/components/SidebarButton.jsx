import { motion } from "framer-motion";

const SidebarButton = ({ label, onClick, isActive }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`w-full px-4 py-3 rounded-xl text-left font-medium transition-all
        ${
          isActive
            ? "bg-indigo-600 text-white shadow"
            : "bg-white dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        }`}
    >
      {label}
    </motion.button>
  );
};

export default SidebarButton;
