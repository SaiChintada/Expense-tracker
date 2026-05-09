import { useTransactions } from "../context/TransactionContext";

function TransactionList() {

  const {
    transactions,
    deleteTransaction
  } = useTransactions();

  return (
    <div className="bg-slate-900 p-5 rounded-2xl">

      <h2 className="text-2xl font-bold mb-4">
        Recent Transactions
      </h2>

      <div className="space-y-3">

        {transactions.map((item) => (

          <div
            key={item.id}
            className="bg-slate-800 p-4 rounded-lg flex justify-between items-center"
          >

            <div>

              <h3 className="font-bold">
                {item.title}
              </h3>

              <p className="text-sm text-slate-400">
                {item.category}
              </p>

            </div>

            <div className="flex items-center gap-4">

              <div
                className={
                  item.type === "income"
                    ? "text-green-400"
                    : "text-red-400"
                }
              >
                ₹ {item.amount}
              </div>

              <button
                onClick={() =>
                  deleteTransaction(item.id)
                }
                className="bg-red-500 px-3 py-1 rounded"
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default TransactionList;