import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault(); 

    try {
      const res = await axios.post(
        "http://localhost:5000/skillcraft/signup",
        {
          name,
          email,
          password,
        }
      );

      alert("Signup successful");
      navigate("/login");
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-start justify-center pb-20 px-4 pt-5">
      <div className="w-full max-w-md bg-white border border-gray-200 shadow-md rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-violet-600 mb-6">
          Create Account
        </h2>

       
        <form className="flex flex-col gap-4" onSubmit={handleSignup}>
          <div className="flex flex-col text-left">
            <label className="text-gray-600 mb-1">Full Name</label>
            <input
              type="text"
              className="border border-gray-300 p-3 rounded-lg outline-none"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col text-left">
            <label className="text-gray-600 mb-1">Email</label>
            <input
              type="email"
              className="border border-gray-300 p-3 rounded-lg outline-none"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col text-left">
            <label className="text-gray-600 mb-1">Password</label>
            <input
              type="password"
              className="border border-gray-300 p-3 rounded-lg outline-none"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-violet-500 hover:bg-violet-600 text-white py-3 rounded-lg transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-violet-600 cursor-pointer font-medium hover:underline"
          >
            Log In
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
