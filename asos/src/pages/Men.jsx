import React from 'react'
import { Link } from 'react-router-dom'

const Men = () => {
  return (
    <>
  
  <video autoplay loop muted className='mb-8 lg:w-[80%] lg:m-auto lg:mb-10 'controls autoPlay>
      <source  src='https://video.asos-media.com/Navigation/_content_HP_DESKTOP_WW_Flash9_1440xAuto_5000K.mp4'/>
      
    </video>



    <div className=' grid grid-cols-2  lg:grid-cols-4  lg:pb-14 lg:mx-[10%] gap-5 text-center mx-4 '>

    <a href="">
        <img src="https://content.asos-media.com/-/media/homepages/mw/2024/may/28-gbl/moment/mw_global_summer_linen_moment_870x1110.jpg" alt="" /> 
        <p className='mt-4 font-bold'>SUMMER LINEN</p>
        <p className=' '>Laid-back looks</p>        
    </a>


    <a href="">
        <img src="https://content.asos-media.com/-/media/homepages/mw/2024/may/28-gbl/moment/mw_global_hot_tropics_moment_870x1110v3.jpg" alt=""/>
        <p className='mt-4 font-bold'>SUNDOWN STYLE</p>
        <p>For your summer nights</p>
    </a>


    <a href="">
        <img src="https://content.asos-media.com/-/media/homepages/unisex/events-2024/may/pride/global-cat-tray-image/2024_homepage_moment_pride_unisex_870x1110_v3.jpg" alt=""/>
        <p className='mt-4 font-bold'>CELEBRATING PRIDE MONTH!</p>
        <p>The Artists' Collection</p>
     </a>


        <a href="">
        <img src="https://content.asos-media.com/-/media/homepages/mw/2024/may/28-gbl/moment/mw_global_carhartt_moment_870x1110.jpg" alt=""/>
        <p className='mt-4 font-bold'>CARHARTT WIP</p>
        <p >Streetwear legends</p>       
    </a>
 
</div>




    <div className='bg-[#F799BA]'>
        <a href="">

        <div className='flex flex-col items-center justify-center py-7 mt-6  '>

            <p className='text-3xl font-black '>
                <i>

               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UP TO 30% OFF<br />SUNSHINE MUST-HAVES</i></p>
               <p className='font-mono text-[10px] mt-4'>Limited time only. selected styles marked down as shown.</p>

        </div>
        </a>
    </div>


    <div className='grid grid-cols-1  lg:grid-cols-2 mt-20 pb-20  lg:pb-20  lg:mx-[16%] gap-10 text-center mx-4' >
        <Link to="/menproduct" >
            <img src="https://content.asos-media.com/-/media/homepages/mw/2024/may/28-gbl/moment/mw_global_topman_moment_870x1110.jpg" alt=""/>
            <h2 className='font-bold text-[26px] mt-4'>TOPSHOP</h2>
            <p className='p-4 text-[17px]'>Headliner energy</p>
            <br />
            <span className='border-2 px-12 py-4 border-black font-bold'>SHOP NOW</span>
        </Link>
        

        <Link to="/menproduct">
            <img  src="https://content.asos-media.com/-/media/homepages/mw/2024/may/28-gbl/moment/mw_global_new_arrivals_moment_870x1110.jpg" alt=""/>
            <h2  className='font-bold text-[26px] mt-4'>NEW IN</h2>
            
            <p className='p-4 text-[17px]'>The freshest 'fits</p>
            <br  />
            
            <span className='border-2 border-black px-12 py-4 font-bold'>SHOP NOW</span>
        </Link>
              
</div>








    <div className='bg-gradient-to-r from-custom-bgreen to-custom-green'>
        <a href="">

        <div className='flex flex-col items-center justify-center gap-3 py-4 font-bold'>


            {/* <p className='mb-4 ml-44'> */}
                <mark className='rounded-3xl bg-transparent border-2 border-black lg:py-1 lg:w-[16%] lg:text-center lg:text-2xl'>&nbsp;&nbsp;&nbsp;THE ASOS APP&nbsp;&nbsp;&nbsp;</mark>
            {/* </p> */}
            <p className='lg:text-3xl '>
                Notifications on your orders and returns?<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;App-solutely!
                
            </p>
            {/* <p className='mt-4 ml-[16.8%]'> */}
                <mark className='rounded-3xl bg-black text-white py-1  lg:w-[18%] lg:text-center lg:text-2xl'>&nbsp;&nbsp;DOWNLOAD NOW&nbsp;&nbsp;</mark>
            {/* </p> */}

        </div>
        </a>
</div>


  <div className=' '>
        <h1 className='font-bold text-2xl text-center mt-12'>TRENDING BRANDS</h1>

    
    <div className='grid grid-cols-2  lg:grid-cols-6 p-4 lg:p-10 lg:mx-20'>

          <a href="" >
              <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/tommy-hilfiger-hp-logos-256x256.jpg" alt="Tommy Hilfiger" className='w-72'/> 
          </a>
       
       
          <a href="">   
              <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/north-face.png" alt="The North Face" className='w-72'/>   
          </a>
        
        
          <a href="">    
              <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/adidas-hp-logos-256x256---v2.png" alt="Adidas" className='w-72'/>   
          </a>
        
        
          <a href="">
              <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/carhartt-hp-logos-256x256.jpg" alt="Carhartt" className='w-72'/>  
          </a>
        
        
          <a href="">   
              <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/ellesse-hp-logos-256x256.jpg" alt="Ellesse" className='w-72'/> 
          </a>
       
          <a href="">
              <img src=" https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/dr-martens-hp-logos-256x256.jpg" alt="Dr Martens" className='w-72'/>
          </a>
      
    </div>
      
  </div>
    </>
  )
}

export default Men




















