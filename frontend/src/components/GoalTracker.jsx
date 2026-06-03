import { useState, useEffect } from "react";

const GoalTracker = ({
  transactions,
}) => {

const [goal, setGoal] =
  useState(() => {

    const savedGoal =
      Number(
        localStorage.getItem(
          "savingsGoal"
        )
      ) || 50000;

    return Math.min(
      savedGoal,
      1000000
    );
  });

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

    ? Math.max(
        0,
        Math.min(
          Math.round(
            (savings / goal) *
            100
          ),
          100
        )
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
  max="1000000"
  min="0"
  onChange={(e) => {

    const value =
      Number(e.target.value);

    if (value > 1000000) {

      setGoal(1000000);

      return;
    }

    setGoal(value);
  }}
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