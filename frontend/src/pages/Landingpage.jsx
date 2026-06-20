
import { useNavigate } from "react-router-dom";
import "../styles/LandingPage.css";

export default function LandingPage() {
const navigate = useNavigate();

return ( <div className="landing">

  {/* NAVBAR */}
  <nav className="navbar">
    <div className="logo">
      ExpenseFlow
    </div>

    <div className="nav-links">
      <a href="#features">Features</a>
      <a href="#dashboard">Dashboard</a>
      <a href="#contact">Contact</a>
    </div>

    <div className="nav-buttons">
      <button
        className="login-btn"
        onClick={() => navigate("/login")}
      >
        Login
      </button>

      <button
        className="primary-btn"
        onClick={() => navigate("/register")}
      >
        Get Started
      </button>
    </div>
  </nav>

  {/* HERO */}
  <section className="hero">

    <div className="hero-glow"></div>

    <span className="badge">
      Smart Personal Finance Platform
    </span>

    <h1>
      Manage Every Rupee.
      <br />
      Build Wealth Faster.
    </h1>

    <p>
      Track expenses, analyze spending,
      manage budgets and grow savings
      with one intelligent dashboard.
    </p>

    <div className="hero-buttons">

      <button
        className="primary-btn"
        onClick={() => navigate("/register")}
      >
        Start Free
      </button>

      <button className="secondary-btn">
        View Dashboard
      </button>

    </div>

  </section>

  {/* DASHBOARD */}
  <section
    id="dashboard"
    className="dashboard-section"
  >

    <h2>
      Powerful Financial Dashboard
    </h2>

    <p>
      Everything you need in one place.
    </p>

    <div className="dashboard-wrapper">

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
          Track every transaction instantly.
        </p>
      </div>

      <div className="feature-card">
        <h3>Budget Planning</h3>
        <p>
          Stay within limits and save more.
        </p>
      </div>

      <div className="feature-card">
        <h3>Analytics</h3>
        <p>
          Understand spending patterns.
        </p>
      </div>

      <div className="feature-card">
        <h3>AI Insights</h3>
        <p>
          Smart recommendations for growth.
        </p>
      </div>

    </div>

  </section>

  {/* HOW IT WORKS */}
  <section className="how-it-works">

    <h2>
      How It Works
    </h2>

    <div className="steps">

      <div className="step">
        <span>01</span>
        <h3>Add Transactions</h3>
      </div>

      <div className="step">
        <span>02</span>
        <h3>Track Spending</h3>
      </div>

      <div className="step">
        <span>03</span>
        <h3>Get Insights</h3>
      </div>

    </div>

  </section>

  {/* CTA */}
  <section className="cta">

    <h2>
      Ready To Take Control?
    </h2>

    <p>
      Start tracking your finances today.
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

    <h3>ExpenseFlow</h3>

    <p>
      Track. Save. Grow.
    </p>

  </footer>

</div>


);
}
