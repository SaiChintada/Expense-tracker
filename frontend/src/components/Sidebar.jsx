import { FaWallet, FaChartPie, FaCog } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="h-full bg-[#121826] text-white flex flex-col p-5">
      <h1 className="text-2xl font-bold mb-10 text-violet-400">
        ExpenseTracker
      </h1>

      <nav className="flex flex-col gap-4">
        <button className="flex items-center gap-3 hover:bg-violet-500/20 p-3 rounded-xl transition">
          <FaWallet />
          Dashboard
        </button>

        <button className="flex items-center gap-3 hover:bg-violet-500/20 p-3 rounded-xl transition">
          <FaChartPie />
          Analytics
        </button>

        <button className="flex items-center gap-3 hover:bg-violet-500/20 p-3 rounded-xl transition">
          <FaCog />
          Settings
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;