
import "../styles/LandingPage.css";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">FinFlow</div>

        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#how">How It Works</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

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

        <div className="hero-left">

          <span className="hero-badge">
            Smart Personal Finance Platform
          </span>

          <h1>
            Manage Your Finances
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

        <div className="hero-right">

          <div className="dashboard-card">

            <div className="dashboard-header">
              <span>Current Balance</span>
              <h2>₹2,02,662</h2>
            </div>

            <div className="dashboard-stats">

              <div className="stat-box">
                <span>Income</span>
                <strong>₹3.1L</strong>
              </div>

              <div className="stat-box">
                <span>Expense</span>
                <strong>₹1.1L</strong>
              </div>

              <div className="stat-box">
                <span>Savings</span>
                <strong>65%</strong>
              </div>

            </div>

            <div className="dashboard-chart">

              <div className="bar bar1"></div>
              <div className="bar bar2"></div>
              <div className="bar bar3"></div>
              <div className="bar bar4"></div>
              <div className="bar bar5"></div>

            </div>

          </div>

        </div>

      </section>

      {/* ABOUT */}
      <section id="about" className="about-section">

        <div className="section-heading">
          <h2>About FinFlow</h2>
          <p>
            A modern finance platform designed
            to simplify money management and
            help users build better financial habits.
          </p>
        </div>

        <div className="about-grid">

          <div className="info-card">
            <h3>Simple Tracking</h3>
            <p>
              Quickly record and organize
              income and expenses.
            </p>
          </div>

          <div className="info-card">
            <h3>Smart Analytics</h3>
            <p>
              Understand spending habits
              through visual insights.
            </p>
          </div>

          <div className="info-card">
            <h3>Goal Focused</h3>
            <p>
              Stay committed to savings
              and budgeting goals.
            </p>
          </div>

        </div>

      </section>

      {/* FEATURES */}
      <section id="features" className="features-section">

        <div className="section-heading">
          <h2>Everything You Need</h2>
          <p>
            Powerful tools built to simplify
            personal finance management.
          </p>
        </div>

        <div className="features-grid">

          <div className="feature-card">
            <h3>Expense Tracking</h3>
            <p>
              Monitor every transaction and
              understand your spending.
            </p>
          </div>

          <div className="feature-card">
            <h3>Budget Planning</h3>
            <p>
              Create budgets and stay within
              spending limits effortlessly.
            </p>
          </div>

          <div className="feature-card">
            <h3>Financial Analytics</h3>
            <p>
              Gain insights through reports
              and spending trends.
            </p>
          </div>

          <div className="feature-card">
            <h3>Savings Goals</h3>
            <p>
              Build financial discipline
              and achieve goals faster.
            </p>
          </div>

          <div className="feature-card">
            <h3>Smart Insights</h3>
            <p>
              Receive meaningful financial
              recommendations.
            </p>
          </div>

          <div className="feature-card">
            <h3>Secure Data</h3>
            <p>
              Keep your financial records
              protected and organized.
            </p>
          </div>

        </div>

      </section>

      {/* DASHBOARD SHOWCASE */}
      <section className="showcase-section">

        <div className="showcase-left">

          <h2>
            One Dashboard.
            Complete Financial Control.
          </h2>

          <ul>
            <li>Track income and expenses</li>
            <li>Create smart budgets</li>
            <li>Analyze spending patterns</li>
            <li>Monitor savings goals</li>
            <li>Generate financial reports</li>
          </ul>

        </div>

        <div className="showcase-right">

          <div className="showcase-card">

            <div className="showcase-top">
              Monthly Overview
            </div>

            <div className="mini-grid">

              <div>Income</div>
              <div>Expenses</div>
              <div>Savings</div>
              <div>Reports</div>

            </div>

          </div>

        </div>

      </section>

      {/* WHY CHOOSE */}
      <section className="why-section">

        <div className="section-heading">
          <h2>Why Choose FinFlow</h2>
        </div>

        <div className="why-grid">

          <div className="why-card">
            <h3>Clean Interface</h3>
            <p>
              Focus on finances without
              distractions.
            </p>
          </div>

          <div className="why-card">
            <h3>Fast Performance</h3>
            <p>
              Optimized for smooth and
              responsive experience.
            </p>
          </div>

          <div className="why-card">
            <h3>Secure Platform</h3>
            <p>
              Designed with privacy and
              security in mind.
            </p>
          </div>

          <div className="why-card">
            <h3>Easy To Use</h3>
            <p>
              Start managing finances
              immediately.
            </p>
          </div>

        </div>

      </section>

      {/* HOW IT WORKS */}
     <section id="how-it-works" className="how-it-works">

  <div className="section-title">
    <span>PROCESS</span>
    <h2>How FinFlow Works</h2>
    <p>
      Get started in minutes and take complete control
      of your finances.
    </p>
  </div>

  <div className="timeline">

    <div className="process-card">
      <div className="process-number">01</div>
      <h3>Create Account</h3>
      <p>Register and set up your financial profile.</p>
    </div>

    <div className="process-card">
      <div className="process-number">02</div>
      <h3>Add Transactions</h3>
      <p>Track income and expenses effortlessly.</p>
    </div>

    <div className="process-card">
      <div className="process-number">03</div>
      <h3>Analyze Insights</h3>
      <p>Understand spending patterns with reports.</p>
    </div>

    <div className="process-card">
      <div className="process-number">04</div>
      <h3>Reach Goals</h3>
      <p>Improve savings and budgeting habits.</p>
    </div>

  </div>

</section>

      {/* CTA */}
      <section className="cta-section">

        <h2>
          Ready To Take Control
          Of Your Finances?
        </h2>

        <p>
          Start managing expenses,
          budgets and savings today.
        </p>

        <button
          className="primary-btn"
          onClick={() => navigate("/register")}
        >
          Create Free Account
        </button>

      </section>

      {/* FOOTER */}
      <footer
        id="contact"
        className="footer"
      >

        <div className="footer-logo">
          FinFlow
        </div>

        <p>
          Track. Save. Grow.
        </p>

      </footer>

    </div>
  );
}

