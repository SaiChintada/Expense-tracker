import { useState } from "react";

import toast from "react-hot-toast";

import API from "../services/api";

const AddTransaction = ({
  fetchTransactions,
}) => {

  const [formData,
    setFormData] =
      useState({

        title: "",

        amount: "",

        category: "",

        type: "expense",

        date: "",
      });

  const handleChange = (
    e
  ) => {

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

        const token =
          localStorage.getItem(
            "token"
          );

        await API.post(

          "/transactions/",

          {

            ...formData,

            amount:
              parseFloat(
                formData.amount
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
          "Transaction added successfully"
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

        console.log(error);

        toast.error(
          "Failed to add transaction"
        );
      }
    };

  return (

    <div className="add-transaction-card">

      <h2>
        Add Transaction
      </h2>

      <form
        onSubmit={
          handleSubmit
        }
        className="transaction-form"
      >

        <input

          type="text"

          name="title"

          placeholder="Title"

          value={
            formData.title
          }

          onChange={
            handleChange
          }

          required
        />

        <input

          type="number"

          name="amount"

          placeholder="Amount"

          value={
            formData.amount
          }

          onChange={
            handleChange
          }

          required
        />

        <input

          type="text"

          name="category"

          placeholder="Category"

          value={
            formData.category
          }

          onChange={
            handleChange
          }

          required
        />

        <input

          type="date"

          name="date"

          value={
            formData.date
          }

          onChange={
            handleChange
          }

          required
        />

        <select

          name="type"

          value={
            formData.type
          }

          onChange={
            handleChange
          }

        >

          <option value="expense">
            Expense
          </option>

          <option value="income">
            Income
          </option>

        </select>

        <button type="submit">

          Add Transaction

        </button>

      </form>

    </div>
  );
};

export default AddTransaction;