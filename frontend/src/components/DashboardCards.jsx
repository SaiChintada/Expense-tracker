const DashboardCards = ({
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

  const balance =
    income - expense;

  const savings =
    balance > 0
      ? balance
      : 0;

  return (

    <div className="stats-grid">

      <div className="stats-card balance-card">

        <h3>
          Total Balance
        </h3>

        <h1>
          ₹ {balance}
        </h1>

      </div>

      <div className="stats-card income-card">

        <h3>
          Total Income
        </h3>

        <h1>
          ₹ {income}
        </h1>

      </div>

      <div className="stats-card expense-card">

        <h3>
          Total Expense
        </h3>

        <h1>
          ₹ {expense}
        </h1>

      </div>

      <div className="stats-card savings-card">

        <h3>
          Savings
        </h3>

        <h1>
          ₹ {savings}
        </h1>

      </div>

    </div>

  );
};

export default DashboardCards;