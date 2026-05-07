import { useState, useEffect } from "react";

function Form({ addItem }) {
  const [form, setForm] = useState({
    title: "",
    note: "",
    amount: "",
    category: "",
    type: "Expense"
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem({
      ...form,
      amount: parseFloat(form.amount)
    });

    setForm({
      title: "",
      note: "",
      amount: "",
      category: "",
      type: "Expense"
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required />
      <input name="note" placeholder="Note" value={form.note} onChange={handleChange} />
      <input name="amount" type="number" placeholder="Amount" value={form.amount} onChange={handleChange} required />

      <select name="category" value={form.category} onChange={handleChange}>
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Shopping">Shopping</option>
        <option value="Salary">Salary</option>
      </select>

      <select name="type" value={form.type} onChange={handleChange}>
        <option value="Expense">Expense</option>
        <option value="Income">Income</option>
      </select>

      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default Form;