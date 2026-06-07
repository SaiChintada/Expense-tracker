import {
  ArrowDownCircle,
  ArrowUpCircle,
} from "lucide-react";

import { motion } from "framer-motion";
import { useState } from "react";

const RecentActivity = ({
  transactions,
}) => {

  const [filter, setFilter] =
    useState("all");

  const recentTransactions =
    [...transactions]
      .reverse()
      .slice(0, 5);

  const filteredTransactions =
    filter === "all"
      ? recentTransactions
      : recentTransactions.filter(
          (item) =>
            item.type === filter
        );

  return (

    <div className="recent-card">

      <div className="recent-header">

        <h2>
          Recent Activity
        </h2>

        <span>
          Latest Transactions
        </span>

      </div>

      {/* Filter Buttons */}

      <div className="activity-filters">

        <button
          className={
            filter === "all"
              ? "active-filter"
              : ""
          }
          onClick={() =>
            setFilter("all")
          }
        >
          All (
          {
            recentTransactions.length
          }
          )
        </button>

        <button
          className={
            filter === "income"
              ? "active-filter"
              : ""
          }
          onClick={() =>
            setFilter("income")
          }
        >
          Income (
          {
            recentTransactions.filter(
              (t) =>
                t.type ===
                "income"
            ).length
          }
          )
        </button>

        <button
          className={
            filter === "expense"
              ? "active-filter"
              : ""
          }
          onClick={() =>
            setFilter("expense")
          }
        >
          Expense (
          {
            recentTransactions.filter(
              (t) =>
                t.type ===
                "expense"
            ).length
          }
          )
        </button>

      </div>

      <div className="recent-list">

        {filteredTransactions.length > 0 ? (

          filteredTransactions.map(
            (item) => (

              <motion.div

                key={item.id}

                initial={{
                  opacity: 0,
                  y: 10,
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  duration: 0.35,
                  ease: [
                    0.22,
                    1,
                    0.36,
                    1,
                  ],
                }}

                whileHover={{
                  y: -3,
                }}

                className="recent-item"
              >

                <div className="recent-left">

                  <div
                    className={`recent-icon ${
                      item.type ===
                      "income"
                        ? "income-bg"
                        : "expense-bg"
                    }`}
                  >

                    {item.type ===
                    "income" ? (

                      <ArrowUpCircle
                        size={22}
                      />

                    ) : (

                      <ArrowDownCircle
                        size={22}
                      />

                    )}

                  </div>

                  <div>

                    <h3>
                      {item.title}
                    </h3>

                    <p>
                      {item.category}
                    </p>

                  </div>

                </div>

                <div className="recent-right">

                  <h4
                    className={
                      item.type ===
                      "income"
                        ? "income-text"
                        : "expense-text"
                    }
                  >

                    {item.type ===
                    "income"
                      ? "+"
                      : "-"}

                    ₹ {item.amount}

                  </h4>

                  <span>
                    {item.date}
                  </span>

                </div>

              </motion.div>

            )
          )

        ) : (

          <p className="no-transactions">

            No recent transactions

          </p>

        )}

      </div>

    </div>

  );

};

export default RecentActivity;