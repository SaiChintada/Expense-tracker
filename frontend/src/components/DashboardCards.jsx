import { calculateSummary } from "../utils/calculateSummary";

const DashboardCards = ({ transactions = [] }) => {
  const summary = calculateSummary(transactions);

  const cards = [
    {
      title: "Total Balance",
      amount: `$${summary.balance}`,
    },
    {
      title: "Income",
      amount: `$${summary.income}`,
    },
    {
      title: "Expenses",
      amount: `$${summary.expenses}`,
    },
    {
      title: "Savings",
      amount: `${summary.savings}%`,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white dark:bg-[#1B2333] p-6 rounded-2xl shadow-lg border border-violet-500/10"
        >
          <h3 className="text-gray-400 text-sm mb-2">
            {card.title}
          </h3>

          <p className="text-black dark:text-white text-3xl font-bold">
            {card.amount}
          </p>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;