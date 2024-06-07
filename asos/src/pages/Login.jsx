import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function LoginPage() {
 
  const navigate= useNavigate()
 
  


   const [FormState , setFormstate] = useState({
    Email:"",
    Password:""

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

    
    
    const storeEmail = JSON.parse(localStorage.getItem('Email'));
    const storePassword = JSON.parse(localStorage.getItem("Password"));


    // Basic form validation
    if (storeEmail===FormState.Email && storePassword===FormState.Password ) {
      alert("Login Success")
      navigate("/");
      
      
      }
  
      else{
      alert("Invalid email or password. Please try again");

    }


    
    // More advanced form validation can be added here

    // Storing email and password in local storage
   
    
    
    
}


  
  

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100 ">
      <div className="max-w-md w-full bg-white rounded px-12 py-36 ">
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
          <div className="flex items-center justify-between">
            <button
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              >
              Log In
            </button>

            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
              >
              Forgot password?
            </a>
          </div>
        </form>
           
           
        <p className="text-gray-600 text-sm mt-4">
          Don't have an account? <Link to="/signup" className="text-blue-500 hover:text-blue-800">Sign Up</Link>
        </p>
      </div>

      
    </div>



  );
}