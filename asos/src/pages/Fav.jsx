import React from 'react'
import { Link } from 'react-router-dom'

const Fav = () => {
  return (
    <>
   
   <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-center">


        
        <h2 className="text-2xl font-medium text-gray-700 mb-2">You have no Saved Items</h2>
        
        <p className="text-gray-500">Sign in to sync your Saved <br /> Items across all your devices.</p>

      <Link to="/signup">
        <button  className="mt-4 px-14 py-2 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300">SIGN IN</button>
      </Link>
      </div>
    </div>
   
    </>
  )
}

export default Fav