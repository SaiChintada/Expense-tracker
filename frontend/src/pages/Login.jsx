import { useState } from "react";

import { useNavigate } from "react-router-dom";

import API from "../services/api";

import toast from "react-hot-toast";


const Login = () => {

  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
    });

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value,

    });

  };

  const handleSubmit = async (
  e
) => {

  e.preventDefault();

  try {

    const response =
      await API.post(
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

    toast.error("Login Failed");
  }
};
  return (

    <div className="auth-container">

      <form
        className="auth-form"
        onSubmit={handleSubmit}
      >

        <h2>
          Login
        </h2>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={handleChange}
          required
        />

        <button type="submit">
          Login
        </button>

      </form>

    </div>

  );
};

export default Login;