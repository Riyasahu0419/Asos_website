import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function LoginPage() {
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    Email: "",
    Password: ""
  });
  // axios.defaults.withCredentials = true;
  function handleChange(e) {
    const { name, value } = e.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Basic form validation
    if (!formState.Email || !formState.Password) {
      alert("Please fill in all fields.");
      return;
    }
    // POST request to server
    axios.post('https://asos-fashion-store-mern-server.vercel.app/api/login', formState)
      .then(response => {
        if (response.data === "success") {
          // Store the login state in localStorage (or in sessionStorage)
          localStorage.setItem('isLoggedIn', true);
          localStorage.setItem('userEmail', formState.Email);
          alert("Login Success");
          navigate("/");
        } else {
          alert("Invalid email or password. Please try again");
        }
      })
      .catch(err => {
        console.error("Axios Error:", err);
        alert("An error occurred. Please try again later.");
      });
  }

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-md w-full bg-white rounded px-12 py-20 mb-4">
        <h2 className="text-3xl font-bold mb-4">Log In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              value={formState.Email}
              onChange={handleChange}
              placeholder="Enter your email"
              name="Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              value={formState.Password}
              onChange={handleChange}
              placeholder="Enter your password"
              name="Password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Log In
            </button>
            <Link
              to="/forgot-password"
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            >
              Forgot password?
            </Link>
          </div>
        </form>
        <p className="text-gray-600 text-sm mt-4">
          Don't have an account? <Link to="/signup" className="text-blue-500 hover:text-blue-800">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}