import React from 'react'
import { useNavigate } from 'react-router-dom';

const About = () => {
  let navigate = useNavigate();

  function handleClick(link) {
    navigate(link);
  }

  return (
    <div className='mx-[10%]'>
      <div className='flex flex-col justify-center items-center gap-12 mt-[3%]'>
        <div className='text-black-100 font-bold text-2xl border-b-2 border-black-100'>
          About Elite-Pro Construction Inc.
        </div>

        <div className='flex flex-col md:flex-row justify-between items-center md:items-start gap-12'>
          <div className='border-2 border-beige-100 rounded-lg p-[4vw] bg-beige-100'>
            <div className='font-bold text-xl pb-[2vh]'>
              Who We Are
            </div>

            <div>
              Welcome to Elite-Pro Construction Inc., your dedicated partner for all your commercial roofing needs. We're based out of 
              Georgia, but work all along the east coast of the United States. With decades 
              worth of experience, we've become a trusted company when it comes to delivering top-quality roofing services.
              At Elite-Pro Construction Inc., we understand the importance of a reliable and watertight roof for your business. Whether it's 
              a small repair, routine maintenance, or a complete roofing project, we take pride in providing cost-effective and 
              efficient solutions tailored to your unique requirements. Our skilled team is committed to ensuring your roofing systems 
              are durable and have longevity. Thank you for considering Elite-Pro Construction Inc. for your commercial roofing needs. 
              We're excited to have the opportunity to serve you and build a lasting relationship. Your trust drives us, and we're here 
              to protect your investment.
            </div>
          </div>

          <div className='border-2 border-black-100 rounded-lg px-[30vw] md:px-[12vw] py-[20vh]' style={{ backgroundImage: 'url("/stockone.jpg")'}}>
            
          </div>
        </div>

        <div className='pb-5'>
          <button onClick={() => handleClick('/Contact')} className='border-2 border-black-100 rounded-lg px-5 py-2 font-bold hover:text-red-100 hover:border-red-100'>
            Contact Us
          </button>
        </div>
      </div>
    </div>
  )
}

export default About