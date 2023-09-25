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
          desc="Our commercial roof replacement services are tailored to businesses seeking duarable, efficient, and cost-effective 
          roofing solutions. With a keen understanding of the unique demands of commercial properties, our team conducts a comprehensive
          assessment of the roof, recommending the most appropriate materials and systems to maximize energy efficiency and minimize 
          long-term maintenance costs. Our skilled professionals execute the replacement with precision, ensuring minimal disruption 
          to your operations."
          image='/stockone.jpg' 
        />

        <ServiceCard 
          name='Roof Repairs' 
          desc="We understand that your business relies on a sturdy and secure roofing system, which is why our commercial roof repair 
          services are designed to minimize downtime and protect your investment. Our team will conduct a thorough 
          inspection to pinpoint the issues, whether it's leaks, storm damage, or general wear and tear. Using high-quality materials, 
          we execute repairs promptly, ensuring your business operations can continue without interruption."
          image='/stockone.jpg' 
        />

        <ServiceCard 
          name='Roof Installations' 
          desc="We specialize in delivering top-notch roofing solutions tailored to the unique needs of commercial properties. Our 
          comprehensive approach begins with an assessment of your business requirements and the specific challenges your 
          roof may face. We then recommend the most efficient and cost-effective roofing systems, taking into account energy efficiency 
          and long-term durability. Our seasoned professionals execute the installation with precision, ensuring minimal disruption to 
          your operations. With Elite-Pro Construction Inc., you can expect a state-of-the-art commercial roof that not only enhances the 
          aesthetics of your property but also provides superior protection, backed by our commitment to quality and excellence." 
          image='/stockone.jpg' 
        />

        <ServiceCard 
          name='Roof Gutters/Down Spouts' 
          desc="We understand that a well-functioning commercial roofing system involves more than just the roof itself—it's also about 
          efficient water management. Our commercial roof gutters and downspouts are expertly designed to channel rainwater away from your 
          building, safeguarding it against potential water damage. We offer a range of durable and high-performance gutter and downspout 
          solutions customized to your specific commercial property's needs. Our skilled team will assess your drainage requirements, 
          ensuring that water is efficiently directed away from the roof and foundation, mitigating the risk of leaks, structural damage, 
          and potential flooding." 
          image='/stockone.jpg' 
        />
      </div>
    </div>
  )
}

export default Services