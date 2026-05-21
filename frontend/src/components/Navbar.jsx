import {
  useNavigate,
} from "react-router-dom";

import {
  useAuth,
} from "../context/AuthContext";

const Navbar = () => {
  const navigate =
    useNavigate();

  const { logout } =
    useAuth();

  const handleLogout = () => {
    logout();

    navigate("/login");
  };

  return (
    <div className="flex justify-between items-center mb-6">
      
      <div>
        <h1 className="text-3xl font-bold text-white">
          Expense Dashboard
        </h1>

        <p className="text-gray-400 mt-1">
          Track your expenses smartly
        </p>
      </div>

      <button
        onClick={
          handleLogout
        }
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;