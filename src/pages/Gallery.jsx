import React from 'react'

const Gallery = () => {
  return (
    <div className='mx-[10%]'>
      <div className='flex flex-col justify-center items-start gap-4 mt-[3%] text-black-100'>
        <div className='font-bold text-2xl border-b-2 border-black-100'>
          Gallery of Completed Jobs
        </div>

        <div className='grid grid-cols-3 gap-4 w-full text-center p-[5vh]'>
          <div className='border border-black-100 rounded-lg py-[15vh]'>1</div>
          <div className='border border-black-100 rounded-lg py-[15vh]'>2</div>
          <div className='border border-black-100 rounded-lg py-[15vh]'>3</div>
          <div className='border border-black-100 rounded-lg py-[15vh]'>4</div>
        </div>
      </div>
    </div>
  )
}

export default Gallery