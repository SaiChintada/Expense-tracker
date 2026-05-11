

const TransactionList = ({ transactions = [] }) => {
  

  return (
    <div className="bg-[#1B2333] p-6 rounded-2xl shadow-lg mt-6">
      <h2 className="text-white text-2xl font-semibold mb-6">
        Recent Transactions
      </h2>

      {transactions.length === 0 ? (
        <p className="text-gray-400">
          No transactions found.
        </p>
      ) : (
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-[#111827] p-4 rounded-xl border border-gray-700"
            >
              {/* LEFT */}
              <div>
                <h3 className="text-white font-semibold text-lg">
                  {transaction.title}
                </h3>

                <p className="text-gray-400 text-sm">
                  {transaction.category}
                </p>
              </div>

              {/* RIGHT */}
              <div className="mt-3 sm:mt-0 text-right">
                <p
                  className={`text-lg font-bold ${
                    transaction.type === "income"
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {transaction.type === "income" ? "+" : "-"}₹
                  {transaction.amount}
                </p>

                <p className="text-gray-500 text-sm">
                  {transaction.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TransactionList;