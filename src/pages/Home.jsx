import React from 'react'

const cards = [
  {title: 'Roof Replacements', desc: 'description'},
  {title: 'Roof Repairs', desc: 'description'},
  {title: 'Roof Installations', desc: 'description'},
  {title: 'Roof Gutters/Down Spouts', desc: 'description'},
]

const Home = () => {
  return (
    <div>
      <div className='w-full p-[15vh] bg-black-300'>
        <div className='text-black-100 font-bold text-4xl text-center'>
          Elite-Pro Construction Inc.

          <div className='text-2xl pt-[6vh]'>
            Slogan Here
          </div>
        </div>
        <div className='text-black-100 text-center pt-[15vh]'>
          <a href='/Contact' className='border-2 border-black-100 rounded-lg px-5 py-2 font-bold hover:text-red-100 hover:border-red-100'>
            Contact Us
          </a>
        </div>
      </div>

      <div className='w-[70%] mx-auto text-center p-5'>
        Small About Info Here About Company
      </div>

      <div className='w-[90%] mx-auto p-5'>
        <div className='flex flex-row justify-center text-center gap-16'>
          {cards.map((card, index) =>
            <div key={index} className='border-2 border-black-100 rounded-lg w-[20vw] px-5 py-[10vh]'>
              <div>{card.title}</div>
              <div>{card.desc}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home