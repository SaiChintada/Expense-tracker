const BudgetProgress = ({
  transactions = [],
}) => {
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce(
      (acc, item) =>
        acc + Number(item.amount),
      0
    );

  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce(
      (acc, item) =>
        acc + Number(item.amount),
      0
    );

  const percentage =
    income > 0
      ? Math.min(
          (expenses / income) * 100,
          100
        )
      : 0;

  return (
    <div className="bg-[#1B2333] p-6 rounded-2xl shadow-lg mt-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white text-xl font-semibold">
          Monthly Budget
        </h2>

        <span className="text-violet-400 font-bold">
          {percentage.toFixed(0)}%
        </span>
      </div>

      <div className="w-full h-4 bg-[#111827] rounded-full overflow-hidden">
        <div
          className="h-full bg-violet-500 transition-all duration-500"
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>

      <div className="flex justify-between mt-4 text-sm">
        <p className="text-green-400">
          Income: ₹{income}
        </p>

        <p className="text-red-400">
          Expenses: ₹{expenses}
        </p>
      </div>
    </div>
  );
};

export default BudgetProgress;