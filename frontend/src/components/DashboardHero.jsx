const DashboardHero = ({
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

  const user =
    JSON.parse(
      localStorage.getItem(
        "user"
      )
    );

  return (

    <div className="hero-section">

      <div className="hero-left">

        <h1>

          Welcome back,
          {" "}
          {user?.username || "User"} 👋

        </h1>

        <p>
          Track your finances smartly
          and manage your money like
          a pro.
        </p>

      </div>

      <div className="hero-right">

        <div className="hero-mini-card">

          <span>
            Balance
          </span>

          <h2>
            ₹ {balance}
          </h2>

        </div>

        <div className="hero-mini-card">

          <span>
            Income
          </span>

          <h2>
            ₹ {income}
          </h2>

        </div>

        <div className="hero-mini-card">

          <span>
            Expense
          </span>

          <h2>
            ₹ {expense}
          </h2>

        </div>

      </div>

    </div>

  );

};

export default DashboardHero;