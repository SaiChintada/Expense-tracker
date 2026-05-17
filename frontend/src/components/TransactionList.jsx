import { useState } from "react";

import { motion } from "framer-motion";

import {
  FaTrash,
  FaEdit,
} from "react-icons/fa";

import API from "../services/api";

import EditTransactionModal from "./EditTransactionModal";

const TransactionList = ({
  transactions = [],
  fetchTransactions,
}) => {
  const [search, setSearch] =
    useState("");

  const [filterType, setFilterType] =
    useState("all");

  const [
    selectedTransaction,
    setSelectedTransaction,
  ] = useState(null);

  // DELETE TRANSACTION
  const handleDelete = async (
    id
  ) => {
    try {
      await API.delete(
        `/transactions/${id}`
      );

      fetchTransactions();
    } catch (error) {
      console.log(error);
    }
  };

  // FILTER + SEARCH
  const filteredTransactions =
    transactions.filter(
      (transaction) => {
        const matchesSearch =
          transaction.title
            ?.toLowerCase()
            .includes(
              search.toLowerCase()
            );

        const matchesType =
          filterType === "all"
            ? true
            : transaction.type ===
              filterType;

        return (
          matchesSearch &&
          matchesType
        );
      }
    );

  return (
    <div className="bg-[#1B2333] p-6 rounded-2xl shadow-lg mt-6">
      
      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
        
        <h2 className="text-white text-2xl font-semibold">
          Recent Transactions
        </h2>

        <div className="flex gap-3 flex-col sm:flex-row">
          
          {/* SEARCH */}
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
            className="bg-[#111827] text-white px-4 py-2 rounded-lg outline-none"
          />

          {/* FILTER */}
          <select
            value={filterType}
            onChange={(e) =>
              setFilterType(
                e.target.value
              )
            }
            className="bg-[#111827] text-white px-4 py-2 rounded-lg outline-none"
          >
            <option value="all">
              All
            </option>

            <option value="income">
              Income
            </option>

            <option value="expense">
              Expense
            </option>
          </select>
        </div>
      </div>

      {/* EMPTY */}
      {filteredTransactions.length ===
      0 ? (
        <div className="text-center py-10">
          <p className="text-gray-400">
            No Transactions Found
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredTransactions.map(
            (
              transaction,
              index
            ) => (
              <motion.div
                key={
                  transaction.id
                }
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay:
                    index * 0.05,
                }}
                whileHover={{
                  scale: 1.01,
                }}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-[#111827] p-4 rounded-xl border border-gray-700"
              >
                
                {/* LEFT */}
                <div>
                  <h3 className="text-white font-semibold text-lg">
                    {
                      transaction.title
                    }
                  </h3>

                  <p className="text-gray-400 text-sm">
                    {
                      transaction.category
                    }
                  </p>
                </div>

                {/* RIGHT */}
                <div className="flex items-center gap-5 mt-4 sm:mt-0">
                  
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
                      ₹
                      {
                        transaction.amount
                      }
                    </p>

                    <p className="text-gray-500 text-sm">
                      {
                        transaction.date
                      }
                    </p>
                  </div>

                  {/* EDIT BUTTON */}
                  <button
                    onClick={() =>
                      setSelectedTransaction(
                        transaction
                      )
                    }
                    className="text-cyan-400 hover:text-cyan-500"
                  >
                    <FaEdit />
                  </button>

                  {/* DELETE BUTTON */}
                  <button
                    onClick={() =>
                      handleDelete(
                        transaction.id
                      )
                    }
                    className="text-red-400 hover:text-red-500"
                  >
                    <FaTrash />
                  </button>
                </div>
              </motion.div>
            )
          )}
        </div>
      )}

      {/* EDIT MODAL */}
      {selectedTransaction && (
        <EditTransactionModal
          transaction={
            selectedTransaction
          }
          onClose={() =>
            setSelectedTransaction(
              null
            )
          }
          fetchTransactions={
            fetchTransactions
          }
        />
      )}
    </div>
  );
};

export default TransactionList;