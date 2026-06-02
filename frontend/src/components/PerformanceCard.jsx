const PerformanceCard = ({
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

  const savingsRate =
    income > 0
      ? (
          (savings / income) *
          100
        ).toFixed(0)
      : 0;

  return (

    <div className="performance-card">

      <h2>
        Monthly Performance
      </h2>

      <div className="performance-row">

        <span>Income</span>

        <strong>
          ₹ {income}
        </strong>

      </div>

      <div className="performance-row">

        <span>Expense</span>

        <strong>
          ₹ {expense}
        </strong>

      </div>

      <div className="performance-row">

        <span>Savings</span>

        <strong>
          ₹ {savings}
        </strong>

      </div>

      <div className="progress-container">

        <div
          className="progress-bar"
          style={{
            width:
              `${savingsRate}%`,
          }}
        />

      </div>

      <p className="savings-rate">

        Savings Rate:
        {savingsRate}%

      </p>

    </div>

  );
};

export default PerformanceCard;