import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  let navigate = useNavigate();

  function handleClick(link) {
    navigate(link);
  }

  return (
    <div>
      <div className='w-full h-[70vh]' 
      style={{ backgroundImage: 'url("/stockthree.webp")', backgroundSize: 'cover', backgroundPosition: 'center'}}
      >
        <div className='h-full backdrop-brightness-[40%] p-[15vh] text-white font-bold flex flex-col justify-center items-center gap-[10vh]'>
          <div className='text-3xl md:text-6xl text-center'>
            Elite-Pro Construction Inc.
          </div>

          <div className='text-lg md:text-2xl'>
            Your Premier Destination for Roofing
          </div>

          <div className='text-lg text-center md:text-xl'>
            <button onClick={() => handleClick('/Contact')} className='border-2 border-white rounded-lg px-5 py-2 font-bold hover:text-red-100 hover:border-red-100'>
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <div className='w-[70%] mx-auto md:text-center px-5 py-[4rem] text-lg'>
        Based out of Georgia, Elite-Pro Construction Inc. is your premier destination when it comes to roofing. 
        With decades worth of expertise and experience, Elite-Pro specializes in roof replacements, repairs, installations, and gutters/down spouts,
        while ensuring the utmost protection and longevity for your home. Our dedicated team of professionals prioritizes attention to detail, 
        top-quality materials, and customer satisfaction in every project we undertake. Elite-Pro Construction Inc. is your trusted partner
        for all your roofing needs.
      </div>

      <div className='w-full mx-auto px-5 pb-[4rem]'>
        <div className='flex flex-col md:flex-row justify-center text-start gap-12'>
          <div className='font-bold border-2 border-black-100 rounded-lg' 
          style={{ backgroundImage: 'url("/stockone.jpg")', backgroundSize: 'cover' }}
          >
            <div className='w-[100%] md:w-[20vw] px-5 py-[10vh] backdrop-brightness-[70%] text-white'>
              <div>Roof Replacements</div>
              <div></div>
            </div>
          </div>

          <div className='font-bold border-2 border-black-100 rounded-lg' 
          style={{ backgroundImage: 'url("/stocktwo.jpg")', backgroundSize: 'cover' }}
          >
            <div className='w-[100%] md:w-[20vw] px-5 py-[10vh] backdrop-brightness-[70%] text-white'>
              <div>Roof Repairs</div>
              <div></div>
            </div>
          </div>

          <div className='font-bold border-2 border-black-100 rounded-lg' 
          style={{ backgroundImage: 'url("/stockthree.webp")', backgroundSize: 'cover' }}
          >
            <div className='w-[100%] md:w-[20vw] px-5 py-[10vh] backdrop-brightness-[70%] text-white'>
              <div>Roof Installations</div>
              <div></div>
            </div>
          </div>

          <div className='font-bold border-2 border-black-100 rounded-lg' 
          style={{ backgroundImage: 'url("/stockone.jpg")', backgroundSize: 'cover' }}
          >
            <div className='w-[100%] md:w-[20vw] px-5 py-[10vh] backdrop-brightness-[70%] text-white'>
              <div>Roof Gutters/Down Spouts</div>
              <div></div>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full h-[130vh] md:h-[60vh] bg-beige-100'>
        <div className='text-2xl font-bold text-black-100 px-[5vh] pt-[2vh]'>
          Gallery
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 text-center p-[5vh]'>
          <div className='rounded-lg' style={{ backgroundImage: 'url("/stockone.jpg")', backgroundSize: 'cover' }}>
            <div className='py-[16.5vh] hover:backdrop-brightness-[70%] rounded-lg border-2 border-black-100 '></div>
          </div>
          <div className='border border-black-100 rounded-lg py-[15vh]'>2</div>
          <div className='border border-black-100 rounded-lg py-[15vh]'>3</div>
        </div>

        {/* Only show a few pics and add a button that says view more and takes you to Gallery page*/}
        <div className='text-lg md:text-xl text-center'>
          <button onClick={() => handleClick('/Gallery')} className='border-2 border-black-100 rounded-lg px-5 py-2 font-bold hover:text-red-100 hover:border-red-100'>
            View More
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home