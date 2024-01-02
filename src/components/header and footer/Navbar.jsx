import {FaBars,FaTimes} from 'react-icons/fa'
import { useGlobalContext } from '../context/context'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/icon.png'

const Navbar = () => {
const {show, setShow} = useGlobalContext()
  return (
    <div className='bg-black/80'>
      <div
        data-aos='fade-down'
        className='md:w-[80vw] text-white  mx-auto max-w-7xl w-[90vw]'
      >
        <div className='flex relative justify-between items-center h-20'>
          <div>
            <NavLink to='/'>
              <button className='font-semibold text-blue-500 gap-1 text-2xl flex  font-sans'>
                <img src={logo} alt='logo' />
                Falcon
              </button>
            </NavLink>
          </div>
          <div className='hidden lg:block'>
            <ul className='uppercase text-sm font-medium flex items-center gap-4'>
              <li className='drop-shadow-lg'>
                <NavLink activeClassName='text-orange-400' to='/'>
                  Home
                </NavLink>
              </li>
              <li className='drop-shadow-lg'>
                <NavLink activeClassName='text-orange-400' to='/about-us'>
                  About Us
                </NavLink>
              </li>
              <li className='drop-shadow-lg'>
                <NavLink activeClassName='text-orange-400' to='/vehical-modal'>
                  vehical modal
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
          <div className='flex items-center gap-2'>
            <button className='uppercase text-sm font-semibold text-black bg-white px-2 rounded py-2'>
              buy now
            </button>
            <button
              onClick={() => setShow(!show)}
              className='text-xl lg:hidden  text-sky-400'
            >
              {show ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
        <div
          className={
            show
              ? 'bg-transparent w-full -mt-20  h-screen grid place-items-center'
              : 'hidden'
          }
        >
          <ul className='uppercase text-3xl  font-medium text-slate-400 grid text-center gap-y-14'>
            <li>
              <NavLink onClick={() => setShow(false)} to='/'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => setShow(false)} to='/about-us'>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => setShow(false)} to='/vehical-modal'>
                vehical modal
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => setShow(false)} to='/testimonials'>
                Testimonials
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => setShow(false)} to='contact'>
                contact us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
  }
export default Navbar
