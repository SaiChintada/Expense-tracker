const AIInsights = ({
  transactions,
}) => {

  const income =
    transactions

      .filter(
        (t) =>
          t.type === "income"
      )

      .reduce(
        (acc, item) =>
          acc + item.amount,
        0
      );

  const expense =
    transactions

      .filter(
        (t) =>
          t.type === "expense"
      )

      .reduce(
        (acc, item) =>
          acc + item.amount,
        0
      );

  const savings =
    income - expense;

  return (

    <div className="ai-card">

      <h2>
        AI Financial Insights
      </h2>

      <div className="ai-insights-grid">

        <div className="ai-box">

          <h3>
            Savings
          </h3>

          <p>

            {savings > 0
              ? `You saved ₹ ${savings} this month`
              : "Your expenses exceeded income"}

          </p>

        </div>

        <div className="ai-box">

          <h3>
            Expense Health
          </h3>

          <p>

            {expense > income * 0.7
              ? "High spending detected"
              : "Spending looks balanced"}

          </p>

        </div>

        <div className="ai-box">

          <h3>
            Recommendation
          </h3>

          <p>

            Try maintaining at least
            20% monthly savings.

          </p>

        </div>

      </div>

    </div>
  );
};

export default AIInsights;