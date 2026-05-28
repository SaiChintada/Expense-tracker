import {
  Trash2,
  Pencil,
  Check,
  X,
} from "lucide-react";

import {
  useState,
} from "react";

import toast from "react-hot-toast";

import API from "../services/api";

const TransactionCard = ({
  transaction,
  fetchTransactions,
}) => {

  const [isEditing,
    setIsEditing] =
      useState(false);

  const [editData,
    setEditData] =
      useState({

        title:
          transaction.title,

        amount:
          transaction.amount,

        category:
          transaction.category,

        type:
          transaction.type,

        date:
          transaction.date,
      });

  const handleDelete =
    async () => {

      const confirmDelete =
        window.confirm(
          "Delete this transaction?"
        );

      if (!confirmDelete)
        return;

      try {

        const token =
          localStorage.getItem(
            "token"
          );

        await API.delete(

          `/transactions/${transaction.id}`,

          {

            headers: {

              Authorization:
                `Bearer ${token}`,
            },
          }
        );

        toast.success(
          "Transaction deleted"
        );

        fetchTransactions();

      } catch (error) {

        console.log(error);

        toast.error(
          "Delete failed"
        );
      }
    };

  const handleUpdate =
    async () => {

      try {

        const token =
          localStorage.getItem(
            "token"
          );

        await API.put(

          `/transactions/${transaction.id}`,

          {

            ...editData,

            amount:
              parseFloat(
                editData.amount
              ),
          },

          {

            headers: {

              Authorization:
                `Bearer ${token}`,
            },
          }
        );

        toast.success(
          "Transaction updated"
        );

        setIsEditing(false);

        fetchTransactions();

      } catch (error) {

        console.log(error);

        toast.error(
          "Update failed"
        );
      }
    };

  const handleChange = (
    e
  ) => {

    setEditData({

      ...editData,

      [e.target.name]:
        e.target.value,
    });
  };

  return (

    <div className="transaction-card">

      {isEditing ? (

        <div className="edit-transaction-form">

          <input
            type="text"
            name="title"
            value={
              editData.title
            }
            onChange={
              handleChange
            }
          />

          <input
            type="number"
            name="amount"
            value={
              editData.amount
            }
            onChange={
              handleChange
            }
          />

          <input
            type="text"
            name="category"
            value={
              editData.category
            }
            onChange={
              handleChange
            }
          />

          <input
            type="date"
            name="date"
            value={
              editData.date
            }
            onChange={
              handleChange
            }
          />

          <select
            name="type"
            value={
              editData.type
            }
            onChange={
              handleChange
            }
          >

            <option value="income">
              Income
            </option>

            <option value="expense">
              Expense
            </option>

          </select>

          <div className="edit-actions">

            <button
              onClick={
                handleUpdate
              }
              className="save-btn"
            >

              <Check size={18} />

            </button>

            <button
              onClick={() =>
                setIsEditing(
                  false
                )
              }
              className="cancel-btn"
            >

              <X size={18} />

            </button>

          </div>

        </div>

      ) : (

        <>

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

            <div className="transaction-actions">

              <button
                onClick={() =>
                  setIsEditing(
                    true
                  )
                }
                className="edit-btn"
              >

                <Pencil
                  size={18}
                />

              </button>

              <button
                onClick={
                  handleDelete
                }
                className="delete-btn"
              >

                <Trash2
                  size={18}
                />

              </button>

            </div>

          </div>

        </>

      )}

    </div>
  );
};

export default TransactionCard;