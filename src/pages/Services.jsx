import React from 'react'
import ServiceCard from '../components/ServiceCard'
import reactPic from '../assets/react.svg'

const Services = () => {
  return (
    <div className='mx-[10%] pb-[2vh]'>
      <div className='flex flex-col justify-center items-start gap-12 mt-[3%]'>
        <div className='text-black-100 font-bold text-2xl border-b-2 border-black-100'>
          Services We Provide
        </div>

        <ServiceCard 
          name='Roof Replacements' 
          desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia laudantium minima dolorem consequuntur dignissimos, 
          eaque porro itaque voluptas sed? Beatae exercitationem quibusdam similique eos harum, ea alias. Tenetur, consectetur 
          reiciendis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia laudantium minima dolorem consequuntur dignissimos, 
          eaque porro itaque voluptas sed? Beatae exercitationem quibusdam similique eos harum, ea alias. Tenetur, consectetur 
          reiciendis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia laudantium minima dolorem consequuntur dignissimos, 
          eaque porro itaque voluptas sed? Beatae exercitationem quibusdam similique eos harum, ea alias. Tenetur, consectetur 
          reiciendis.' 
          image='/stockone.jpg' 
        />

        <ServiceCard 
          name='Roof Repairs' 
          desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia laudantium minima dolorem consequuntur dignissimos, 
          eaque porro itaque voluptas sed? Beatae exercitationem quibusdam similique eos harum, ea alias. Tenetur, consectetur 
          reiciendis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia laudantium minima dolorem consequuntur dignissimos, 
          eaque porro itaque voluptas sed? Beatae exercitationem quibusdam similique eos harum, ea alias. Tenetur, consectetur 
          reiciendis.' 
          image='/stockone.jpg' 
        />

        <ServiceCard 
          name='Roof Installations' 
          desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia laudantium minima dolorem consequuntur dignissimos, 
          eaque porro itaque voluptas sed? Beatae exercitationem quibusdam similique eos harum, ea alias. Tenetur, consectetur 
          reiciendis.' 
          image='/stockone.jpg' 
        />

        <ServiceCard 
          name='Roof Gutters/Down Spouts' 
          desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia laudantium minima dolorem consequuntur dignissimos, 
          eaque porro itaque voluptas sed? Beatae exercitationem quibusdam similique eos harum, ea alias. Tenetur, consectetur 
          reiciendis.' 
          image='/stockone.jpg' 
        />
      </div>
    </div>
  )
}

export default Services