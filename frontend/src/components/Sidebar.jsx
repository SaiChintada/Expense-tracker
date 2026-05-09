import {
  FaWallet,
  FaChartPie,
  FaMoneyBillWave,
} from "react-icons/fa";

function Sidebar() {

  return (
    <div className="w-72 bg-slate-900/80 backdrop-blur-lg border-r border-slate-800 p-6">

      <div className="flex items-center gap-3 text-3xl font-bold text-violet-400">

        <FaWallet />

        <span>ExpenseTracker</span>

      </div>

      <div className="mt-12 space-y-4">

        <div className="bg-violet-500 p-4 rounded-2xl flex items-center gap-3 cursor-pointer">

          <FaChartPie />

          Dashboard

        </div>

        <div className="hover:bg-slate-800 p-4 rounded-2xl flex items-center gap-3 cursor-pointer transition">

          <FaMoneyBillWave />

          Transactions

        </div>

      </div>

    </div>
  );
}

export default Sidebar;