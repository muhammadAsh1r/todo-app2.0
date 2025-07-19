import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        email,
        password,
      };

      const response = await axios.post(
        "http://localhost:3000/api/users/login",
        payload
      );

      const token = response.data.token;
      localStorage.setItem("authToken", token);

      navigate("/");
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F0F1C] p-4">
      <div className="bg-[rgba(255,255,255,0.1)] backdrop-blur-sm rounded-lg p-8 max-w-md w-full text-[#A0F0ED] shadow-md">
        <h2 className="text-3xl font-semibold mb-6 text-[#00D1D1] text-center">
          Login Todo
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block mb-1 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="
                w-full 
                px-4 py-2 
                rounded-md 
                bg-[#2D9CDB] 
                text-white 
                focus:outline-none 
                focus:ring-2 
                focus:ring-[#00FFE7]
                transition
              "
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1 font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="
                w-full 
                px-4 py-2 
                rounded-md 
                bg-[#2D9CDB] 
                text-white 
                focus:outline-none 
                focus:ring-2 
                focus:ring-[#00FFE7]
                transition
              "
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
          </div>
          <button
            type="submit"
            className="
              w-full 
              bg-[#007E7E] 
              hover:bg-[#6C63FF] 
              text-white 
              py-2 
              rounded-md 
              font-semibold 
              transition-colors duration-200
              cursor-pointer
            "
          >
            Login
          </button>
        </form>
        <p className="mt-6 text-center text-[#A0F0ED]">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-[#6C63FF] hover:underline cursor-pointer"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
