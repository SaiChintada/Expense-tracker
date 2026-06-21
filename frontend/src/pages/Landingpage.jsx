import "../styles/LandingPage.css";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing">

      {/* NAVBAR */}
      <nav className="navbar">
        <h2 className="logo">FinFlow</h2>

        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#dashboard">Dashboard</a>
          <a href="#contact">Contact</a>
        </div>

        <button
          className="nav-btn"
          onClick={() => navigate("/login")}
        >
          Get Started
        </button>
      </nav>

      {/* HERO */}
     <section className="hero">

  <div className="hero-left">

    <span className="hero-badge">
      Smart Finance Platform
    </span>

    <h1>
      Manage Money
      <br />
      Like A Pro
    </h1>

    <p>
      Track expenses, manage budgets,
      analyze spending and build
      better financial habits.
    </p>

    <div className="hero-buttons">

      <button className="primary-btn">
        Get Started
      </button>

      <button className="secondary-btn">
        Demo
      </button>

    </div>

  </div>

  <div className="hero-right">

    <div className="mockup-card">

      <div className="mockup-top">

        <span>Current Balance</span>

        <h2>
          ₹ 2,02,662
        </h2>

      </div>

      <div className="mockup-grid">

        <div>
          Income
          <strong>
            ₹ 3.1L
          </strong>
        </div>

        <div>
          Expense
          <strong>
            ₹ 1.1L
          </strong>
        </div>

        <div>
          Savings
          <strong>
            65%
          </strong>
        </div>

      </div>

    </div>

  </div>

</section>

      {/* DASHBOARD */}
      <section
        id="dashboard"
        className="dashboard-section"
      >

        <div className="section-header">

          <h2>
            One Dashboard.
            Complete Control.
          </h2>

          <p>
            Everything you need in one place.
          </p>

        </div>

        <div className="dashboard-card">

          <img
            src="/dashboard-preview.png"
            alt="dashboard"
          />

        </div>

      </section>

      {/* FEATURES */}
      <section
        id="features"
        className="features"
      >

        <h2>
          Everything You Need
        </h2>

        <div className="feature-grid">

          <div className="feature-card">
            <h3>Expense Tracking</h3>
            <p>
              Monitor every transaction
              effortlessly.
            </p>
          </div>

          <div className="feature-card">
            <h3>Budget Planning</h3>
            <p>
              Create budgets and stay
              on target.
            </p>
          </div>

          <div className="feature-card">
            <h3>Analytics</h3>
            <p>
              Visual insights into your
              financial habits.
            </p>
          </div>

          <div className="feature-card">
            <h3>AI Insights</h3>
            <p>
              Smart suggestions powered
              by analytics.
            </p>
          </div>

        </div>

      </section>

      {/* HOW IT WORKS */}
      <section className="steps">

        <h2>
          How It Works
        </h2>

        <div className="step-grid">

          <div className="step-card">
            <span>01</span>
            <h3>Add Transactions</h3>
          </div>

          <div className="step-card">
            <span>02</span>
            <h3>Track Spending</h3>
          </div>

          <div className="step-card">
            <span>03</span>
            <h3>Grow Savings</h3>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="cta">

        <h2>
          Ready To Take Control?
        </h2>

        <p>
          Start managing your finances today.
        </p>

        <button
          onClick={() => navigate("/register")}
          className="primary-btn"
        >
          Create Account
        </button>

      </section>

      {/* FOOTER */}
      <footer
        id="contact"
        className="footer"
      >

        <h3>FinFlow</h3>

        <p>
          Track. Save. Grow.
        </p>

      </footer>

    </div>
  );
}