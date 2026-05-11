export const calculateSummary = (transactions = []) => {

  if (!Array.isArray(transactions)) {
    return {
      income: 0,
      expenses: 0,
      balance: 0,
      savings: 0,
    };
  }

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, curr) => acc + Number(curr.amount), 0);

  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, curr) => acc + Number(curr.amount), 0);

  const balance = income - expenses;

  const savings =
    income > 0
      ? ((balance / income) * 100).toFixed(1)
      : 0;

  return {
    income,
    expenses,
    balance,
    savings,
  };
};