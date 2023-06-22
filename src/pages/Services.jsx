import React from 'react'
import ServiceCard from '../components/ServiceCard'
import reactPic from '../assets/react.svg'

const Services = () => {
  return (
    <div className='mx-[10%]'>
      <div className='flex flex-col justify-center items-start gap-12 mt-[3%]'>
        <div className='text-black-100 font-bold text-2xl border-b-2 border-black-100'>
          Services We Provide
        </div>

        <ServiceCard name='name' desc='description' image={reactPic} />
        <ServiceCard name='name' desc='description' image={reactPic} />
        <ServiceCard name='name' desc='description' image={reactPic} />
        <ServiceCard name='name' desc='description' image={reactPic} />
      </div>
    </div>
  )
}

export default Services