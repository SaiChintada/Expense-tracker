import Layout from "../components/Layout";
import { useState } from "react";

const Reports = ({
transactions,
}) => {

const [selectedMonth, setSelectedMonth] =
useState(
new Date().getMonth()
);

const months = [

"January",
"February",
"March",
"April",
"May",
"June",

"July",
"August",
"September",
"October",
"November",
"December",

];

const filteredTransactions =
transactions.filter((t) => {

  const date =
    new Date(t.date);

  return (
    date.getMonth() ===
    selectedMonth
  );

});

const income =
filteredTransactions

  .filter(
    (t) =>
      t.type === "income"
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
filteredTransactions

  .filter(
    (t) =>
      t.type === "expense"
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

filteredTransactions

.filter(
  (t) =>
    t.type === "expense"
)

.forEach((t) => {

  categories[
    t.category
  ] =

    (
      categories[
        t.category
      ] || 0
    ) +

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

const highestExpense =

filteredTransactions

  .filter(
    (t) =>
      t.type === "expense"
  )

  .sort(
    (a, b) =>
      b.amount -
      a.amount
  )[0];

const savingsRate =

income > 0

  ? (
      (
        savings /
        income
      ) *
      100
    ).toFixed(1)

  : 0;

const monthStats =

months.map(
  (
    month,
    index
  ) => {

    const monthIncome =

      transactions

        .filter(
          (t) =>
            new Date(
              t.date
            ).getMonth() ===
              index &&
            t.type ===
              "income"
        )

        .reduce(
          (
            acc,
            item
          ) =>
            acc +
            item.amount,
          0
        );

    const monthExpense =

      transactions

        .filter(
          (t) =>
            new Date(
              t.date
            ).getMonth() ===
              index &&
            t.type ===
              "expense"
        )

        .reduce(
          (
            acc,
            item
          ) =>
            acc +
            item.amount,
          0
        );

    return {

      month,

      savings:
        monthIncome -
        monthExpense,

    };
  }
);


const bestMonth =

monthStats.sort(
  (a, b) =>
    b.savings -
    a.savings
)[0];

return (

<Layout>

  <div className="reports-page">

    <h1>
      Reports
    </h1>

    <div className="report-filter">

      <select

        value={
          selectedMonth
        }

        onChange={(e) =>
          setSelectedMonth(
            Number(
              e.target.value
            )
          )
        }

      >

        {months.map(
          (
            month,
            index
          ) => (

            <option
              key={index}
              value={index}
            >

              {month}

            </option>

          )
        )}

      </select>

    </div>

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
          Transactions
        </h3>

        <h2>
          {
            filteredTransactions.length
          }
        </h2>

      </div>

    </div>

    <div className="reports-grid">

      <div className="report-card">

        <h3>
          🏆 Best Month
        </h3>

        <h2>
          {bestMonth.month}
        </h2>

        <p>
          Savings:
          ₹
          {
            bestMonth.savings
          }
        </p>

      </div>

      <div className="report-card">

        <h3>
          💡 Insights
        </h3>

        <p>
          Top Category:
          {topCategory}
        </p>

        <p>
          Highest Expense:
          {
            highestExpense
              ?.title ||
            "N/A"
          }
        </p>

        <p>
          Savings Rate:
          {savingsRate}%
        </p>

      </div>

    </div>

  </div>

</Layout>

);
};

export default Reports;
