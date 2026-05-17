import { motion } from "framer-motion";
import { FaBell, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <motion.div
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="flex items-center justify-between bg-[#1B2333] p-4 rounded-2xl shadow-lg"
    >
      <div>
        <h1 className="text-2xl font-bold text-white">
          Dashboard
        </h1>

        <p className="text-gray-400 text-sm">
          Welcome back 👋
        </p>
      </div>

      <div className="flex items-center gap-5">
        <FaBell className="text-gray-300 text-xl cursor-pointer hover:text-violet-400 transition-all" />

        <FaUserCircle className="text-violet-400 text-3xl cursor-pointer" />
      </div>
    </motion.div>
  );
};

export default Navbar;