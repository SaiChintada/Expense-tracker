import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";
import toast from "react-hot-toast";

import {
  Wallet,
  User,
  Mail,
  Lock,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import "../styles/Register.css";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
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
      await API.post("/auth/register", formData);

      toast.success("Registration Successful");

      setTimeout(() => {
        navigate("/login");
      }, 1200);
    } catch (error) {
      console.log(error);

      toast.error(
        error.response?.data?.detail ||
          "Registration Failed"
      );
    }
  };

  return (
    <div className="register-page">

      {/* Background */}

      <div className="register-circle circle1"></div>
      <div className="register-circle circle2"></div>
      <div className="register-grid"></div>

      <div className="register-container">

        {/* LEFT */}

        <div className="register-left">

          <div className="brand">

            <div className="brand-icon">
              <Wallet size={24} />
            </div>

            <h2>FinFlow</h2>

          </div>

          <span className="register-tag">

            <Sparkles size={16} />

            Modern Finance Platform

          </span>

          <h1>

            Build Better

            <span> Financial Habits.</span>

          </h1>

          <p>

            Join thousands of users who manage
            expenses, income, savings and budgets
            using FinFlow.

          </p>

        </div>

        {/* RIGHT */}

        <div className="register-card">

          <h2>Create Account</h2>

          <p>

            Welcome!

            Create your FinFlow account.

          </p>

          <form onSubmit={handleSubmit}>

            {/* Username */}

            <div className="input-box">

              <User size={20} />

              <input
                type="text"
                name="username"
                placeholder="Full Name"
                value={formData.username}
                onChange={handleChange}
                required
              />

            </div>

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
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />

            </div>

            <button
              type="submit"
              className="register-btn"
            >

              Create Account

              <ArrowRight size={18} />

            </button>

          </form>

          <div className="login-text">

            Already have an account?

            <Link to="/login">

              Login

            </Link>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Register;