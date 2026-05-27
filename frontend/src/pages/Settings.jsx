import Layout from "../components/Layout";

import {
  useTheme
} from "../context/ThemeContext";

const Settings = () => {

    const {
  darkMode,
  toggleTheme
} = useTheme();

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
              Appearance
            </h2>

            <div className="theme-toggle">

             <button
              onClick={toggleTheme}
        >

             {darkMode
               ? "Switch to Light"
               : "Switch to Dark"}

            </button>
            
            </div>

          </div>

          <div className="settings-card">

            <h2>
              Security
            </h2>

            <button
              className="settings-btn"
            >

              Change Password

            </button>

          </div>

        </div>

      </div>

    </Layout>
  );
};

export default Settings;