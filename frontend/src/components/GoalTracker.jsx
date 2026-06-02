import { useState, useEffect } from "react";

const GoalTracker = ({
  transactions,
}) => {

  const [goal, setGoal] =
    useState(
      localStorage.getItem(
        "savingsGoal"
      ) || 50000
    );

  useEffect(() => {

    localStorage.setItem(
      "savingsGoal",
      goal
    );

  }, [goal]);

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

  const progress =

    goal > 0

      ? Math.min(
          (
            (savings / goal) *
            100
          ).toFixed(0),
          100
        )

      : 0;

  return (

    <div className="goal-card">

      <h2>
        Savings Goal
      </h2>

      <input
        type="number"
        value={goal}
        onChange={(e) =>
          setGoal(
            e.target.value
          )
        }
        className="goal-input"
      />

      <div className="goal-stats">

        <h3>
          ₹ {savings}
        </h3>

        <span>
          of ₹ {goal}
        </span>

      </div>

      <div className="goal-progress">

        <div
          className="goal-fill"
          style={{
            width:
              `${progress}%`,
          }}
        />

      </div>

      <p>

        {progress}% Completed

      </p>

    </div>
  );
};

export default GoalTracker;