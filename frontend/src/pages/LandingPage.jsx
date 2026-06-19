import "../styles/LandingPage.css";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {

  const navigate = useNavigate();

  return (

    <div className="landing-page">

      <nav className="landing-navbar">

  <div className="logo">
    ExpenseFlow
  </div>

  <div className="nav-links">

  <a href="#features">
    Features
  </a>

  <a href="#preview">
    Preview
  </a>

  <a href="#contact">
    Contact
  </a>

</div>

  <div className="nav-buttons">

    <button
      className="nav-login"
      onClick={() =>
        navigate("/login")
      }
    >
      Login
    </button>

    <button
      className="nav-register"
      onClick={() =>
        navigate("/register")
      }
    >
      Get Started
    </button>

  </div>

</nav>

  <section className="hero-section">

  <div className="hero-overlay"></div>

  <div className="hero-container">

    <div className="hero-badge">
      ✨ Smart Personal Finance Platform
    </div>

    <h1 className="hero-title">
      Track Expenses.
      <br />
      Build Wealth.
      <br />
      Stay In Control.
    </h1>

    <p className="hero-description">
      Manage transactions, budgets, reports, analytics and savings
      from a single intelligent platform designed for modern users.
    </p>

    <div className="hero-buttons">

      <button
        className="hero-primary-btn"
        onClick={() => navigate("/register")}
      >
        Start Free
      </button>

      <button
        className="hero-secondary-btn"
      >
        View Demo
      </button>

    </div>

    <div className="hero-preview">

      <div className="preview-card">

        <div className="preview-header">

          <span>Current Balance</span>

          <div className="status-dot"></div>

        </div>

        <h2>₹ 2,02,662</h2>

        <div className="preview-stats">

          <div>
            <p>Income</p>
            <h4>₹ 3,08,762</h4>
          </div>

          <div>
            <p>Expense</p>
            <h4>₹ 1,06,100</h4>
          </div>

          <div>
            <p>Savings</p>
            <h4>65%</h4>
          </div>

        </div>

      </div>

    </div>

  </div>

</section>

      

     <section
  id="preview"
  className="preview-section"
>

  <div className="section-header">

    <h2>
      Beautiful Dashboard Experience
    </h2>

    <p>
      Monitor your financial health in one place.
    </p>

  </div>

  <div className="dashboard-preview">

    <div className="preview-balance">

      <h3>
        Current Balance
      </h3>

      <h1>
        ₹ 48,500
      </h1>

    </div>

    <div className="preview-summary">

      <div className="preview-box">
        Income
      </div>

      <div className="preview-box">
        Expenses
      </div>

      <div className="preview-box">
        Reports
      </div>

      <div className="preview-box">
        Goals
      </div>

    </div>

  </div>

</section>

      <section className="cta-section">

  <div className="cta-container">

    <h2>
      Ready To Take Control Of Your Finances?
    </h2>

    <p>
      Join ExpenseFlow today and start managing
      your money smarter than ever.
    </p>

    <button
      className="cta-button"
      onClick={() =>
        navigate("/register")
      }
    >
      Get Started Free
    </button>

  </div>

</section>

     <footer
  id="contact"
  className="landing-footer"
>

  <div className="footer-content">

    <h2>
      ExpenseFlow
    </h2>

    <p>
      Smart Personal Finance Management System
    </p>

    <div className="footer-links">

      <a href="#features">
        Features
      </a>

      <a href="#preview">
        Preview
      </a>

      <a href="/login">
        Login
      </a>

      <a href="/register">
        Register
      </a>

    </div>

    <span>
      © 2026 ExpenseFlow. All Rights Reserved.
    </span>

  </div>

</footer>

    </div>

  );

};

export default LandingPage;