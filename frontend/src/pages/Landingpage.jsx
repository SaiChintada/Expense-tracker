
import "../styles/LandingPage.css";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {

  const navigate = useNavigate();

  return (

    <div className="landing-page">

      {/* NAVBAR */}

      <nav className="navbar">

        <div className="logo">
          FinFlow
        </div>

        <div className="nav-center">

          <a href="#about">
            About
          </a>

          <a href="#features">
            Features
          </a>

          <a href="#how">
            How It Works
          </a>

          <a href="#contact">
            Contact
          </a>

        </div>

        <div className="nav-actions">

          <button
            className="login-btn"
            onClick={() => navigate("/login")}
          >
            Login
          </button>

          <button
            className="register-btn"
            onClick={() => navigate("/register")}
          >
            Register
          </button>

        </div>

      </nav>

      {/* HERO */}

      <section className="hero">

        <div className="hero-content">

          <div className="hero-badge">
            Smart Personal Finance Platform
          </div>

          <h1>
            Manage Your Finances
            <br />
            Without Spreadsheets
          </h1>

          <p>
            Track expenses, manage budgets,
            analyze spending habits and make
            smarter financial decisions from
            one modern dashboard.
          </p>

          <div className="hero-buttons">

            <button
              className="primary-btn"
              onClick={() => navigate("/register")}
            >
              Get Started Free
            </button>

            <button
              className="secondary-btn"
              onClick={() => navigate("/login")}
            >
              Login
            </button>

          </div>

        </div>

        <div className="hero-preview">

          <div className="dashboard-preview-card">

            <div className="preview-header">

              <div>
                <span>
                  Current Balance
                </span>

                <h2>
                  ₹2,02,662
                </h2>
              </div>

            </div>

            <div className="preview-grid">

              <div className="preview-box">
                <span>Income</span>
                <strong>₹3.1L</strong>
              </div>

              <div className="preview-box">
                <span>Expense</span>
                <strong>₹1.1L</strong>
              </div>

              <div className="preview-box">
                <span>Savings</span>
                <strong>65%</strong>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ABOUT */}

      <section
        id="about"
        className="about-section"
      >

        <h2>
          About FinFlow
        </h2>

        <p>
          FinFlow is a modern personal finance
          platform designed to help users gain
          complete visibility over their income,
          expenses, budgets and savings goals.
          Everything is built with simplicity,
          speed and clarity in mind.
        </p>

      </section>


      

      <section className="stats">

<div className="stat-card">
<h2>10K+</h2>
<p>Transactions Tracked</p>
</div>

<div className="stat-card">
<h2>5K+</h2>
<p>Active Users</p>
</div>

<div className="stat-card">
<h2>99%</h2>
<p>Data Accuracy</p>
</div>

<div className="stat-card">
<h2>24/7</h2>
<p>Availability</p>
</div>

</section>

      {/* FEATURES */}

      <section
        id="features"
        className="features-section"
      >

        <div className="section-title">

          <h2>
            Everything You Need
          </h2>

          <p>
            Powerful tools built to simplify
            personal finance management.
          </p>

        </div>

        <div className="features-grid">

          <div className="feature-card">

            <h3>
              Expense Tracking
            </h3>

            <p>
              Monitor every transaction and
              understand exactly where your
              money goes.
            </p>

          </div>

          <div className="feature-card">

            <h3>
              Budget Planning
            </h3>

            <p>
              Create budgets and stay within
              spending limits effortlessly.
            </p>

          </div>

          <div className="feature-card">

            <h3>
              Financial Analytics
            </h3>

            <p>
              Gain powerful insights into
              spending patterns and trends.
            </p>

          </div>

          <div className="feature-card">

            <h3>
              Smart Insights
            </h3>

            <p>
              Discover opportunities to
              improve savings and financial
              discipline.
            </p>

          </div>

        </div>

      </section>

      {/* HOW IT WORKS */}

      <section
        id="how"
        className="how-section"
      >

        <div className="section-title">

          <h2>
            How It Works
          </h2>

        </div>

        <div className="steps-grid">

          <div className="step-card">

            <span>
              01
            </span>

            <h3>
              Add Transactions
            </h3>

            <p>
              Record your income and expenses
              within seconds.
            </p>

          </div>

          <div className="step-card">

            <span>
              02
            </span>

            <h3>
              Analyze Spending
            </h3>

            <p>
              Understand financial habits
              through visual reports.
            </p>

          </div>

          <div className="step-card">

            <span>
              03
            </span>

            <h3>
              Improve Savings
            </h3>

            <p>
              Build better financial discipline
              and achieve your goals.
            </p>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section
        id="contact"
        className="cta-section"
      >

        <h2>
          Ready To Take Control
          Of Your Finances?
        </h2>

        <p>
          Start tracking expenses and
          managing budgets today.
        </p>

        <button
          className="primary-btn"
          onClick={() => navigate("/register")}
        >
          Create Free Account
        </button>

      </section>

      {/* FOOTER */}

      <footer className="footer">

        <h3>
          FinFlow
        </h3>

        <p>
          Track. Save. Grow.
        </p>

      </footer>

    </div>
  );
}

