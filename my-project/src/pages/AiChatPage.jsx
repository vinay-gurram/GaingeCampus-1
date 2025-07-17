import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { motion } from "framer-motion";

const AiChatPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-gray-900 dark:to-black text-gray-900 dark:text-white transition-colors duration-300">
      <Header />

      <div className="flex flex-col sm:flex-row">
        {/* Sidebar */}
        <Sidebar />

        {/* Chat Window */}
        <div className="flex-1 p-6">
          {/* Chat Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 h-[70vh] overflow-y-auto transition-all"
          >
            <p className="text-gray-500 dark:text-gray-300 italic">
              Start chatting with your AI assistant...
            </p>
          </motion.div>

          {/* Message Input */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 flex gap-2"
          >
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 p-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
            <button className="bg-indigo-600 text-white px-5 py-3 rounded-xl hover:bg-indigo-700 active:scale-95 transition shadow">
              Send
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AiChatPage;
