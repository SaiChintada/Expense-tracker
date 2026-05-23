import Layout from "../components/Layout";

import TransactionList from "../components/TransactionList";

const Transactions = ({

  transactions,

  fetchTransactions,

}) => {

  return (

    <Layout>

      <div className="page-header">

        <h1>
          Transactions
        </h1>

        <p>
          Manage all your
          income and expenses
        </p>

      </div>

      <TransactionList

        transactions={
          transactions
        }

        fetchTransactions={
          fetchTransactions
        }

      />

    </Layout>

  );

};

export default Transactions;