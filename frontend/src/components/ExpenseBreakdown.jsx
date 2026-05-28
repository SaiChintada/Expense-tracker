const ExpenseBreakdown = ({
  transactions,
}) => {

  const expenses =
    transactions.filter(
      (t) =>
        t.type === "expense"
    );

  const groupedExpenses =

    expenses.reduce(
      (acc, item) => {

        if (
          !acc[item.category]
        ) {

          acc[item.category] = 0;
        }

        acc[item.category] +=
          item.amount;

        return acc;

      },
      {}
    );

  const totalExpense =
    expenses.reduce(
      (acc, item) =>
        acc + item.amount,
      0
    );

  return (

    <div className="breakdown-card">

      <h2>
        Expense Breakdown
      </h2>

      <div className="breakdown-list">

        {Object.entries(
          groupedExpenses
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
                key={category}
                className="breakdown-item"
              >

                <div className="breakdown-top">

                  <h3>
                    {category}
                  </h3>

                  <span>

                    ₹ {amount}

                  </span>

                </div>

                <div className="progress-bar">

                  <div
                    className="progress-fill"
                    style={{
                      width:
                        `${percentage}%`
                    }}
                  >

                  </div>

                </div>

                <p>

                  {percentage}% of expenses

                </p>

              </div>
            );
          }
        )}

      </div>

    </div>
  );
};

export default ExpenseBreakdown;