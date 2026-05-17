import {
  FaSignOutAlt,
} from "react-icons/fa";

const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem(
      "token"
    );

    window.location.href =
      "/login";
  };

  return (
    <div className="flex items-center justify-between">
      
      <div>
        <h1 className="text-white text-3xl font-bold">
          Expense Tracker
        </h1>

        <p className="text-gray-400 mt-1">
          Manage your finances
        </p>
      </div>

      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
      >
        <FaSignOutAlt />

        Logout
      </button>
    </div>
  );
};

export default Navbar;