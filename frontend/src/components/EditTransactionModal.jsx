import { useState } from "react";

import API from "../services/api";

import toast from "react-hot-toast";

const EditTransactionModal = ({

  transaction,

  onClose,

  fetchTransactions,

}) => {

  const [formData, setFormData] =
    useState({

      title: transaction.title,

      amount: transaction.amount,

      category:
        transaction.category,

      type: transaction.type,

      date: transaction.date,

    });

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value,

    });

  };

  const handleUpdate =
    async (e) => {

      e.preventDefault();

      try {

        await API.put(

          `/transactions/${transaction.id}`,

          formData

        );

        toast.success(
          "Transaction Updated"
        );

        fetchTransactions();

        onClose();

      } catch (error) {

        toast.error(
          "Update Failed"
        );

      }

    };

  return (

    <div className="modal-overlay">

      <div className="modal-card">

        <div className="modal-header">

          <h2>
            Edit Transaction
          </h2>

          <button
            className="close-btn"
            onClick={onClose}
          >

            ✕

          </button>

        </div>

        <form
          onSubmit={handleUpdate}
          className="modal-form"
        >

          <div className="input-group">

            <label>
              Title
            </label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />

          </div>

          <div className="input-group">

            <label>
              Amount
            </label>

            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              required
            />

          </div>

          <div className="input-group">

            <label>
              Category
            </label>

            <input
              type="text"
              name="category"
              value={
                formData.category
              }
              onChange={handleChange}
              required
            />

          </div>

          <div className="input-group">

            <label>
              Type
            </label>

            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
            >

              <option value="income">
                Income
              </option>

              <option value="expense">
                Expense
              </option>

            </select>

          </div>

          <div className="input-group">

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

          <div className="modal-buttons">

            <button
              type="submit"
              className="save-btn"
            >

              Save Changes

            </button>

            <button
              type="button"
              className="cancel-btn"
              onClick={onClose}
            >

              Cancel

            </button>

          </div>

        </form>

      </div>

    </div>

  );

};

export default EditTransactionModal;