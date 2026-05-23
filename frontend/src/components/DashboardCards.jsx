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

  return (

    <div className="cards-grid">

      <div className="card">

        <h3>
          Total Balance
        </h3>

        <h1>
          ₹ {balance}
        </h1>

      </div>

      <div className="card">

        <h3>
          Total Income
        </h3>

        <h1>
          ₹ {income}
        </h1>

      </div>

      <div className="card">

        <h3>
          Total Expense
        </h3>

        <h1>
          ₹ {expense}
        </h1>

      </div>

    </div>

  );
};

export default DashboardCards;