import React from 'react'

const Contact = () => {
  return (
    <div className='mx-[10%] my-[3%]'>
      <div className='text-black-100 font-bold text-2xl pb-[5vh]'>
        Need help with your roof? Get in contact with us: 
      </div>

      <div className='flex flex-col justify-start items-start gap-4 border-2 border-black-100 rounded-lg p-5'>
        <div className='font-bold text-black-100 text-lg mx-[5%]'>
          Send us an email here:
        </div>

        <div className='w-full'>
          <form className='mx-[15%] flex flex-col'>
            <div className='flex flex-col md:flex-row justify-between items-start gap-4 md:gap-0'>
              <div className='flex flex-col justify-center items-start gap-6'>
                <div className='flex flex-col'>
                  <label>Full Name</label>
                  <input type='text' name='name' className='border-2 border-black-100 rounded-lg px-5 font-normal w-[100%] md:w-[20vw]' />
                </div>

                <div className='flex flex-col'>
                  <label>Email</label>
                  <input type='email' name='email' className='border-2 border-black-100 rounded-lg px-5 font-normal w-[100%] md:w-[20vw]' />
                </div>

                <div className='flex flex-col'>
                  <label>Phone</label>
                  <input type='text' name='phone' className='border-2 border-black-100 rounded-lg px-5 font-normal w-[100%] md:w-[20vw]' />
                </div>
              </div>

              <div className='flex flex-col'>
                <label>Message</label>
                <textarea name='message' rows={7} className='border-2 border-black-100 rounded-lg px-5 font-normal w-[100%] md:w-[25vw]' />
              </div>
            </div>

            <input 
              type='submit' 
              value='Send' 
              className='text-black-100 font-bold cursor-pointer mt-[5vh] mx-[40%] border-2 border-black-100 rounded-lg hover:text-red-100 hover:border-red-100' 
            />
          </form>
        </div>

        <div className='font-bold text-black-100 text-lg mx-[5%]'>
          Or give us a call:
        </div>

        <div className='mx-[5%]'>
          Phone information here
        </div>
      </div>
    </div>
  )
}

export default Contact