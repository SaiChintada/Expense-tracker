const FinancialHealthCard = ({
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
        )

      : 0;

  let score = 40;

  let status =
    "Needs Improvement";

  if (savingsRate >= 50) {

    score = 100;

    status =
      "Excellent";

  } else if (
    savingsRate >= 30
  ) {

    score = 80;

    status =
      "Very Good";

  } else if (
    savingsRate >= 10
  ) {

    score = 60;

    status =
      "Good";
  }

  return (

    <div className="health-card">

      <h2>

        Financial Health

      </h2>

      <div className="health-score">

        {score}

      </div>

      <h3>

        {status}

      </h3>

      <p>

        Based on your
        savings rate

      </p>

    </div>

  );
};

export default FinancialHealthCard;