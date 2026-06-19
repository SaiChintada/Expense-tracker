
import "../styles/LandingPage.css";

import { useNavigate } from "react-router-dom";

const LandingPage = () => {

  const navigate = useNavigate();

  return (

    <div className="landing-page">

      <nav className="landing-navbar">

        Navbar

      </nav>

      <section className="hero-section">

        Hero

      </section>

      <section className="features-section">

        Features

      </section>

      <section className="showcase-section">

        Dashboard Showcase

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