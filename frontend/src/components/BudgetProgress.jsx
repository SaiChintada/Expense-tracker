const BudgetProgress = ({
  transactions = [],
}) => {
  // MONTHLY BUDGET
  const monthlyBudget = 50000;

  // TOTAL EXPENSES
  const totalExpenses = transactions
    .filter((t) => t.type === "expense")
    .reduce(
      (acc, curr) =>
        acc + Number(curr.amount),
      0
    );

  // PROGRESS %
  const progress = Math.min(
    (totalExpenses / monthlyBudget) * 100,
    100
  );

  // REMAINING
  const remaining =
    monthlyBudget - totalExpenses;

  return (
    <div className="bg-[#1B2333] p-6 rounded-2xl shadow-lg mt-6">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-white text-2xl font-semibold">
            Monthly Budget
          </h2>

          <p className="text-gray-400 text-sm mt-1">
            Track your monthly spending
          </p>
        </div>

        <div className="text-right">
          <p className="text-violet-400 text-xl font-bold">
            ₹{monthlyBudget}
          </p>

          <p className="text-gray-400 text-sm">
            Budget Limit
          </p>
        </div>
      </div>

      {/* PROGRESS BAR */}
      <div className="w-full bg-[#111827] rounded-full h-5 overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-700 ${
            progress > 90
              ? "bg-red-500"
              : progress > 70
              ? "bg-yellow-500"
              : "bg-violet-500"
          }`}
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
        {/* SPENT */}
        <div className="bg-[#111827] p-4 rounded-xl">
          <p className="text-gray-400 text-sm">
            Spent
          </p>

          <h3 className="text-red-400 text-2xl font-bold mt-1">
            ₹{totalExpenses}
          </h3>
        </div>

        {/* REMAINING */}
        <div className="bg-[#111827] p-4 rounded-xl">
          <p className="text-gray-400 text-sm">
            Remaining
          </p>

          <h3 className="text-green-400 text-2xl font-bold mt-1">
            ₹{remaining}
          </h3>
        </div>

        {/* PROGRESS */}
        <div className="bg-[#111827] p-4 rounded-xl">
          <p className="text-gray-400 text-sm">
            Used
          </p>

          <h3 className="text-violet-400 text-2xl font-bold mt-1">
            {progress.toFixed(0)}%
          </h3>
        </div>
      </div>

      {/* WARNING */}
      {progress > 90 && (
        <div className="mt-6 bg-red-500/20 border border-red-500 p-4 rounded-xl">
          <p className="text-red-400 font-semibold">
            Warning: Budget almost exceeded!
          </p>
        </div>
      )}
    </div>
  );
};

export default BudgetProgress;