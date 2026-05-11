import { useState, useMemo } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import API from "../services/api";

const TransactionList = ({
  transactions = [],
  fetchTransactions,
}) => {
  const [editingId, setEditingId] = useState(null);
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] =
  useState("all");
  const [filterCategory, setFilterCategory] =
  useState("all");

  const [editData, setEditData] = useState({
    title: "",
    amount: "",
    category: "",
    type: "expense",
    date: "",
  });

  // DELETE
  const handleDelete = async (id) => {
    try {
      await API.delete(`/transactions/${id}`);

      fetchTransactions();
    } catch (error) {
      console.log(error);
    }
  };

  // EDIT CLICK
  const handleEditClick = (transaction) => {
    setEditingId(transaction.id);

    setEditData({
      title: transaction.title,
      amount: transaction.amount,
      category: transaction.category,
      type: transaction.type,
      date: transaction.date,
    });
  };

  // UPDATE
  const handleUpdate = async () => {
    try {
      await API.put(
        `/transactions/${editingId}`,
        editData
      );

      setEditingId(null);

      fetchTransactions();
    } catch (error) {
      console.log(error);
    }
  };

  const categories = [
  ...new Set(
    transactions.map((t) => t.category)
  ),
];

const filteredTransactions = useMemo(() => {
  return transactions.filter((transaction) => {
    const matchesSearch =
      transaction.title
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesType =
      filterType === "all" ||
      transaction.type === filterType;

    const matchesCategory =
      filterCategory === "all" ||
      transaction.category === filterCategory;

    return (
      matchesSearch &&
      matchesType &&
      matchesCategory
    );
  });
}, [
  transactions,
  search,
  filterType,
  filterCategory,
]);

  return (
    <div className="bg-[#1B2333] p-6 rounded-2xl shadow-lg mt-6">
      <h2 className="text-white text-2xl font-semibold mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
  {/* SEARCH */}
  <input
    type="text"
    placeholder="Search transaction..."
    value={search}
    onChange={(e) =>
      setSearch(e.target.value)
    }
    className="p-3 rounded-xl bg-[#111827] text-white outline-none"
  />

  {/* TYPE FILTER */}
  <select
    value={filterType}
    onChange={(e) =>
      setFilterType(e.target.value)
    }
    className="p-3 rounded-xl bg-[#111827] text-white outline-none"
  >
    <option value="all">All Types</option>

    <option value="income">
      Income
    </option>

    <option value="expense">
      Expense
    </option>
  </select>

  {/* CATEGORY FILTER */}
  <select
    value={filterCategory}
    onChange={(e) =>
      setFilterCategory(e.target.value)
    }
    className="p-3 rounded-xl bg-[#111827] text-white outline-none"
  >
    <option value="all">
      All Categories
    </option>

    {categories.map((category, index) => (
      <option key={index} value={category}>
        {category}
      </option>
    ))}
  </select>
</div>
        Recent Transactions
      </h2>

      {transactions.length === 0 ? (
        <p className="text-gray-400">
          No transactions found.
        </p>
      ) : (
        <div className="space-y-4">
          {filteredTransactions.map((transaction) => (
            <div
              key={transaction.id}
              className="bg-[#111827] p-4 rounded-xl border border-gray-700"
            >
              {editingId === transaction.id ? (
                // EDIT MODE
                <div className="space-y-4">
                  <input
                    type="text"
                    value={editData.title}
                    onChange={(e) =>
                      setEditData({
                        ...editData,
                        title: e.target.value,
                      })
                    }
                    className="w-full p-3 rounded-lg bg-[#1B2333] text-white"
                    placeholder="Title"
                  />

                  <input
                    type="number"
                    value={editData.amount}
                    onChange={(e) =>
                      setEditData({
                        ...editData,
                        amount: e.target.value,
                      })
                    }
                    className="w-full p-3 rounded-lg bg-[#1B2333] text-white"
                    placeholder="Amount"
                  />

                  <input
                    type="text"
                    value={editData.category}
                    onChange={(e) =>
                      setEditData({
                        ...editData,
                        category: e.target.value,
                      })
                    }
                    className="w-full p-3 rounded-lg bg-[#1B2333] text-white"
                    placeholder="Category"
                  />

                  <select
                    value={editData.type}
                    onChange={(e) =>
                      setEditData({
                        ...editData,
                        type: e.target.value,
                      })
                    }
                    className="w-full p-3 rounded-lg bg-[#1B2333] text-white"
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
                    value={editData.date}
                    onChange={(e) =>
                      setEditData({
                        ...editData,
                        date: e.target.value,
                      })
                    }
                    className="w-full p-3 rounded-lg bg-[#1B2333] text-white"
                  />

                  <div className="flex gap-3">
                    <button
                      onClick={handleUpdate}
                      className="bg-violet-600 hover:bg-violet-700 px-5 py-2 rounded-lg text-white"
                    >
                      Save
                    </button>

                    <button
                      onClick={() =>
                        setEditingId(null)
                      }
                      className="bg-gray-600 hover:bg-gray-700 px-5 py-2 rounded-lg text-white"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                // NORMAL MODE
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-white font-semibold text-lg">
                      {transaction.title}
                    </h3>

                    <p className="text-gray-400 text-sm">
                      {transaction.category}
                    </p>
                  </div>

                  <div className="mt-4 sm:mt-0 flex items-center gap-4">
                    <div className="text-right">
                      <p
                        className={`text-lg font-bold ${
                          transaction.type ===
                          "income"
                            ? "text-green-400"
                            : "text-red-400"
                        }`}
                      >
                        {transaction.type ===
                        "income"
                          ? "+"
                          : "-"}
                        ₹{transaction.amount}
                      </p>

                      <p className="text-gray-500 text-sm">
                        {transaction.date}
                      </p>
                    </div>

                    <button
                      onClick={() =>
                        handleEditClick(transaction)
                      }
                      className="text-blue-400 hover:text-blue-500"
                    >
                      <FaEdit />
                    </button>

                    <button
                      onClick={() =>
                        handleDelete(transaction.id)
                      }
                      className="text-red-400 hover:text-red-500"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TransactionList;