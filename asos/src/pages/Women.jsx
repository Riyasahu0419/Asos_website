import React from 'react'

const Women = () => {
  return (
    <>
    <video autoplay loop muted className='w-4/5 mb-10 ml-40'controls autoPlay>
      <source  src='https://video.asos-media.com/Navigation/_content_HP_DESKTOP_WW_Flash9_1440xAuto_5000K.mp4'/>
    </video>




    <div className='bg-gradient-to-r from-custom-bgreen to-custom-green font-bold text-2xl flex-row pl-[32%] p-10'>
        
        <a href="">

            <p className='mb-4 ml-44'>
                <mark className='rounded-3xl bg-transparent border-2 border-black  px-3'>&nbsp;&nbsp;&nbsp;THE ASOS APP&nbsp;&nbsp;&nbsp;</mark>
            </p>
            <p className='text-3xl mr-10'>
                Notifications on your orders and returns?<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;App-solutely!
                
            </p>
            <p className='mt-4 ml-[16.8%]'>
                <mark className='rounded-3xl bg-black text-white p-1 px-3'>&nbsp;&nbsp;DOWNLOAD NOW&nbsp;&nbsp;</mark>
            </p>

        </a>
      

</div>




<div className='hidden md:block '>
        <h1 className='font-bold text-2xl text-center mt-12'>TRENDING BRANDS</h1>

    <ul className='flex  gap-5 mx-24 my-6 pb-4' >
        <li>
          <a href="" >
              <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/monkl-hp-logos-256x256.jpg" alt="Monki" className='w-72'/>
          </a>
        </li>
        <li>
          <a href="">
              <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/never-fully-dressed-hp-logos-256x256.png" alt="Never Fully Dressed" className='w-72'/>
          </a>
        </li>
        <li>
          <a href=""> 
              <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/1x12x---test.png" alt="Topshop" className='w-72'/>
          </a>
        </li>
        <li>
          <a href="">
              <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/reclaimed-vintage-hp-logos-256x256.jpg" alt="Reclaimed Vintage" className='w-72'/>
          </a>
        </li>
        <li>
          <a href="">
              <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/collusion-hp-logos-256x256.jpg" alt="Collusion" className='w-72'/>
          </a>
        </li>
        <li>
          <a href="">
              <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/weekday-hp-logos-256x256.jpg" alt="Weekday" className='w-72'/>
          </a>
      </li>

    </ul>
  </div>

    </>
  )
}

export default Women