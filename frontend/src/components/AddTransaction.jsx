import { useState } from "react";
import API from "../services/api";

const AddTransaction = ({
  fetchTransactions,
}) => {
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    category: "",
    type: "expense",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/transactions", {
        title: formData.title,
        amount: Number(formData.amount),
        category: formData.category,
        type: formData.type,
        date: formData.date,
      });

      // RESET FORM
      setFormData({
        title: "",
        amount: "",
        category: "",
        type: "expense",
        date: "",
      });

      // REFRESH DATA
      fetchTransactions();

      alert("Transaction Added");
    } catch (error) {
      console.log(error);

      alert("Failed to add transaction");
    }
  };

  return (
    <div className="bg-[#1B2333] p-6 rounded-2xl shadow-lg mt-6">
      <h2 className="text-white text-2xl font-semibold mb-6">
        Add Transaction
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
          className="p-3 rounded-lg bg-[#111827] text-white outline-none"
        />

        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleChange}
          required
          className="p-3 rounded-lg bg-[#111827] text-white outline-none"
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          required
          className="p-3 rounded-lg bg-[#111827] text-white outline-none"
        />

        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="p-3 rounded-lg bg-[#111827] text-white outline-none"
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
          className="p-3 rounded-lg bg-[#111827] text-white outline-none"
        />

        <button
          type="submit"
          className="bg-violet-600 hover:bg-violet-700 text-white font-semibold p-3 rounded-lg md:col-span-2"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;