import "../styles/LandingPage.css";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {

  const navigate = useNavigate();

  return (

    <div className="landing-page">

      <nav className="landing-navbar">

  <div className="logo">
    FinFlow
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

  <div className="hero-left">

    <span className="hero-badge">
      Smart Personal Finance Manager
    </span>

    <h1>

      Take Control
      <br />
      Of Your Finances

    </h1>

    <p>

      Track expenses,
      manage budgets,
      achieve savings goals,
      and gain powerful insights
      into your financial future.

    </p>

    <div className="hero-buttons">

      <button
        className="hero-primary"
        onClick={() =>
          navigate("/register")
        }
      >
        Get Started
      </button>

      <button
        className="hero-secondary"
        onClick={() =>
          navigate("/login")
        }
      >
        Login
      </button>

    </div>

  </div>

  <div className="hero-right">

    <div className="preview-card">

      <h3>
        Current Balance
      </h3>

      <h1>
        ₹ 48,500
      </h1>

      <p>
        +12.5% This Month
      </p>

    </div>

    <div className="preview-grid">

      <div className="mini-card">
        Budget
      </div>

      <div className="mini-card">
        Reports
      </div>

      <div className="mini-card">
        Goals
      </div>

      <div className="mini-card">
        Insights
      </div>

    </div>

  </div>

</section>

      <section className="features-section">
        Features
      </section>

      <section className="stats-section">
        Stats
      </section>

      <section className="preview-section">
        Dashboard Preview
      </section>

      <section className="cta-section">
        CTA
      </section>

      <footer className="landing-footer">
        Footer
      </footer>

    </div>

  );

};

export default LandingPage;