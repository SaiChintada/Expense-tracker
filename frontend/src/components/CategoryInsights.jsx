const CategoryInsights = ({
  transactions,
}) => {

  const expenses =
    transactions.filter(
      (t) =>
        t.type === "expense"
    );

  const categoryData = {};

  expenses.forEach((item) => {

    if (
      categoryData[
        item.category
      ]
    ) {

      categoryData[
        item.category
      ] += item.amount;

    } else {

      categoryData[
        item.category
      ] = item.amount;
    }
  });

  const totalExpense =
    expenses.reduce(
      (acc, item) =>
        acc + item.amount,
      0
    );

  return (

    <div className="category-section">

      <div className="category-header">

        <h2>
          Category Insights
        </h2>

        <p>
          Smart spending analysis
        </p>

      </div>

      <div className="category-grid">

        {Object.entries(
          categoryData
        ).map(
          ([category, amount]) => {

            const percentage =
              (
                (amount /
                  totalExpense) *
                100
              ).toFixed(1);

            return (

              <div
                className="category-card"
                key={category}
              >

                <div className="category-top">

                  <h3>
                    {category}
                  </h3>

                  <span>
                    {percentage}%
                  </span>

                </div>

                <h1>
                  ₹ {amount}
                </h1>

              <div className="category-progress-bar">

  <div
    className="category-progress-fill"
    style={{
      width: `${percentage}%`,
    }}
  ></div>

</div>

              </div>
            );
          }
        )}

      </div>

    </div>
  );
};

export default 