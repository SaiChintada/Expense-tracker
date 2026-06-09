import { useEffect, useState } from "react";
import API from "../services/api";

const ProfileCard = ({
  transactions,
}) => {

  const [user, setUser] = useState(null);

  const totalTransactions =
  transactions.length;

const totalIncome =
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

const totalExpense =
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
  totalIncome -
  totalExpense;
  

  useEffect(() => {

    const fetchProfile = async () => {

      try {

        const token =
          localStorage.getItem("token");

        const res =
          await API.get(
            "/auth/profile",
            {
              headers: {
                Authorization:
                  `Bearer ${token}`,
              },
            }
          );

        setUser(res.data);

localStorage.setItem(
  "username",
  res.data.username
);

      }catch (err) {

  console.log(err);

  console.log(
    err.response?.data
  );

}
    };

    fetchProfile();

  }, []);

  if (!user) {

    return (
      <div className="settings-card">
        Loading...
      </div>
    );
  }

  return (

    

    <div className="settings-card profile-premium-card">

  <div className="profile-top">

    <div className="profile-avatar">

      {user.username
        ?.charAt(0)
        .toUpperCase()}

    </div>

    <div>

      <h2>
        {user.username}
      </h2>

      <p>
        {user.email}
      </p>

      <span className="profile-tag">

        ExpenseFlow Premium Dashboard User

      </span>

    </div>

  </div>

  <div className="profile-finance-grid">

    <div className="finance-stat">

      <span>
        Total Transactions
      </span>

      <h3>
        {totalTransactions}
      </h3>

    </div>

    <div className="finance-stat">

      <span>
        Total Income
      </span>

      <h3>
        ₹ {totalIncome}
      </h3>

    </div>

    <div className="finance-stat">

      <span>
        Total Expenses
      </span>

      <h3>
        ₹ {totalExpense}
      </h3>

    </div>

    <div className="finance-stat">

      <span>
        Current Balance
      </span>

      <h3>
        ₹ {balance}
      </h3>

    </div>

  </div>

</div>

  );
};

export default ProfileCard;