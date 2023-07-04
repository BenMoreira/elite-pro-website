import React from 'react'

const ServiceCard = ({name, desc, image}) => {
  return (
    <div className='w-[90%] mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-12 bg-beige-100 border border-beige-100 rounded-lg p-4'>
            <div>
                <img src={image} alt='image' className='w-[750px] rounded-lg' />
            </div>

            <div className='flex flex-col items-end gap-2 text-black-100 w-[100%] md:w-[160%]'>
                <div className='font-bold text-xl border-b border-black-100'>
                    {name}
                </div>

                <div className=''>
                    {desc}
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServiceCard