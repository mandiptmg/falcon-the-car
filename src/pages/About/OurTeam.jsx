import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
// import {FaFacebook,FaTwitter,FaLinkedin} from 'react-icons/fa'

const OurTeam = () => {
  return (
    <div className='bg-blue-950 py-20'>
      <div className='grid space-y-7 md:w-[80vw] w-[90vw] mx-auto text-white lg:grid-cols-[1.5fr,2fr] '>
        <div className='p-4 lg:max-w-sm  space-y-4'>
          <h1 className='font-medium text-blue-500'>MEET OUR TEAM</h1>
          <p className='text-5xl font-[roboto]'>Awesome People's Behind Us</p>
          <p className='text-base'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <button className='flex bg-gradient-to-r from-sky-400 to-blue-500 hover:scale-105 duration-500  p-2 capitalize items-center gap-2'>
            more team <HiOutlineArrowNarrowRight className='text-2xl' />
          </button>
        </div>
        <div className='sm:flex grid place-items-center justify-center text-white items-center gap-7'>
          <div className='bg-blue-500'>
            <div className='relative overflow-hidden w-full h-full '>
              <img
                src='https://demo.moxcreative.com/autokit/wp-content/uploads/sites/41/2021/06/young-asian-businesswoman-hold-with-notebook-computer-e1623128181638.jpg'
                alt=''
                className='sm:w-[300px] sm:h-[300px] object-cover'
              />  {/* <FaFacebook />
                  <FaTwitter />
                  <FaLinkedin /> */}
              
            </div>
            <div className='p-4'>
              <h1 className='text-xl '>Mae C Saunders </h1>
              <h1 className='text-base text-gray-300'>Sales</h1>
            </div>
          </div>
          <div className='bg-blue-500'>
            <div>
              <img
                src='https://demo.moxcreative.com/autokit/wp-content/uploads/sites/41/2021/06/happy-young-businesswoman-in-suit-looking-at-camera-with-crossed-arms-isolated-on-white-e1623128154534.jpg'
                alt=''
                className='sm:w-[300px] sm:h-[300px] object-cover'
              />
            </div>
            <div className='p-4'>
              <h1 className='text-xl '>Lila J Trujillo</h1>
              <h1 className='text-base text-gray-300'>Sales</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurTeam