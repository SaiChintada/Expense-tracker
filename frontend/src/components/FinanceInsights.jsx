const FinanceInsights = ({
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

  const categories = {};

  transactions.forEach(
    (t) => {

      if (
        t.type === "expense"
      ) {

        if (
          !categories[
            t.category
          ]
        ) {

          categories[
            t.category
          ] = 0;

        }

        categories[
          t.category
        ] += t.amount;

      }

    }
  );

  const topCategory =
    Object.keys(
      categories
    ).reduce(

      (a, b) =>

        categories[a] >
        categories[b]

          ? a

          : b,

      Object.keys(
        categories
      )[0]
    );

  return (

    <div className="insights-card">

      <h2>
        AI Finance Insights
      </h2>

      <div className="insight-item">

        {income > expense ? (
          <p>
            ✅ Great job!
            Your income is higher
            than your expenses.
          </p>
        ) : (
          <p>
            ⚠️ Your expenses are
            higher than income.
          </p>
        )}

      </div>

      <div className="insight-item">

        <p>

          📊 Highest spending category:
          {" "}
          <strong>
            {topCategory || "N/A"}
          </strong>

        </p>

      </div>

      <div className="insight-item">

        <p>

          💰 Total Savings:
          {" "}
          <strong>
            ₹ {income - expense}
          </strong>

        </p>

      </div>

    </div>

  );

};

export default FinanceInsights;