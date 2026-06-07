import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({
      username: "",
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
        "/auth/register",
        {
          username,
          email,
          password,
        }
      );

    console.log(
      response.data
    );

    toast.success(
      "Register Successful"
    );

  } catch (error) {

    console.log(error);

   toast.error(
      "Registration Failed"
    );
  }
};

  return (
    <div className="min-h-screen bg-[#0F172A] flex items-center justify-center p-4">
      <div className="bg-[#1B2333] w-full max-w-md p-8 rounded-2xl shadow-lg">
        
        <h1 className="text-white text-3xl font-bold mb-6 text-center">
          Register
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={
              formData.username
            }
            onChange={
              handleChange
            }
            required
            className="w-full p-3 rounded-lg bg-[#111827] text-white outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={
              handleChange
            }
            required
            className="w-full p-3 rounded-lg bg-[#111827] text-white outline-none"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={
              formData.password
            }
            onChange={
              handleChange
            }
            required
            className="w-full p-3 rounded-lg bg-[#111827] text-white outline-none"
          />

          <button
            type="submit"
            className="w-full bg-violet-600 hover:bg-violet-700 text-white p-3 rounded-lg font-semibold"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;