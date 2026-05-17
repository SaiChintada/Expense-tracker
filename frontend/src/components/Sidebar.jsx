import { motion } from "framer-motion";
import {
  FaWallet,
  FaChartPie,
  FaExchangeAlt,
} from "react-icons/fa";

const Sidebar = () => {
  const menuItems = [
    {
      icon: <FaWallet />,
      name: "Dashboard",
    },
    {
      icon: <FaChartPie />,
      name: "Analytics",
    },
    {
      icon: <FaExchangeAlt />,
      name: "Transactions",
    },
  ];

  return (
    <motion.div
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="h-screen bg-[#111827] border-r border-gray-800 p-6"
    >
      <h1 className="text-3xl font-bold text-violet-400 mb-10">
        FinTrack
      </h1>

      <div className="space-y-4">
        {menuItems.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="flex items-center gap-4 p-4 rounded-xl cursor-pointer bg-[#1B2333] hover:bg-violet-600 transition-all"
          >
            <span className="text-white text-xl">
              {item.icon}
            </span>

            <span className="text-white font-medium">
              {item.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Sidebar;