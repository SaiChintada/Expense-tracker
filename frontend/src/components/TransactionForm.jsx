import { useState } from "react";
import { useTransactions } from "../context/TransactionContext";

function TransactionForm() {

  const { addTransaction } = useTransactions();

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

    await addTransaction({
  ...formData,
  amount: Number(formData.amount),
  });

    setFormData({
      title: "",
      amount: "",
      category: "",
      type: "expense",
      date: "",
    });
  };

  return (
    <div className="bg-slate-900 p-5 rounded-2xl">

      <h2 className="text-2xl font-bold mb-4">
        Add Transaction
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >

        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-slate-800"
        />

        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-slate-800"
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-slate-800"
        />

        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-slate-800"
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
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-slate-800"
        />

        <button className="w-full bg-violet-500 p-3 rounded-lg hover:bg-violet-600">
          Add Transaction
        </button>

      </form>

    </div>
  );
}

export default TransactionForm;