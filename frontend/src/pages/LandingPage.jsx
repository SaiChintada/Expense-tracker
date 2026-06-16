
import "../styles/LandingPage.css";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {

  const navigate = useNavigate();

  return (
    <div className="landing-page">

      <h1>
        FinFlow
      </h1>

      <p>
        Smart Personal Finance Manager
      </p>

      <button
        onClick={() =>
          navigate("/register")
        }
      >
        Get Started
      </button>

      <button
        onClick={() =>
          navigate("/login")
        }
      >
        Login
      </button>

    </div>
  );
};

export default LandingPage;