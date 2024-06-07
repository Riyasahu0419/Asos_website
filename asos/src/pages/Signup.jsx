import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate= useNavigate()
  const [error, setError] = useState("");


   const [FormState , setFormstate] = useState({
    Name:"",
    Email:"",
    Password:"",
    ConfirmPassword:"",

   })

   console.log(FormState)


   function handleChange(e){
      const {name,value}=e.target
      const newForm={
        ...FormState,[name]:value
      }
      setFormstate(newForm)
   }
  
   function handleSubmit(e) {
    e.preventDefault();

    
    // Basic form validation
    if (!FormState.Email || !FormState.Password || !FormState.ConfirmPassword) {
      alert("Please fill in all fields.");
      return
      
      }
      
      
      
      // More advanced form validation can be added here
      
      // Storing email and password in local storage
      localStorage.setItem('Name', JSON.stringify(FormState.Name));
      localStorage.setItem('Email', JSON.stringify(FormState.Email));
      localStorage.setItem('Password', JSON.stringify(FormState.Password));
      localStorage.setItem('ConfirmPassword', JSON.stringify(FormState.ConfirmPassword));
      
      // Feedback to user upon successful signup
      
      // history.push('/login');
      if(FormState.Password===FormState.ConfirmPassword){
        
        alert("Signup successful!");
        // Optional: Redirect to login page
        navigate("/login")
        }
        else{

          alert("Wrong password! please enter the same password as above")
        }
      }


  
   

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-md w-full bg-white rounded px-12 py-20  mb-4">
        <h2 className="text-3xl font-bold mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              value={FormState.Name}
              onChange={handleChange}
              placeholder="Enter your name"
              name='Name'
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              value={FormState.Email}
              onChange={handleChange}
              placeholder="Enter your email"
              name='Email'
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
              value={FormState.Password}
              onChange={handleChange}
              placeholder="Enter your password"
              name='Password'
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="confirmPassword"
              type="password"
              value={FormState.ConfirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              name='ConfirmPassword'
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
            </button>
            
            

            <Link to="/login" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" >
            Already have an account? Log In

            </Link>
            
            
        
          </div>
        </form>
      </div>
    </div>
  );
}