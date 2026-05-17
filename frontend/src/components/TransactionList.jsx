import { useState } from "react";

const TransactionList = ({
  transactions = [],
}) => {
  const [search, setSearch] =
    useState("");

  const [filter, setFilter] =
    useState("all");

  const filteredTransactions =
    transactions
      .filter((transaction) => {
        const matchesSearch =
          transaction.title
            ?.toLowerCase()
            .includes(
              search.toLowerCase()
            );

        const matchesFilter =
          filter === "all"
            ? true
            : transaction.type ===
              filter;

        return (
          matchesSearch &&
          matchesFilter
        );
      })
      .reverse();

  return (
    <div className="bg-[#1B2333] p-6 rounded-2xl shadow-lg mt-6">
      
      {/* TOP */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h2 className="text-white text-2xl font-semibold">
          Recent Transactions
        </h2>

        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
            className="bg-[#111827] text-white px-4 py-2 rounded-lg outline-none"
          />

          <select
            value={filter}
            onChange={(e) =>
              setFilter(
                e.target.value
              )
            }
            className="bg-[#111827] text-white px-4 py-2 rounded-lg outline-none"
          >
            <option value="all">
              All
            </option>

            <option value="income">
              Income
            </option>

            <option value="expense">
              Expense
            </option>
          </select>
        </div>
      </div>

      {/* EMPTY */}
      {filteredTransactions.length ===
      0 ? (
        <div className="text-center py-10 text-gray-400">
          No transactions found
        </div>
      ) : (
        <div className="space-y-4">
          {filteredTransactions.map(
            (transaction) => (
              <div
                key={
                  transaction.id
                }
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-[#111827] p-4 rounded-xl border border-gray-700 hover:border-violet-500 transition-all"
              >
                {/* LEFT */}
                <div>
                  <h3 className="text-white font-semibold text-lg">
                    {
                      transaction.title
                    }
                  </h3>

                  <p className="text-gray-400 text-sm">
                    {
                      transaction.category
                    }
                  </p>
                </div>

                {/* RIGHT */}
                <div className="mt-3 sm:mt-0 text-right">
                  <p
                    className={`text-lg font-bold ${
                      transaction.type ===
                      "income"
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {transaction.type ===
                    "income"
                      ? "+"
                      : "-"}
                    ₹
                    {
                      transaction.amount
                    }
                  </p>

                  <p className="text-gray-500 text-sm">
                    {
                      transaction.date
                    }
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default TransactionList;