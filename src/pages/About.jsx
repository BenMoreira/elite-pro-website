import React from 'react'

const About = () => {
  return (
    <div className='mx-[10%]'>
      <div className='flex flex-col justify-center items-center gap-12 mt-[3%]'>
        <div className='text-black-100 font-bold text-2xl border-b-2 border-black-100'>
          About Elite-Pro Construction Inc.
        </div>

        <div className='flex flex-row justify-between items-start gap-12'>
          <div className='border-2 border-black-100 rounded-lg px-[12vw] py-[25vh]'>
            About Info Here
          </div>

          <div className='border-2 border-black-100 rounded-lg px-[12vw] py-[20vh]'>
            Image Here
          </div>
        </div>

        <div>
          <a href='/Contact' className='border-2 border-black-100 rounded-lg px-5 py-2 font-bold hover:text-red-100 hover:border-red-100'>
            Contact Us
          </a>
        </div>
      </div>
    </div>
  )
}

export default About