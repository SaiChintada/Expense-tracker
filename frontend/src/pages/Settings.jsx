import { useState } from "react";
import Layout from "../components/Layout";

const Settings = () => {

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

          <div className="settings-card">

            <h2>
              Profile
            </h2>

            <div className="profile-box">

              <div className="profile-avatar">

                S

              </div>

              <div>

                <h3>
                  Saikiran
                </h3>

                <p>
                  ExpenseFlow User
                </p>

              </div>

            </div>

          </div>

         <div className="settings-card">

  <h2>
    Export Data
  </h2>

  <p className="settings-desc">
    Download and backup your financial records
  </p>

  <div className="export-actions">

    <button
      className="settings-btn"
    >
      Export PDF
    </button>

    <button
      className="settings-btn secondary-btn"
    >
      Export CSV
    </button>

  </div>

</div>

          <div className="settings-card">

            <h2>
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

          </div>

          <div className="settings-card">

            <h2>
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
        <div className="settings-card">

  <h2>
    About ExpenseFlow
  </h2>

  <div className="about-content">

    <p>Version 1.0</p>

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