import {
  LayoutDashboard,
  Wallet,
  BarChart3,
  Settings,
  LogOut,
  FileText,
} from "lucide-react";

import {
  NavLink,
  useNavigate,
} from "react-router-dom";

const Layout = ({ children }) => {

  const navigate =
    useNavigate();

  const logout = () => {

    localStorage.clear();

    navigate("/login");
  };

  return (

    <div className="app-layout">

      <aside className="sidebar">

        <div className="sidebar-top">

          <h1>
            ExpenseFlow
          </h1>

          <p>
            Smart Finance
          </p>

        </div>

        <nav className="sidebar-links">

          <NavLink
            to="/dashboard"
            className={({isActive}) =>
              isActive
                ? "nav-link active-link"
                : "nav-link"
            }
          >

            <LayoutDashboard
              size={20}
            />

            Dashboard

          </NavLink>

          <NavLink
            to="/transactions"
            className={({isActive}) =>
              isActive
                ? "nav-link active-link"
                : "nav-link"
            }
          >

            <Wallet size={20} />

            Transactions

          </NavLink>

          <NavLink
            to="/analytics"
            className={({isActive}) =>
              isActive
                ? "nav-link active-link"
                : "nav-link"
            }
          >

            <BarChart3
              size={20}
            />

            Analytics

          </NavLink>
        
          <NavLink
  to="/reports"
  className={({isActive}) =>
    isActive
      ? "nav-link active-link"
      : "nav-link"
  }
>

  <FileText
    size={20}
  />

  Reports

</NavLink>

          <NavLink
            to="/settings"
            className={({isActive}) =>
              isActive
                ? "nav-link active-link"
                : "nav-link"
            }
          >

            <Settings
              size={20}
            />

            Settings

          </NavLink>

        </nav>

        <button
          onClick={logout}
          className="logout-btn"
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