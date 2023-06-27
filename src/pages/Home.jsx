import React from 'react'
import stock from '../assets/stockone.jpg'

//const cards = [
//  {title: 'Roof Replacements', desc: 'description', img: 'stockone.jpg'},
//  {title: 'Roof Repairs', desc: 'description', img: 'stocktwo.jpg'},
//  {title: 'Roof Installations', desc: 'description', img: 'stockthree.webp'},
//  {title: 'Roof Gutters/Down Spouts', desc: 'description', img: ''},
//]

const Home = () => {
  return (
    <div>
      <div className='w-full h-[60vh] bg-[url(src/assets/stockthree.webp)] bg-cover bg-center'>
        <div className='h-full backdrop-brightness-[40%] p-[15vh] text-white font-bold flex flex-col justify-center items-center gap-[10vh]'>
          <div className='text-6xl text-center'>
            Elite-Pro Construction Inc.
          </div>

          <div className='text-2xl'>
            Slogan Here
          </div>

          <div className='text-center text-xl'>
            <a href='/Contact' className='border-2 border-white rounded-lg px-5 py-2 font-bold hover:text-red-100 hover:border-red-100'>
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <div className='w-[70%] mx-auto text-center p-5 text-lg'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia laudantium minima dolorem consequuntur dignissimos, 
        eaque porro itaque voluptas sed? Beatae exercitationem quibusdam similique eos harum, ea alias. Tenetur, consectetur 
        reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis provident, ratione expedita quaerat 
        accusamus explicabo inventore sequi recusandae modi, error omnis enim itaque cupiditate distinctio doloremque aut deserunt 
        atque! Voluptates.
      </div>

      <div className='w-full mx-auto p-5'>
        <div className='flex flex-row justify-center text-start gap-12'>
          <div className='font-bold border-2 border-black-100 rounded-lg bg-[url(src/assets/stockone.jpg)] bg-cover'>
            <div className='w-[20vw] px-5 py-[10vh] backdrop-brightness-[70%] text-white'>
              <div>Roof Replacements</div>
              <div>description</div>
            </div>
          </div>

          <div className='font-bold border-2 border-black-100 rounded-lg bg-[url(src/assets/stocktwo.jpg)] bg-cover'>
            <div className='w-[20vw] px-5 py-[10vh] backdrop-brightness-[70%] text-white'>
              <div>Roof Repairs</div>
              <div>description</div>
            </div>
          </div>

          <div className='font-bold border-2 border-black-100 rounded-lg bg-[url(src/assets/stockthree.webp)] bg-cover'>
            <div className='w-[20vw] px-5 py-[10vh] backdrop-brightness-[70%] text-white'>
              <div>Roof Installations</div>
              <div>description</div>
            </div>
          </div>

          <div className='font-bold border-2 border-black-100 rounded-lg bg-[url(src/assets/stockone.jpg)] bg-cover'>
            <div className='w-[20vw] px-5 py-[10vh] backdrop-brightness-[70%] text-white'>
              <div>Roof Gutters/Down Spouts</div>
              <div>description</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home