import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/signup",
        {
          name: username,
          email,
          password,
        }
      );

      const token = response.data.token;
      localStorage.setItem("authToken", token);

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F0F1C] p-4">
      <div className="bg-[rgba(255,255,255,0.1)] backdrop-blur-sm rounded-lg p-8 max-w-md w-full text-[#A0F0ED] shadow-md">
        <h2 className="text-3xl font-semibold mb-6 text-[#00D1D1] text-center">
          Create an Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block mb-1 font-medium">
              Username
            </label>
            <input
              type="text"
              id="username"
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
              placeholder="Your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoComplete="username"
            />
          </div>

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
              autoComplete="new-password"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block mb-1 font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
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
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              autoComplete="new-password"
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
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-center text-[#A0F0ED]">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#6C63FF] hover:underline cursor-pointer"
          >
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
