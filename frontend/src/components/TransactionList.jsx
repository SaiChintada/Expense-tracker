import { useState } from "react";

const TransactionList = ({
  transactions,
}) => {

  const [search, setSearch] =
    useState("");

  const [filter, setFilter] =
    useState("all");

  const filteredTransactions =
    transactions.filter((t) => {

      const matchesSearch =
        t.title
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchesFilter =
        filter === "all"
          ? true
          : t.type === filter;

      return (
        matchesSearch &&
        matchesFilter
      );

    });

  return (

    <div className="list-card">

      <div className="list-header">

        <h2>
          Recent Transactions
        </h2>

        <div className="list-controls">

          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
          />

          <select
            value={filter}
            onChange={(e) =>
              setFilter(
                e.target.value
              )
            }
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

      {filteredTransactions.length === 0 ? (

        <p className="empty-text">
          No transactions found
        </p>

      ) : (

        <div className="transaction-grid">

          {filteredTransactions.map(
            (item) => (

              <div
                key={item.id}
                className="transaction-card"
              >

                <div>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.category}
                  </p>

                </div>

                <div className="transaction-right">

                  <span
                    className={
                      item.type ===
                      "income"
                        ? "income"
                        : "expense"
                    }
                  >

                    ₹ {item.amount}

                  </span>

                  <small>
                    {item.date}
                  </small>

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