import React, { useEffect, useState } from 'react'
import { Card,Text, Image, CardBody, Stack} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function Product() {
    const[product,setProduct]=useState([])
    

    async function fetchproduct(){
        let res = await fetch("http://localhost:3000/women")
        let data = await res.json()
        setProduct(data)
        console.log(data)
    }

useEffect(()=>{
        fetchproduct()
},[])


  return (
    <>

    <div className=' w-[70%] grid  grid-cols-2  lg:grid-cols-4 m-auto ' >

    {product.map((e,id)=>{
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