import {FaBars,FaTimes} from 'react-icons/fa'
import { useGlobalContext } from '../context/context'

const Navbar = () => {
const {show, setShow} = useGlobalContext()
  return (
    <div data-aos='fade-down'>
      <div className='flex  relative justify-between items-center h-20'>
        <div>
          <h1 className='font-semibold text-lg font-sans'>Falcon</h1>
        </div>
        <div className='hidden md:block'>
          <ul className='uppercase text-sm font-medium flex items-center gap-4'>
            <li>
              <a href='#home'>Home</a>
            </li>
            <li>
              <a href='#'>inventory</a>
            </li>
            <li>
              <a href='#'>shop</a>
            </li>
            <li>
              <a href='#'>contact</a>
            </li>
          </ul>
        </div>
        <div className='flex items-center gap-2'>
          <button className='uppercase text-sm bg-black text-white px-2 py-2'>
            buy now
          </button>
          <button
            onClick={() => setShow(!show)}
            className='text-xl md:hidden  text-sky-400'
          >
            {show ? <FaTimes className='' /> : <FaBars />}
          </button>
        </div>
      </div>
      <div
        className={
          show
            ? 'bg-white w-full  h-screen grid place-items-center'
            : 'hidden'
        }
      >
        <ul className='uppercase text-3xl  font-medium text-slate-800 grid text-center gap-y-14'>
          <li>
            <a onClick={() => setShow(false)} href='#home'>
              Home
            </a>
          </li>
          <li>
            <a onClick={() => setShow(false)} href='#'>
              inventory
            </a>
          </li>
          <li>
            <a onClick={() => setShow(false)} href='#'>
              shop
            </a>
          </li>
          <li>
            <a onClick={() => setShow(false)} href='#'>
              contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
  }
export default Navbar
