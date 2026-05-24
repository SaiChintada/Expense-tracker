import { useState } from "react";

import API from "../services/api";

import toast from "react-hot-toast";

import EditTransactionModal from "./EditTransactionModal";

const TransactionList = ({

  transactions,

  fetchTransactions,

}) => {

  const [search, setSearch] =
    useState("");

  const [filter, setFilter] =
    useState("all");

  const [selectedTransaction,
    setSelectedTransaction] =
    useState(null);

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

  const deleteTransaction =
    async (id) => {

      const confirmDelete =
        window.confirm(
          "Delete transaction?"
        );

      if (!confirmDelete)
        return;

      try {

        await API.delete(
          `/transactions/${id}`
        );

        toast.success(
          "Transaction Deleted"
        );

        fetchTransactions();

      } catch (error) {

        toast.error(
          "Delete Failed"
        );

      }
    };

  return (

    <div className="transactions-wrapper">

      <div className="transactions-top">

        <div>

          <h2>
            Transactions
          </h2>

          <p>
            Track your recent activity
          </p>

        </div>

        <div className="transactions-controls">

          <input
            type="text"
            placeholder="Search transactions..."
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

      <div className="transactions-grid">

        {filteredTransactions.length === 0 ? (

          <div className="empty-transactions">

            No transactions found

          </div>

        ) : (

          filteredTransactions.map(
            (item) => (

              <div

                key={item.id}

                className={`transaction-premium-card ${
                  item.type ===
                  "income"
                    ? "income-transaction"
                    : "expense-transaction"
                }`}

              >

                <div className="transaction-left">

                  <div
                    className={`transaction-icon ${
                      item.type ===
                      "income"
                        ? "income-icon"
                        : "expense-icon"
                    }`}
                  >

                    {item.type ===
                    "income"
                      ? "+"
                      : "-"}

                  </div>

                  <div>

                    <h3>
                      {item.title}
                    </h3>

                    <p>
                      {
                        item.category
                      }
                    </p>

                  </div>

                </div>

                <div className="transaction-right">

                  <h2
                    className={
                      item.type ===
                      "income"
                        ? "income-amount"
                        : "expense-amount"
                    }
                  >

                    {item.type ===
                    "income"
                      ? "+"
                      : "-"}

                    ₹ {item.amount}

                  </h2>

                  <span>
                    {item.date}
                  </span>

                  <div className="transaction-actions">

                    <button
                      className="edit-btn"
                      onClick={() =>
                        setSelectedTransaction(
                          item
                        )
                      }
                    >

                      Edit

                    </button>

                    <button
                      className="delete-btn"
                      onClick={() =>
                        deleteTransaction(
                          item.id
                        )
                      }
                    >

                      Delete

                    </button>

                  </div>

                </div>

              </div>

            )
          )

        )}

      </div>

      {selectedTransaction && (

        <EditTransactionModal

          transaction={
            selectedTransaction
          }

          onClose={() =>
            setSelectedTransaction(
              null
            )
          }

          fetchTransactions={
            fetchTransactions
          }

        />

      )}

    </div>

  );

};

export default TransactionList;