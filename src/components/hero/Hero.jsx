import { FaRegPlayCircle, FaChevronRight } from 'react-icons/fa'
import img from '../../assets/lovepik.png'
import Navbar from '../header and footer/Navbar'
const hero = () => {
  return (
    <div id='home' className='min-h-[80vh] mb-10 md:mb-0 my-auto'>
      <Navbar />
      <div className='grid mt-10 md:mt-14 gap-y-7 md:pt-16 items-center md:grid-cols-2'>
        <div data-aos='fade-right' className='h-full '>
          <button className='text-sm font-semibold uppercase text-blue-400'>
            <a href='#art'>art of detailing</a>
          </button>
          <div className='md:max-w-xs'>
            <p className='mt-4 font-bold   text-3xl md:text-5xl'>
              Welcome to Car Buying Made Simple
            </p>
            <p className='mt-6 text-sm font-semibold text-gray-700'>
              Get more value in the affordable seven-passenger Chrysler Pacofoca
              Hybird.The exceptional and
            </p>
          </div>
          <div className='flex mt-6 items-center gap-4'>
            <button className='text-base hover:bg-gray-400  font-semibold capitalize px-3 py-2  bg-black/90 text-white'>
              shop now
            </button>
            <button className='flex items-center gap-3 text-base font-semibold capitalize px-2 hover:bg-gray-400 py-1 '>
              <FaRegPlayCircle className='w-8 h-8' /> play video
            </button>
          </div>
        </div>
        <div className='realtive' data-aos='fade-left' data-aos-delay='1000'>
          <img
            src={img}
            alt='Honda Civic LX Vehicle'
            className=' w-full h-full drop-shadow-2xl'
          />
          <button className='text-sm absolute -right-24 md:-right-28  rotate-90 bottom-[50%] font-mono text-black/50  uppercase tracking-[0.3rem]'>
            <a href='#art' className=' flex gap-2'>
              scroll down <FaChevronRight />
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default hero
