import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";
import toast from "react-hot-toast";

import {
  Wallet,
  Mail,
  Lock,
  ArrowRight,
  Sparkles,
  Eye,
  EyeOff,
} from "lucide-react";

import "../styles/Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await API.post(
        "/auth/login",
        formData
      );

      localStorage.setItem(
        "token",
        response.data.access_token
      );

      localStorage.setItem(
        "lastLogin",
        new Date().toLocaleString()
      );

      toast.success("Login Successful");

      navigate("/dashboard");
    } catch (error) {
      console.log(error);

      toast.error(
        error.response?.data?.detail ||
        "Login Failed"
      );
    }
  };

  return (
    <div className="login-page">

      {/* Background */}

      <div className="login-circle circle1"></div>
      <div className="login-circle circle2"></div>
      <div className="login-grid"></div>

      <div className="login-container">

        {/* LEFT */}

        <div className="login-left">

          <div className="brand">

            <div className="brand-icon">

              <Wallet size={24} />

            </div>

            <h2>FinFlow</h2>

          </div>

          <span className="login-tag">

            <Sparkles size={16} />

            Welcome Back

          </span>

          <h1>

            Continue Your

            <span> Financial Journey.</span>

          </h1>

          <p>

            Access your dashboard,

            monitor your expenses,

            analyze reports,

            and stay in control

            of your finances.

          </p>

        </div>

        {/* RIGHT */}

        <div className="login-card">

          <h2>Login</h2>

          <p>

            Sign in to your FinFlow account.

          </p>

          <form onSubmit={handleSubmit}>

            {/* Email */}

            <div className="input-box">

              <Mail size={20} />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />

            </div>

            {/* Password */}

            <div className="input-box">

              <Lock size={20} />

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />

              <button
                type="button"
                className="eye-btn"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >

                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}

              </button>

            </div>

            <div className="login-options">

              <label>

                <input type="checkbox" />

                Remember Me

              </label>

              <span className="forgot">

                Forgot Password?

              </span>

            </div>

            <button
              type="submit"
              className="login-btn"
            >

              Login

              <ArrowRight size={18} />

            </button>

          </form>

          <div className="register-link">

            Don't have an account?

            <Link to="/register">

              Register

            </Link>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Login;