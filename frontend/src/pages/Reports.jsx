import Layout from "../components/Layout";

const Reports = ({
  transactions,
}) => {

  const income =
    transactions
      .filter(
        (t) =>
          t.type ===
          "income"
      )
      .reduce(
        (sum, t) =>
          sum +
          Number(
            t.amount
          ),
        0
      );

  const expenses =
    transactions
      .filter(
        (t) =>
          t.type ===
          "expense"
      )
      .reduce(
        (sum, t) =>
          sum +
          Number(
            t.amount
          ),
        0
      );

  const savings =
    income - expenses;

  const categories = {};

  transactions
    .filter(
      (t) =>
        t.type ===
        "expense"
    )
    .forEach((t) => {

      categories[
        t.category
      ] =
        (categories[
          t.category
        ] || 0) +
        Number(
          t.amount
        );
    });

  const topCategory =
    Object.keys(
      categories
    ).length
      ? Object.keys(
          categories
        ).reduce(
          (a, b) =>
            categories[a] >
            categories[b]
              ? a
              : b
        )
      : "N/A";

  return (

    <Layout>

      <div className="reports-page">

        <h1>
          Monthly Report
        </h1>

        <div className="reports-grid">

          <div className="report-card">

            <h3>
              Income
            </h3>

            <h2>
              ₹ {income}
            </h2>

          </div>

          <div className="report-card">

            <h3>
              Expenses
            </h3>

            <h2>
              ₹ {expenses}
            </h2>

          </div>

          <div className="report-card">

            <h3>
              Savings
            </h3>

            <h2>
              ₹ {savings}
            </h2>

          </div>

          <div className="report-card">

            <h3>
              Top Category
            </h3>

            <h2>
              {topCategory}
            </h2>

          </div>

          <div className="report-card">

            <h3>
              Transactions
            </h3>

            <h2>
              {
                transactions.length
              }
            </h2>

          </div>

        </div>

      </div>

    </Layout>
  );
};

export default Reports;