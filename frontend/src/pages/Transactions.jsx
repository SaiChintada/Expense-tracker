import {
  useState,
} from "react";

import Layout from "../components/Layout";

import TransactionCard from "../components/TransactionCard";

const Transactions = ({
  transactions,
  fetchTransactions,
}) => {

  const [search, setSearch] =
    useState("");

  const [filterType, setFilterType] =
    useState("all");

  const filteredTransactions =
    transactions.filter((t) => {

      const matchesSearch =
        t.title
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchesType =
        filterType === "all"
          ? true
          : t.type ===
            filterType;

      return (
        matchesSearch &&
        matchesType
      );
    });

  return (

    <Layout>

      <div className="transactions-page">

        <div className="transactions-header">

          <div>

            <h1>
              Transactions
            </h1>

            <p>
              Manage your financial activity
            </p>

          </div>

        </div>

        <div className="filter-bar">

          <input
            type="text"
            placeholder="Search transactions..."
            value={search}
            onChange={(e)=>
              setSearch(
                e.target.value
              )
            }
          />

          <select
            value={filterType}
            onChange={(e)=>
              setFilterType(
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

        </div>

        <div className="transactions-grid">

          {filteredTransactions
            .length > 0 ? (

            filteredTransactions.map(
              (transaction) => (

                <TransactionCard
                  key={
                    transaction.id
                  }
                  transaction={
                    transaction
                  }
                  fetchTransactions={
                    fetchTransactions
                  }
                />

              )
            )

          ) : (

            <div className="empty-state">

              <h2>
                No Transactions Found
              </h2>

              <p>
                Try adjusting filters
              </p>

            </div>

          )}

        </div>

      </div>

    </Layout>

  );

};

export default Transactions;