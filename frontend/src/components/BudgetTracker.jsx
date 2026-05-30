const BudgetTracker = ({
  transactions,
}) => {

  const budget =
    Number(
      localStorage.getItem(
        "monthlyBudget"
      )
    ) || 20000;

  const expenses =
    transactions
      .filter(
        (t) =>
          t.type ===
          "expense"
      )
      .reduce(
        (acc, curr) =>
          acc +
          Number(
            curr.amount
          ),
        0
      );

  const percentage =
    Math.min(
      (expenses /
        budget) *
        100,
      100
    );

  const remaining =
    budget - expenses;

  return (

    <div className="budget-card">

      <h2>
        Monthly Budget
      </h2>

      <h1>
        ₹ {budget}
      </h1>

      <div className="budget-bar">

        <div
          className="budget-fill"
          style={{
            width:
              `${percentage}%`,
          }}
        />

      </div>

      <div className="budget-stats">

        <p>
          Spent:
          ₹ {expenses}
        </p>

        <p>
          Remaining:
          ₹ {remaining}
        </p>

      </div>

    </div>

  );
};

export default BudgetTracker;