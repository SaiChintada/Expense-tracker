import {

  ArrowDownCircle,

  ArrowUpCircle,

} from "lucide-react";

const RecentActivity = ({
  transactions,
}) => {

  const recentTransactions =
    [...transactions]

      .reverse()

      .slice(0, 5);

  return (

    <div className="recent-card">

      <div className="recent-header">

        <h2>
          Recent Activity
        </h2>

        <span>
          Latest Transactions
        </span>

      </div>

      <div className="recent-list">

        {recentTransactions.length > 0 ? (

          recentTransactions.map(
            (item) => (

              <div
                key={item.id}
                className="recent-item"
              >

                <div className="recent-left">

                  <div
                    className={`recent-icon ${
                      item.type ===
                      "income"

                        ? "income-bg"

                        : "expense-bg"
                    }`}
                  >

                    {item.type ===
                    "income" ? (

                      <ArrowUpCircle
                        size={22}
                      />

                    ) : (

                      <ArrowDownCircle
                        size={22}
                      />

                    )}

                  </div>

                  <div>

                    <h3>
                      {item.title}
                    </h3>

                    <p>
                      {
                        item.category
                      }
                    </p>

                  </div>

                </div>

                <div className="recent-right">

                  <h4
                    className={
                      item.type ===
                      "income"

                        ? "income-text"

                        : "expense-text"
                    }
                  >

                    {item.type ===
                    "income"

                      ? "+"

                      : "-"}

                    ₹ {item.amount}

                  </h4>

                  <span>
                    {item.date}
                  </span>

                </div>

              </div>

            )
          )

        ) : (

          <p className="no-transactions">

            No recent transactions

          </p>

        )}

      </div>

    </div>

  );

};

export default RecentActivity;