import React, { useEffect, useState } from 'react'
import { Card,Text, Image, CardBody, Stack} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function Product() {
    const[product,setProduct]=useState([])
    const[sort , setSort] = useState("")
    const[category , setCategory]= useState("")

    console.log(product)

    useEffect(() => {
      fetchProduct();
    }, [category]);
  
    async function fetchProduct() {
      let url = `http://localhost:3000/women`;
      if (category) {
        url += `&_filter=category,${category}`;
      }
      // if (sort) {
      //   url += `&_sort=price&_order=${sort}`;
      // }
      let res = await fetch(url);
      let data = await res.json();
      setProduct(data);
    }

  return (
    <>


    


<div className="container  ">
      <h1 className="text-3xl font-bold text-center mb-5">Topshop New In</h1>
      <p className="text-center text-gray-600 mb-5">
        Welcome to the new era of Topshop. Retaining its fashion authority and
        the very best...
      </p>
      <div className="flex gap-8  items-center justify-center">
        <div className="col-span-1">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sort">
            Sort
          </label>

          <select
            className="shadow  border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="sort"
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="">Select Sort</option>
            <option value="asc">Price Low to High</option>
            <option value="decs">Price High to Low</option>
            
            
          </select>

        </div>
        <div className="col-span-1">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="category"
          >
            Category
          </label>
          <select
            className="shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="category"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="dresses">Dresses</option>
            <option value="top">Top</option>
            <option value="shorts">Shorts</option>
            <option value="shirt">Shirt</option>
            <option value="jeans">Jeans</option>
            <option value="all in one">All in one</option>
            
          </select>
        </div>
{/*         
        
        <div className="col-span-1">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="color"
          >
            Colour
          </label>
          <select
            className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="color">
            <option value="">Select Colour</option>
            <option value="black">Black</option>
            <option value="blue">Blue</option>
            <option value=""></option>
            <option value=""></option>
            
          </select>
        </div> */}
      </div>
     
    </div>
 
 



    <div className=' w-[70%] grid  grid-cols-2  lg:grid-cols-4 m-auto ' >

    { product.map((e,id)=>{
        return(
          
     <Link to={`/productdetail/${e.id}`}>
    <Card maxW='sm' w="90%" mt="18"  >
    <CardBody>
    <Image
      src={e.img} alt=''  h="350px"  />
    <Stack>
      <Text>{e.title}</Text>
      <Text fontWeight="bold">{e.price}</Text>
    </Stack>
  </CardBody>
    </Card>
    </Link>       

)

})}

</div>
    
    
    </>
    
  )
}

export default Product