import { useState } from "react";

import Layout from "../components/Layout";

import TransactionCard from "../components/TransactionCard";

import ExportPDF from "../components/ExportPDF";

const Transactions = ({
  transactions,
  fetchTransactions,
}) => {

  const [search,
    setSearch] =
      useState("");

  const [filter,
    setFilter] =
      useState("all");

  const filteredTransactions =
    transactions.filter((t) => {

      const matchesSearch =
        t.title
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchesFilter =

        filter === "all"
          ? true
          : t.type === filter;

      return (
        matchesSearch &&
        matchesFilter
      );
    });

  return (

    <Layout>

      <div className="transactions-page">

        <div className="transactions-top">

          <div>

            <h1>
              Transactions
            </h1>

            <p>
              Manage and track your activity
            </p>

          </div>

        </div>

        <div className="transaction-toolbar">

          <input
            type="text"
            placeholder="Search transactions..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
          />

          <select
            value={filter}
            onChange={(e) =>
              setFilter(
                e.target.value
              )
            }
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

          <ExportPDF
            transactions={
            filteredTransactions
           }
          />

        </div>

       <div className="transactions-list">

  {filteredTransactions.length === 0 ? (

    <div className="empty-state">

      <h2>
        No Transactions Found
      </h2>

      <p>
        Try adding transactions
        or changing filters
      </p>

    </div>

  ) : (

    filteredTransactions.map(
      (transaction) => (

        <TransactionCard
          key={transaction.id}
          transaction={
            transaction
          }
          fetchTransactions={
            fetchTransactions
          }
        />
      )
    )

  )}

</div>

      </div>

    </Layout>
  );
};

export default Transactions;