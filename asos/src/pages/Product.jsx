import React, { useEffect, useState } from 'react'
import { Card,Text, Image, CardBody, Stack} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Product() {
  const [product, setProduct] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetchProduct();
  }, []);

  async function fetchProduct() {
    let url = `https://mercurial-midnight-rainbow.glitch.me/women`;
    let res = await axios.get(url);
    setProduct(res.data);
    setFilteredProduct(res.data); // Set filtered product to all products initially
  }

  useEffect(() => {
    if (category) {
      const newCategory = product.filter((el) => el.category === category);
      setFilteredProduct(newCategory);
    } else {
      setFilteredProduct(product);
    }
  }, [category, product]);

  useEffect(() => {
    if (sort) {
      if (sort === "asc") {
        const sortedProduct = [...filteredProduct].sort((a, b) => a.price - b.price);
        setFilteredProduct(sortedProduct);
      } else if (sort === "desc") {
        const sortedProduct = [...filteredProduct].sort((a, b) => b.price - a.price);
        setFilteredProduct(sortedProduct);
      }
    }
  }, [sort, filteredProduct]);


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
            <option value="top">Top</option>
            <option value="shorts">Shorts</option>
            <option value="shirt">Shirt</option>
            <option value="jeans">Jeans</option>
            <option value="all in one">All in one</option>
            <option value="dresses">Dresses</option>
            
          </select>
        </div>

      </div>
     
    </div>
 
 
    <div className=' w-[70%] grid  grid-cols-2  lg:grid-cols-4 m-auto ' >

    {filteredProduct.map((e,id)=>{
        return(
          
     <Link to={`/productdetail/${e.id}`}>
    <Card maxW='sm' w="90%" mt="18"  >
    <CardBody>
    <Image
      src={e.img} alt=''  h="350px"  />
    <Stack>
      <Text>{e.title}</Text>
      <Text fontWeight="bold">Price: {e.price}</Text>
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