import { NavLink } from "react-router-dom"
import {FaChevronRight} from 'react-icons/fa'
const About = () => {
  return (
    <div>
      <div className='w-full relative grid place-items-center bg-black/50 bg-blend-overlay h-[50vh] bg-[url(https://di-uploads-pod5.dealerinspire.com/schumacherautogroupsplash/uploads/2020/05/car-shopping-2-1024x356.jpg)] bg-no-repeat bg-cover bg-center'>
        <h1 className='capitalize font-bold text-white text-4xl md:text-6xl'>
          about company
        </h1>

        <h1 className='capitalize flex border-t w-full absolute bottom-4 pt-4 left-auto justify-center items-center gap-2 text-xl font-bold text-white'>
          <NavLink to='/'>home</NavLink> <FaChevronRight className="text-blue-500" />
          <span>about us</span>
        </h1>
      </div>
    </div>
  )
}

export default About