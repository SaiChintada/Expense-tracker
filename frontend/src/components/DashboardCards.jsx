import { motion } from "framer-motion";

const DashboardCards = ({
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

  const balance =
    income - expense;

  const cards = [

    {
      title: "Balance",
      amount: balance,
      icon: "💳",
      className:
        "balance-gradient",
    },

    {
      title: "Income",
      amount: income,
      icon: "📈",
      className:
        "income-gradient",
    },

    {
      title: "Expenses",
      amount: expense,
      icon: "📉",
      className:
        "expense-gradient",
    },

  ];

  return (

    <div className="modern-grid">

      {cards.map(
        (card, index) => (

          <motion.div

            key={index}

            initial={{
              opacity: 0,
              y: 18,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.45,
              delay:
                index * 0.08,
            }}

            whileHover={{
              y: -5,
            }}

            className={`modern-card ${card.className}`}
          >

            <div className="card-top">

              <span className="card-icon">
                {card.icon}
              </span>

              <p>
                {card.title}
              </p>

            </div>

            <h1>
              ₹ {card.amount}
            </h1>

          </motion.div>

        )
      )}

    </div>



  );

};

export default DashboardCards;