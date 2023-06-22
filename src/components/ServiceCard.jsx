import React from 'react'

const ServiceCard = ({name, desc, image}) => {
  return (
    <div className='w-[80%] mx-auto'>
        <div className='flex flex-row justify-between items-start gap-12'>
            <div>
                <img src={image} alt='image' className='w-[150px]' />
            </div>

            <div className='flex flex-col items-end gap-2 text-black-100'>
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