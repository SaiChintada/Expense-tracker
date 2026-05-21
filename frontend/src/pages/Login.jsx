import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import toast from "react-hot-toast";

const Login = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Handle Input Change
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  // Handle Login Submit
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await API.post(
        "/auth/login",
        formData
      );

      // Save JWT Token
      localStorage.setItem(
        "token",
        res.data.access_token
      );

      // Save User Info
      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      toast.success(
        "Login Successful"
      );

      // Redirect Dashboard
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

    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
      >

        <h2 className="text-3xl font-bold text-center mb-6">
          Login
        </h2>

        {/* Email Input */}
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 p-3 rounded-lg mb-4 outline-none focus:ring-2 focus:ring-black"
        />

        {/* Password Input */}
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 p-3 rounded-lg mb-6 outline-none focus:ring-2 focus:ring-black"
        />

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg hover:opacity-90 transition"
        >
          Login
        </button>

      </form>

    </div>

  );
};

export default Login;