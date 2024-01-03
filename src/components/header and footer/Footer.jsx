import { FaArrowAltCircleUp } from 'react-icons/fa'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/icon.png'
const Footer = () => {
  
  const upScroll=()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <div className='before:bg-sky-200 relative before:absolute before:-z-10 before:bottom-0 before:w-full before:h-full before:left-0 py-20'>
      <div className='mx-auto w-[90vw] md:w-[80vw] '>
        <div
          data-aos='fade-up'
          className='grid grid-cols-2 md:gird-cols-3 lg:grid-cols-4 items-start gap-10'
        >
          <div>
            <h1 className='text-2xl font-bold  md:text-4xl '>Let's Talk!</h1>

            <ul className='mt-4 grid gap-2'>
              <li className='font-bold text-lg   '>
                <NavLink to='/' className=' flex items-center gap-1'>
                  <img src={logo} alt='logo' className='w-6' /> Falcon
                </NavLink>
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
            <h1 className=' font-bold '>Page Link</h1>
            <ul className='mt-4 capitalize  grid gap-2 text-sm text-gray-400'>
              <li className='drop-shadow-lg'>
                <NavLink activeClassName='text-orange-400' to='/about-us'>
                  About Us
                </NavLink>
              </li>
              <li className='drop-shadow-lg'>
                <NavLink activeClassName='text-orange-400' to='/vehical-model'>
                  vehical models
                </NavLink>
              </li>
              <li className='drop-shadow-lg'>
                <NavLink activeClassName='text-orange-400' to='/testimonials'>
                  Testimonials
                </NavLink>
              </li>
              <li className='drop-shadow-lg'>
                <NavLink activeClassName='text-orange-400' to='/contact'>
                  contact us
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <h1 className='font-bold'>NewsLetter</h1>
            <ul className='space-y-4 mt-4'>
              <li>
                <p className='text-gray-400'>
                  Sign up for our newsletter to get updated information, promo,
                  and insight about automotive.
                </p>
              </li>
              <li>
                <form className='space-y-2' action=''>
                  <input
                    className='w-full p-2 outline-blue-400 rounded bg-blue-100'
                    placeholder='Enter your email address'
                    type='email'
                  />
                  <button
                    type='submit'
                    className='text-lg text-white capitalize w-full rounded-lg p-1 bg-gradient-to-r from-sky-500 to-blue-400 '
                  >
                    sign up
                  </button>
                </form>
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
          </div>{' '}
          <button onClick={upScroll} className='absolute bottom-2 right-4'>
            <FaArrowAltCircleUp className='text-3xl animate-bounce text-sky-500' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Footer
