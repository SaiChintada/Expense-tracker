import { useState } from "react";

import API from "../services/api";

import toast from "react-hot-toast";

const AddTransaction = ({
  fetchTransactions,
}) => {

  const [formData, setFormData] =
    useState({

      title: "",

      amount: "",

      category: "",

      type: "expense",

      date: "",

    });

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value,

    });

  };

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        await API.post(
          "/transactions",
          formData
        );

        toast.success(
          "Transaction Added"
        );

        setFormData({

          title: "",

          amount: "",

          category: "",

          type: "expense",

          date: "",

        });

        fetchTransactions();

      } catch (error) {

        toast.error(
          "Failed to add transaction"
        );

      }

    };

  return (

    <div className="add-transaction-card">

      <div className="add-transaction-header">

        <div>

          <h2>
            Add Transaction
          </h2>

          <p>
            Track your income and expenses
          </p>

        </div>

      </div>

      <form
        onSubmit={handleSubmit}
        className="premium-form"
      >

        <div className="premium-input-group">

          <label>
            Title
          </label>

          <input
            type="text"
            name="title"
            placeholder="Enter title"
            value={formData.title}
            onChange={handleChange}
            required
          />

        </div>

        <div className="premium-input-group">

          <label>
            Amount
          </label>

          <input
            type="number"
            name="amount"
            placeholder="Enter amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />

        </div>

        <div className="premium-input-group">

          <label>
            Category
          </label>

          <input
            type="text"
            name="category"
            placeholder="Food / Salary / Shopping"
            value={formData.category}
            onChange={handleChange}
            required
          />

        </div>

        <div className="premium-input-group">

          <label>
            Type
          </label>

          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
          >

            <option value="expense">
              Expense
            </option>

            <option value="income">
              Income
            </option>

          </select>

        </div>

        <div className="premium-input-group">

          <label>
            Date
          </label>

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />

        </div>

        <button
          type="submit"
          className="premium-submit-btn"
        >

          Add Transaction

        </button>

      </form>

    </div>

  );

};

export default AddTransaction;