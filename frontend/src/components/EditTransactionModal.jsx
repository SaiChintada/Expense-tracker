import { useState } from "react";
import API from "../services/api";

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

  const handleUpdate = async (
    e
  ) => {
    e.preventDefault();

    try {
      await API.put(
        `/transactions/${transaction.id}`,
        formData
      );

      fetchTransactions();

      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-[#1B2333] w-full max-w-lg rounded-2xl p-6">
        
        <h2 className="text-white text-2xl font-bold mb-6">
          Edit Transaction
        </h2>

        <form
          onSubmit={handleUpdate}
          className="space-y-4"
        >
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={
              handleChange
            }
            className="w-full p-3 rounded-lg bg-[#111827] text-white outline-none"
          />

          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={
              handleChange
            }
            className="w-full p-3 rounded-lg bg-[#111827] text-white outline-none"
          />

          <input
            type="text"
            name="category"
            value={
              formData.category
            }
            onChange={
              handleChange
            }
            className="w-full p-3 rounded-lg bg-[#111827] text-white outline-none"
          />

          <select
            name="type"
            value={formData.type}
            onChange={
              handleChange
            }
            className="w-full p-3 rounded-lg bg-[#111827] text-white outline-none"
          >
            <option value="income">
              Income
            </option>

            <option value="expense">
              Expense
            </option>
          </select>

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={
              handleChange
            }
            className="w-full p-3 rounded-lg bg-[#111827] text-white outline-none"
          />

          <div className="flex gap-4">
            
            <button
              type="submit"
              className="flex-1 bg-violet-600 hover:bg-violet-700 p-3 rounded-lg text-white font-semibold"
            >
              Update
            </button>

            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-700 hover:bg-gray-600 p-3 rounded-lg text-white font-semibold"
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