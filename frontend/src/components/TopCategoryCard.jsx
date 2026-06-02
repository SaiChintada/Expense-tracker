const TopCategoryCard = ({
  transactions,
}) => {

  const expenses =
    transactions.filter(
      (t) =>
        t.type === "expense"
    );

  const categoryTotals = {};

  expenses.forEach((item) => {

    categoryTotals[
      item.category
    ] =

      (categoryTotals[
        item.category
      ] || 0)

      + item.amount;
  });

  const categories =
    Object.entries(
      categoryTotals
    );

  if (
    categories.length === 0
  ) {

    return null;
  }

  const topCategory =
    categories.reduce(
      (max, current) =>

        current[1] > max[1]
          ? current
          : max
    );

  const totalExpense =
    expenses.reduce(
      (acc, item) =>
        acc + item.amount,
      0
    );

  const percentage =

    (
      (topCategory[1] /
        totalExpense) *
      100
    ).toFixed(1);

  return (

    <div className="top-category-card">

      <h2>
        Top Spending Category
      </h2>

      <h1>
        {topCategory[0]}
      </h1>

      <h3>
        ₹ {topCategory[1]}
      </h3>

      <p>

        {percentage}% of all expenses

      </p>

    </div>
  );
};

export default TopCategoryCard;