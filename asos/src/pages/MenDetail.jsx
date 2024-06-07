
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function MenDetail() {
    const{id}=useParams()
    console.log(id)

    const[product,setProduct]=useState({})
    
      // console.log(product)
    async function fetchproduct(id){
        let res = await axios.get(`http://localhost:3000/Men${id}`)
        // let data = await res.json()
        setProduct(res.data)
        console.log(res)
    }

useEffect(()=>{
        fetchproduct(id)
},[id])

  return (
   
    <div className="flex flex-col md:flex-row p-6">
    <div className="md:w-1/2">
      <div className="flex flex-col items-center">
        <img
          src={product.img} // Replace with your main image URL
          alt="Product"
          className="w-[50%] h-[500px] mb-4"
        />
      
      </div>
    </div>
    <div className="w-full md:w-1/2 p-4">
      <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
      <p className="text-xl text-gray-700 mb-4">{product.price}</p>
      <div className="bg-blue-100 p-2 mb-4">
        <p className="text-blue-600">This item is excluded from discount codes.</p>
      </div>
      <div className="flex items-center mb-4">
        <p><b>COLOUR: </b> {product.color}</p>
        
        
      </div>
      <div className="flex items-center mb-4">
        <label htmlFor="size" className="mr-2">Size:</label>
        <select id="size" className="border p-2">
          <option value="">Please select</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>
      </div>
      <button className="bg-green-600 text-white px-4 py-2 rounded mb-4">ADD TO BAG</button>
      <div>
        <p className="text-gray-700 mb-2">Free delivery on qualifying orders.</p>
        <a href="#" className="text-blue-600 underline">View our Delivery & Returns Policy</a>
      </div>
      <div className="mt-4">
        <p className="text-gray-600">This product has shipping restrictions.</p>
      </div>
     
     
    </div>
  </div>
    
  )
}

export default MenDetail


