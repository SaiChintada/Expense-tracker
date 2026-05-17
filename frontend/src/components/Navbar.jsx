import {
  LogOut,
} from "lucide-react";

const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem(
      "token"
    );

    window.location.href =
      "/login";
  };

  return (
    <div className="sticky top-0 z-50 bg-[#0F172A] flex items-center justify-between mb-6 py-4">
      <div>
        <h1 className="text-white text-3xl font-bold">
          Expense Dashboard
        </h1>

        <p className="text-gray-400 mt-1">
          Track your finances
        </p>
      </div>

      <button
        onClick={handleLogout}
        className="flex items-center gap-2 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-xl text-white"
      >
        <LogOut size={18} />

        Logout
      </button>
    </div>
  );
};

export default Navbar; 