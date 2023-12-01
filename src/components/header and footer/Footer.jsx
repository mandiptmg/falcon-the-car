import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa6'
const Footer = () => {
  return (
    <div className='before:bg-sky-100 relative before:absolute before:-z-10 before:bottom-0 before:w-full before:h-full before:left-0 py-20'>
      <div className='mx-auto w-[90vw] md:w-[80vw] '>
        <div
          data-aos='fade-up'
          className='grid grid-cols-2 md:gird-cols-3 lg:grid-cols-4 items-start gap-10'
        >
          <div>
            <h1 className='text-2xl font-bold  md:text-4xl '>Let's Talk!</h1>

            <ul className='mt-4 grid gap-2'>
              <li className='font-bold text-lg   '>
                <a href='#home'>Falcon</a>
              </li>
              <li>
                <h1 className='text-sm text-gray-400'>falcon.car@email.com</h1>
              </li>
              <li>
                <h1 className='text-sm text-gray-400'>
                  12 Hilton St, Manchester M1 1JF
                </h1>
              </li>
              <li>
                <h1 className='text-sm text-gray-400'>+44 012 34 5678</h1>
              </li>
            </ul>
          </div>
          <div>
            <h1 className=' font-bold '>Get Started</h1>
            <ul className='mt-4 capitalize grid gap-2 text-sm text-gray-400'>
              <li>
                <h1>instant quote</h1>
              </li>
              <li>
                <h1>book a consultion </h1>
              </li>{' '}
              <li>
                <h1>book an intro call</h1>
              </li>{' '}
              <li>
                <h1>request a call</h1>
              </li>
            </ul>
          </div>
          <div>
            <h1 className=' font-bold '>About US</h1>
            <ul className='mt-4 capitalize  grid gap-2 text-sm text-gray-400'>
              <li>
                <h1>referral program</h1>
              </li>
              <li>
                <h1>commercial </h1>
              </li>{' '}
              <li>
                <h1>careers</h1>
              </li>{' '}
              <li>
                <h1>products</h1>
              </li>
            </ul>
          </div>
          <div>
            <h1 className=' font-bold '>Blog</h1>
            <ul className='mt-4 grid gap-2  text-sm text-gray-400'>
              <li>
                <h1>Why falcon?</h1>
              </li>
              <li>
                <h1>why we best? </h1>
              </li>{' '}
              <li>
                <h1>Relationship</h1>
              </li>{' '}
              <li>
                <h1>Legal & Privacy</h1>
              </li>
            </ul>
          </div>
        </div>
        <hr className='my-4 ' />
        <div data-aos='fade-up' className='grid mt-7 place-items-center'>
          <ul className='flex gap-4 text-gray-700 items-center'>
            <li>
              <a href=''>
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href=''>
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href=''>
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href=''>
                <FaLinkedin />
              </a>
            </li>
          </ul>
          <div className='mt-4 text-sm text-gray-700'>
            All rights reserved by &copy; Mandip creative 2023
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
