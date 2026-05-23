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

  const handleSubmit = async (e) => {

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
        "Failed to Add"
      );

    }

  };

  return (

    <div className="form-card">

      <h2>
        Add Transaction
      </h2>

      <form
        className="transaction-form"
        onSubmit={handleSubmit}
      >

        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          required
        />

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

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Add Transaction
        </button>

      </form>

    </div>

  );
};

export default AddTransaction;