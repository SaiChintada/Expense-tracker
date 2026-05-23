import {

  LayoutDashboard,

  Wallet,

  PieChart,

  Settings,

  LogOut,

} from "lucide-react";

import {

  useNavigate,

  useLocation,

} from "react-router-dom";

const Layout = ({
  children,
}) => {

  const navigate =
    useNavigate();

  const location =
    useLocation();

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

    <div className="app-layout">

      <aside className="sidebar">

        <div>

          <h1 className="logo">

            ExpensePro

          </h1>

          <nav className="sidebar-nav">

            <div

              className={`nav-item ${
                location.pathname ===
                "/dashboard"
                  ? "active-nav"
                  : ""
              }`}

              onClick={() =>
                navigate(
                  "/dashboard"
                )
              }
            >

              <LayoutDashboard
                size={20}
              />

              <span>
                Dashboard
              </span>

            </div>

            <div

              className={`nav-item ${
                location.pathname ===
                "/transactions"
                  ? "active-nav"
                  : ""
              }`}

              onClick={() =>
                navigate(
                  "/transactions"
                )
              }
            >

              <Wallet
                size={20}
              />

              <span>
                Transactions
              </span>

            </div>

            <div

              className={`nav-item ${
                location.pathname ===
                "/analytics"
                  ? "active-nav"
                  : ""
              }`}

              onClick={() =>
                navigate(
                  "/analytics"
                )
              }
            >

              <PieChart
                size={20}
              />

              <span>
                Analytics
              </span>

            </div>

            <div className="nav-item">

              <Settings
                size={20}
              />

              <span>
                Settings
              </span>

            </div>

          </nav>

        </div>

        <button
          className="logout-btn"
          onClick={logout}
        >

          <LogOut size={18} />

          Logout

        </button>

      </aside>

      <main className="main-content">

        {children}

      </main>

    </div>

  );

};

export default Layout;