import {
  Trash2,
  Pencil,
} from "lucide-react";

import API from "../services/api";

const TransactionCard = ({
  transaction,
  fetchTransactions,
}) => {

  const handleDelete =
    async () => {

      try {

        await API.delete(
          `/transactions/${transaction.id}`
        );

        fetchTransactions();

      } catch (error) {

        console.log(error);
      }
    };

  return (

    <div className="transaction-card">

      <div className="transaction-left">

        <div
          className={`transaction-badge ${
            transaction.type ===
            "income"

              ? "income-badge"

              : "expense-badge"
          }`}
        >

          {transaction.type ===
          "income"

            ? "↑"

            : "↓"}

        </div>

        <div>

          <h3>
            {transaction.title}
          </h3>

          <p>
            {
              transaction.category
            }
          </p>

        </div>

      </div>

      <div className="transaction-right">

        <h2
          className={
            transaction.type ===
            "income"

              ? "income-text"

              : "expense-text"
          }
        >

          ₹ {transaction.amount}

        </h2>

        <span>
          {transaction.date}
        </span>

        <button
          onClick={handleDelete}
          className="delete-btn"
        >

          <Trash2 size={18} />

        </button>

      </div>

    </div>

  );

};

export default TransactionCard;