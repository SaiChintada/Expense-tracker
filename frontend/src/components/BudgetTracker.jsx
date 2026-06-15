import React from "react";

const BudgetTracker = ({ transactions }) => {

  const budget =
    Number(
      localStorage.getItem("monthlyBudget")
    ) || 20000;

  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce(
      (acc, curr) =>
        acc + Number(curr.amount),
      0
    );

  const percentage = Math.min(
    (expenses / budget) * 100,
    100
  );

  const remaining = budget - expenses;

  return (

    <div className="budget-card">

      <h2>
        Monthly Budget
      </h2>

      <h1>
        ₹ {budget.toLocaleString()}
      </h1>

      <div className="budget-bar">

        <div
          className="budget-fill"
          style={{
            width: `${percentage}%`,
          }}
        />

      </div>

      <div className="budget-footer">

        <div>

          <p className="budget-label">
            Spent
          </p>

          <h4>
            ₹ {expenses.toLocaleString()}
          </h4>

        </div>

        <div>

          <p className="budget-label">
            Remaining
          </p>

          <h4
            className={
              remaining < 0
                ? "over-budget"
                : ""
            }
          >
            ₹ {remaining.toLocaleString()}
          </h4>

        </div>

      </div>

      {remaining < 0 && (

        <div className="budget-warning">

          ⚠️ Over Budget by ₹
          {Math.abs(
            remaining
          ).toLocaleString()}

        </div>

      )}

    </div>

  );

};

export default BudgetTracker;