import {

  LayoutDashboard,

  Wallet,

  PieChart,

  Settings,

  LogOut,

  Menu,

  X,

} from "lucide-react";

import {

  useNavigate,

  useLocation,

} from "react-router-dom";

import { useState } from "react";

const Layout = ({
  children,
}) => {

  const navigate =
    useNavigate();

  const location =
    useLocation();

  const [mobileOpen,
    setMobileOpen] =
    useState(false);

  const logout = () => {

    localStorage.removeItem(
      "token"
    );

    localStorage.removeItem(
      "user"
    );

    navigate("/login");

  };

  const navigatePage = (
    path
  ) => {

    navigate(path);

    setMobileOpen(false);

  };

  return (

    <div className="app-layout">

      {/* MOBILE TOPBAR */}

      <div className="mobile-topbar">

        <h1>
          ExpensePro
        </h1>

        <button
          onClick={() =>
            setMobileOpen(
              !mobileOpen
            )
          }
        >

          {mobileOpen
            ? <X size={26} />
            : <Menu size={26} />}

        </button>

      </div>

      {/* SIDEBAR */}

      <aside className={`sidebar ${
        mobileOpen
          ? "show-sidebar"
          : ""
      }`}>

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
                navigatePage(
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
                navigatePage(
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
                navigatePage(
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

      {/* CONTENT */}

      <main className="main-content">

        {children}

      </main>

    </div>

  );

};

export default Layout;