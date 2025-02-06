import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "/logo.png"
import { IoMdMenu } from "react-icons/io";
import { FaTimes } from "react-icons/fa"
import { IoSearchOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { RiHeart3Line } from "react-icons/ri";
import { PiBagSimpleBold } from "react-icons/pi";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Portal,
} from '@chakra-ui/react'
import { ClassNames } from "@emotion/react";


export default function Navbar() {

  const [Menu, setMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
  const [user, setUser] = useState(null); // Track user info
  const navigate = useNavigate();

  useEffect(() => {
    // Example of checking login status (you may need to adjust this according to your authentication logic)
    const user = localStorage.getItem('user');
    if (user) {
      setIsLoggedIn(true);
      setUser(JSON.parse(user));
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    // Clear user data from local storage or any other auth storage
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUser(null);
    navigate('/login');
  };


  const toggleMenu = () => {
    setMenu(!Menu)
  }

  

  return (
    <>
      {/* nav 1 */}
      <div className=" mt-1 hidden md:flex  justify-end mr-28">
        <div className="h-6 border-l-2 border-gray-300 mr-3"></div>
        <Link className=""> Marketplace</Link>

        <div className="h-6 border-l-2 border-gray-300 ml-3"></div>

        <Link className="ml-4 border-1 border-custom-gray-light ">Help & FAQs</Link>

        <div className="h-6 border-l-2 border-gray-300 ml-3"></div>

        <Link>
          <img src="https://assets.asosservices.com/storesa/images/flags/in.png" alt="india" className="h-4 ml-4 mt-1 " />
        </Link>

      </div>

      {/* nav 2 */}

      <div className="flex  justify-between border-2 mt-1 bg-custom-gray h-16 ">



        {/* menubar */}


        <div className="md:hidden block mt-4 ml-3 lg:hidden">
          <button className="" onClick={toggleMenu}>
            {Menu ? (
              <FaTimes size={25} className="text-white" />
            ) : (
              <IoMdMenu size={25} className="text-white" />
            )}
          </button>
        </div>

        {Menu && (
          <div className=" bg-white w-56 md:hidden block ">

            <div className="flex">

              <Link to='/women' className="m-2">HOME</Link>
              <div className="  h-4 border-l-2 border-gray-400 mt-3 "></div>
              <Link to='/women' className="m-2">WOMEN</Link>

              <div className="  h-4 border-l-2 border-gray-400 mt-3 "></div>

              <Link to='/men' className="m-2"> MEN</Link>
            </div>


          </div>
        )}

        {/* menubar/- */}

        <div className="text-white flex ">

          <div className="  w-20 ml-4 mt-4 lg:ml-20">
            <Link to='/women'>
              <img src={logo} alt="" />
            </Link>
          </div>

          <div className="  hidden md:block  h-15 border-l-2 border-gray-600 ml-5 "></div>

          <div className=" hidden md:flex items-center justify-center w-24 gap-1 hover:bg-custom-gray-light ">

            <Link to='/women'>
              <h3 className=" ">WOMEN</h3>
            </Link>
          </div>

          <div className="  hidden md:block  h-15 border-l-2 border-gray-600 "></div>
          <div className=" hidden md:flex items-center justify-center w-24 hover:bg-custom-gray-light " >
            <Link to='/men'>
              <h3 className=" ">MEN</h3>
            </Link>
          </div>

          <div className="  hidden md:block  h-15 border-l-2 border-gray-600 "></div>

        </div>

        {/* search bar */}

        <div className="  hidden  md:flex items-center h-9 mt-3 mr-7 rounded-3xl   bg-white  w-5/6 border-l ml-10  ">
          <input type="text" className=" w-11/12 h-9 ml-8 hidden md:block  none;  rounded-3xl  border-none focus:outline-none  " placeholder="Search for items and brands" />
          <IoSearchOutline size={25} className="  " />
        </div>



        {/* search bar */}


        <div className="flex relative   mr-28 gap-5  items-center justify-center">

          <div className="ml-20 lg:ml-0">
            <Link >
              <IoSearchOutline size={25} className="  text-white  md:hidden block" />
            </Link>
          </div>

          <div className=" " >
            <Link>

            {/* <Popover>
      <PopoverTrigger>
        <button className="bg-blue-500 text-white py-2 px-4 rounded">User Menu</button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader className="flex font-semibold mt-2 ml-6">
          User's Detail
          <PopoverCloseButton className="ml-2 border-4" />
        </PopoverHeader>
        <hr />
        <PopoverArrow />
        <PopoverBody>
          <Link to="/signup">
            <button
              className="bg-oran text-blue-500 underline font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign Up
            </button>
          </Link>
          <Link to='/login'>
            <button
              className="text-blue-500 underline font-bold py-2 px-4 rounded focus:outline-none"
              type="button"
            >
              Log In
            </button>
          </Link>
          <button
            className="bg-red-500 text-white font-bold py-2 px-4 rounded mt-2"
            onClick={handleLogout}
          >
            Log Out
          </button>
        </PopoverBody>
        <hr />
        <PopoverFooter className="font-semibold text-center">Click here 👆</PopoverFooter>
      </PopoverContent>
    </Popover> */}

              <Popover placement="bottom">

                <PopoverTrigger>

                  <FaRegUser size={25} className="text-white" />
                </PopoverTrigger>

                <PopoverContent

                  mt="46"
                  bg="white"
                  boxShadow="md"
                  borderRadius="6"
                >

                  <PopoverHeader className="flex font-semibold mt-2 ml-6">User's Detail
                    <PopoverCloseButton className=" ml-2 border-4" />
                  </PopoverHeader>
                  <hr />
                  <PopoverArrow />
                  <PopoverBody>
                  {isLoggedIn ? (
                    <>
                      <div>Welcome, {user.name}</div>
                      <button
                        className="bg-red-500 text-white font-bold py-2 px-4 rounded mt-2"
                        onClick={handleLogout}
                      >
                        Log Out
                      </button>
                    </>
                  ) : (
                    <>
                      <Link to="/signup">
                        <button
                          className="bg-oran text-blue-500 underline font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                          type="button"
                        >
                          Sign Up
                        </button>
                      </Link>
                      <Link to='/login'>
                        <button
                          className="text-blue-500 underline font-bold py-2 px-4 rounded focus:outline-none"
                          type="button"
                        >
                          Log In
                        </button>
                      </Link>
                    </>
                  )}
                </PopoverBody>
                  <hr />
                  <PopoverFooter className=" font-semibold text-center">Click here 👆 </PopoverFooter>
                </PopoverContent>

              </Popover>


            </Link>
          </div>

          <div className="">
            <Link to='/fav'>
              <RiHeart3Line size={25} className="text-white" />
            </Link>
          </div>

          <div className="">
            <Link to='/cart'>
              <PiBagSimpleBold size={25} className="text-white" />
            </Link>
          </div>

        </div>


      </div>

      {/* nav 3 */}


      <div className=" hidden md:flex  bg-custom-gray-light pl-32 gap-5 text-slate-100 h-14  ">
        <Link className="mt-4"> New in</Link>
        <Link className="mt-4"> Clothing</Link>
        <Link className="mt-4"> Trending</Link>
        <Link className="mt-4"> Dresses</Link>
        <Link className="mt-4">Shoes</Link>
        <Link className="mt-4">Face + Body</Link>
        <Link className="mt-4">Accessories</Link>
        <Link className="mt-4">Brand</Link>
        <Link className="mt-4">Sportswear</Link>
        <Link className="mt-4">Topshop</Link>
        <Link className="mt-4">Sale</Link>
      </div>


      {/* nav4 */}


      <div className=" hidden md:flex">

        <div className="text-center bg-custom-yellow w-1/2">
          <Link className="mt-4 inline-block"> UP TO 30% OFF TEES, SHORTS AND MORE! </Link>
        </div>

        <div className="text-center bg-black w-1/2 text-white h-14  ">
          <Link className=" mt-4 inline-block">FREE WORLDWIDE DELIVERY</Link>
        </div>

      </div>





    </>



  )

}
