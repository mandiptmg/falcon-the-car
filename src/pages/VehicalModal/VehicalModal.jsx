import { FaChevronRight } from "react-icons/fa"
import { NavLink } from "react-router-dom"

NavLink
const VehicalModal = () => {
  return (
    <div>
      <div className='w-full relative grid place-items-center bg-black/50 bg-blend-overlay h-[50vh] bg-[url(https://c4.wallpaperflare.com/wallpaper/652/165/231/car-ford-mustang-shelby-lamborghini-wallpaper-preview.jpg)] bg-no-repeat bg-cover bg-center'>
        <h1 className='capitalize font-bold text-white text-4xl md:text-6xl'>
         vehical modal
        </h1>

        <h1 className='capitalize flex border-t w-full absolute bottom-4 pt-4 left-auto justify-center items-center gap-2 text-xl font-bold text-white'>
          <NavLink to='/'>home</NavLink>{' '}
          <FaChevronRight className='text-blue-500' />
          <span>vehical modal</span>
        </h1>
      </div>
    </div>
  )
}

export default VehicalModal