import React, { useEffect, useState } from 'react'
import { Card, Text, Image, CardBody, Stack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Product() {
  const [product, setProduct] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchProduct();
  }, []);

  async function fetchProduct() {
    try {
      let url = `https://mercurial-midnight-rainbow.glitch.me/Men`;
      let res = await axios.get(url);
      if (res.status!==200) {
        throw new Error(`HTTP error:${res.status}`)
      }

      setProduct(res.data);
      setFilteredProduct(res.data); // Set filtered product to all products initially

    } catch (error) {
      setError(error.message)
      console.log("there is some error , its fetching the data:",error)
    }
    finally { setLoading(false) }
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
              <option value="desc">Price High to Low</option>


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

              <option value="">select category</option>
              <option value="suits">Suits</option>
              <option value="shorts">Shorts</option>
              <option value="shirt">Shirt</option>
              <option value="T-shirts">T-Shirt</option>
              <option value="Knitwear & Sweats">Knitwear & Sweats</option>
              <option value="Vests">Vests</option>
              <option value="belts">Belts</option>
              <option value="cargo pants">Cargo pants</option>

            </select>
          </div>

        </div>

      </div>

      {loading ? (
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-red-500"></div>
        </div>
      ) : error ? (
        <div className="text-red-500 font-bold">Error: {error}</div>
      ) : (



        <div className=' w-[70%] grid  grid-cols-2  lg:grid-cols-4 m-auto ' >

          {filteredProduct.map((e, id) => {
            return (

              <Link to={`/productdetail/${e.id}`}>
                <Card maxW='sm' w="90%" mt="18"  >
                  <CardBody>
                    <Image
                      src={e.img} alt='' h="350px" />
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


      )




      }

    </>


  )
}

export default Product






