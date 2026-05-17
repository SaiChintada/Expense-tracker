import {
  FaWallet,
  FaArrowUp,
  FaArrowDown,
  FaPiggyBank,
} from "react-icons/fa";

import { motion } from "framer-motion";
import { calculateSummary } from "../utils/calculateSummary";

const DashboardCards = ({
  transactions = [],
}) => {
  const summary =
    calculateSummary(
      transactions
    );

  const cards = [
    {
      title: "Balance",
      amount: `₹${summary.balance}`,
      icon: <FaWallet />,
      color: "text-violet-400",
    },
    {
      title: "Income",
      amount: `₹${summary.income}`,
      icon: <FaArrowUp />,
      color: "text-green-400",
    },
    {
      title: "Expenses",
      amount: `₹${summary.expenses}`,
      icon: <FaArrowDown />,
      color: "text-red-400",
    },
    {
      title: "Savings",
      amount: `${summary.savings}%`,
      icon: <FaPiggyBank />,
      color: "text-cyan-400",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
      {cards.map(
        (card, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay:
                index * 0.1,
            }}
            whileHover={{
              scale: 1.02,
            }}
            className="bg-[#1B2333] p-6 rounded-2xl shadow-lg border border-gray-800"
          >
            <div className="flex items-center justify-between mb-4">
              
              <h3 className="text-gray-400 text-sm">
                {card.title}
              </h3>

              <span
                className={`text-2xl ${card.color}`}
              >
                {card.icon}
              </span>
            </div>

            <p className="text-white text-3xl font-bold">
              {card.amount}
            </p>
          </motion.div>
        )
      )}
    </div>
  );
};

export default DashboardCards;