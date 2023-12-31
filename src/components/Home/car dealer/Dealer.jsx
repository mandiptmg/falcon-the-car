import img1 from '../../../assets/cars/bmw.png';
import img2 from '../../../assets/cars/supra.png';
import img3 from '../../../assets/cars/Bugatti Chiron.png';
import img4 from '../../../assets/cars/mercedes.png';
import img5 from '../../../assets/cars/Ferrari.png';
import img6 from '../../../assets/cars/mclaren.png';
import img7 from '../../../assets/cars/gtr.png';
import img8 from '../../../assets/cars/royal rolls.png';
import img9 from '../../../assets/cars/Lamborghini.png';
import { useState } from 'react';

const data =[
 {img:img1, title:'bmw', desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
 {img:img2, title:'Supra', desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
 {img:img3, title:'Bugatti-Chiron', desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
 {img:img4, title:'Mercedes Benz', desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
 {img:img5, title:'Ferrari', desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
 {img:img6, title:'McLaren', desc:'Lorem ipsum dolor sitLorem ipsum dolor sit amet, consectetur adipisicing elit.'},
 {img:img7, title:'Nissan-GTR', desc:'Lorem ipsum dolor sitLorem ipsum dolor sit amet, consectetur adipisicing elit.'},
  {img:img8, title:'Ghost Royal Royce', desc:'Lorem ipsum dolor sitLorem ipsum dolor sit amet, consectetur adipisicing elit.'},
   {img:img9, title:'Lambroghini', desc:'Lorem ipsum dolor sitLorem ipsum dolor sit amet, consectetur adipisicing elit.'},
]

const Dealer = () => {
 const [show,setShow] = useState()
  return (
    <div className='pt-20 mb-40'>
      <div className=' grid place-content-center'>
        <div className='max-w-md'>
          <h6
            data-aos='fade-up'
            className='text-sm text-blue-400 text-center font-semibold uppercase'
          >
            useful for car dealer
          </h6>
          <h1
            data-aos='fade-up'
            className='md:text-4xl text-center text-2xl font-bold my-4 '
          >
            Welcome to Falcon Auto Showroom
          </h1>
          
        </div>
      </div>
      <div data-aos='fade-left' className='grid place-items-end'>
        <button
          onClick={() => setShow(!show)}
          className='capitalize hover:bg-black/50 px-3 text-white py-1 bg-black'
        >
          {show ? 'less' : 'more'} see
        </button>
      </div>
      <div className='grid md:grid-cols-3 items-center gap-4 '>
        {show
          ? data.map((item, index) => {
              const { title, img, desc } = item
              return (
                <article data-aos='fade-up' className='p-4' key={index}>
                  <img
                    src={img}
                    alt={title}
                    className='w-full h-full aspect-square object-contain -scale-x-10'
                  />
                  <div className='text-center'>
                    <h1 className='text-lg font-semibold capitalize'>
                      {title}
                    </h1>
                    <p className='text-sm text-gray-500'>{desc}</p>
                  </div>
                </article>
              )
            })
          : data
              .map((item, index) => {
                const { title, img, desc } = item
                return (
                  <article data-aos='fade-up' className='p-4' key={index}>
                    <img
                      src={img}
                      alt={title}
                      className='w-full h-full aspect-square object-contain -scale-x-10'
                    />
                    <div className='text-center'>
                      <h1 className='text-lg font-semibold capitalize'>
                        {title}
                      </h1>
                      <p className='text-sm text-gray-500'>{desc}</p>
                    </div>
                  </article>
                )
              })
              .slice(0, 3)}
      </div>
    </div>
  )
}

export default Dealer