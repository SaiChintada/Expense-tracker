import {
  FaWallet,
  FaSignOutAlt,
} from "react-icons/fa";

import {
  useNavigate,
} from "react-router-dom";

const Navbar = () => {

  const navigate =
    useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const logout = () => {

    localStorage.removeItem(
      "token"
    );

    localStorage.removeItem(
      "user"
    );

    navigate("/login");
  };

  return (

    <div className="navbar">

      <div className="logo">

        <FaWallet />

        <span>
          ExpensePro
        </span>

      </div>

      <div className="nav-right">

        <p>
          Welcome,
          {" "}
          {user?.username}
        </p>

        <button
          onClick={logout}
          className="logout-btn"
        >

          <FaSignOutAlt />

          Logout

        </button>

      </div>

    </div>

  );
};

export default Navbar;