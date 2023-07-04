import React from 'react'

const About = () => {
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
              Talk about company here. A bit of history, where you work, and anything else Lorem, ipsum dolor sit amet 
              consectetur adipisicing elit. Veniam, in ducimus? Praesentium ex quam sapiente omnis quisquam dolores odit 
              cum eius, inventore nemo error iusto adipisci quia obcaecati voluptates laborum? Lorem ipsum dolor sit, amet 
              consectetur adipisicing elit. At, itaque optio eius quibusdam inventore cupiditate deleniti iure unde nulla 
              perferendis nostrum ad voluptas in, dolores blanditiis fugit, ut quod soluta? Lorem ipsum dolor sit amet 
              consectetur adipisicing elit. Ut repudiandae quis dolorum sequi perferendis, eaque minus harum facilis amet? 
              Explicabo officia iste expedita accusantium dignissimos, sapiente ratione odit ut nihil. Lorem ipsum dolor 
              sit amet consectetur adipisicing elit. Nisi vel nobis quos excepturi odio assumenda dolore fugit voluptatem 
              dolorem quis dignissimos eos sint incidunt quo sit, nihil eaque ipsam optio.
            </div>
          </div>

          <div className='border-2 border-black-100 rounded-lg px-[30vw] md:px-[12vw] py-[20vh]' style={{ backgroundImage: 'url("/stockone.jpg")'}}>
            
          </div>
        </div>

        <div className='pb-5 md:pb-0'>
          <a href='/Contact' className='border-2 border-black-100 rounded-lg px-5 py-2 font-bold hover:text-red-100 hover:border-red-100'>
            Contact Us
          </a>
        </div>
      </div>
    </div>
  )
}

export default About