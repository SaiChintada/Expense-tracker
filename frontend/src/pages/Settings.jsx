import { useState } from "react";
import Layout from "../components/Layout";
import ExportCSV from "../components/ExportCSV";
import ProfileCard
from "../components/ProfileCard";

import {
  User,
  Shield,
  Wallet,
  Info,
} from "lucide-react";

const Settings = ({
  transactions,
}) => {

  const [budget, setBudget] =
    useState(
      localStorage.getItem(
        "monthlyBudget"
      ) || 20000
    );

  const saveBudget = () => {

    localStorage.setItem(
      "monthlyBudget",
      budget
    );

    alert(
      "Budget Updated Successfully"
    );
  };

  return (

    <Layout>

      <div className="settings-page">

        <div className="settings-header">

          <h1>
            Settings
          </h1>

          <p>
            Manage your preferences
          </p>

        </div>

        <div className="settings-grid">

          {/* Profile */}

          <ProfileCard />

          {/* Security */}

          <div className="settings-card">

            <h2 className="settings-title">

              <Shield size={22} />

              Security

            </h2>

            <p className="settings-desc">

              Manage your account security

            </p>

            <button
              className="settings-btn"
            >

              Update Password

            </button>

            <ExportCSV
  transactions={transactions}
/>

          </div>

          {/* Monthly Budget */}

          <div className="settings-card">

            <h2 className="settings-title">

              <Wallet size={22} />

              Monthly Budget

            </h2>

            <input
              type="number"
              value={budget}
              onChange={(e) =>
                setBudget(
                  e.target.value
                )
              }
              className="budget-input"
            />

            <button
              className="settings-btn"
              onClick={saveBudget}
            >

              Save Budget

            </button>

          </div>

        </div>

        {/* About */}

        <div className="settings-card about-card">

          <h2 className="settings-title">

            <Info size={22} />

            About ExpenseFlow

          </h2>

          <div className="about-content">

            <p>
              Version 1.0
            </p>

            <p>
              React • FastAPI • PostgreSQL
            </p>

            <p>
              Developed by Saikiran
            </p>

          </div>

        </div>

      </div>

    </Layout>

  );
};

export default Settings;

