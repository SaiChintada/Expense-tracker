import Sidebar from "../components/Sidebar";
import DashboardCards from "../components/DashboardCards";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import ExpenseChart from "../components/ExpenseChart";

function Dashboard() {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">

      <Sidebar />

      <div className="flex-1 p-6">

        <h1 className="text-4xl font-bold mb-6">
          Expense Tracker
        </h1>

        <DashboardCards />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">

          <TransactionForm />
           <ExpenseChart />
          

        </div>

        <div className="mt-6">

          <TransactionList />

        </div>

      </div>

    </div>
  );
}

export default Dashboard;