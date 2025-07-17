import { motion } from "framer-motion";
import { Bot, MessageSquare } from "lucide-react";

const Sidebar = () => {
  const chats = ["Marketing Bot", "Data Analyst", "Resume Helper", "Cricket Coach"];

  return (
    <motion.aside
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 60 }}
      className="w-full sm:w-64 bg-white dark:bg-gray-900 border-r dark:border-gray-800 p-6 shadow-md"
    >
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white flex items-center gap-2 mb-6">
        <Bot className="w-5 h-5 text-purple-600" />
        AI Assistants
      </h2>

      <ul className="space-y-3">
        {chats.map((chat, idx) => (
          <motion.li
            key={idx}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="p-3 rounded-xl bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900 text-gray-800 dark:text-white shadow hover:shadow-lg cursor-pointer transition-all"
          >
            <MessageSquare className="inline-block w-4 h-4 mr-2 text-indigo-600" />
            {chat}
          </motion.li>
        ))}
      </ul>
    </motion.aside>
  );
};

export default Sidebar;
