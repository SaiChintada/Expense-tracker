import { motion } from "framer-motion";

import {
  FaWallet,
  FaArrowDown,
  FaArrowUp,
} from "react-icons/fa";

import { useTransactions } from "../context/TransactionContext";

function DashboardCards() {

  const { transactions } = useTransactions();

  const income = transactions
    .filter((item) => item.type === "income")
    .reduce((acc, item) => acc + item.amount, 0);

  const expense = transactions
    .filter((item) => item.type === "expense")
    .reduce((acc, item) => acc + item.amount, 0);

  const balance = income - expense;

  const cards = [
    {
      title: "Balance",
      value: balance,
      color: "from-violet-500 to-purple-500",
      icon: <FaWallet />,
    },
    {
      title: "Income",
      value: income,
      color: "from-green-500 to-emerald-500",
      icon: <FaArrowDown />,
    },
    {
      title: "Expense",
      value: expense,
      color: "from-red-500 to-pink-500",
      icon: <FaArrowUp />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      {cards.map((card, index) => (

        <motion.div
          key={index}
          whileHover={{ scale: 1.03 }}
          className={`bg-gradient-to-r ${card.color}
          p-6 rounded-3xl shadow-lg`}
        >

          <div className="flex justify-between items-center">

            <div>

              <p className="text-sm opacity-80">
                {card.title}
              </p>

              <h2 className="text-3xl font-bold mt-2">
                ₹ {card.value}
              </h2>

            </div>

            <div className="text-3xl opacity-80">
              {card.icon}
            </div>

          </div>

        </motion.div>

      ))}

    </div>
  );
}

export default DashboardCards;