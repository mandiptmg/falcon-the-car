import { FaChevronRight, FaPhone } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import data from '../../Data/Data'
//icon img
import gas from '../../assets/car/gas-pump.png'
import handle from '../../assets/car/steering-wheel.png'
import people from '../../assets/car/employees.png'
import { useGlobalContext } from '../../components/context/context'
NavLink
const VehicalModal = () => {
  const { setChildModal1 } = useGlobalContext()

  return (
    <div>
      <div className='w-full relative grid place-items-center bg-black/50 bg-blend-overlay h-[50vh] bg-[url(https://c4.wallpaperflare.com/wallpaper/652/165/231/car-ford-mustang-shelby-lamborghini-wallpaper-preview.jpg)] bg-no-repeat bg-cover bg-center'>
        <h1 className='capitalize font-bold text-white text-4xl md:text-6xl'>
          vehical modal
        </h1>

        <h1 className='capitalize flex border-t w-full absolute bottom-4 pt-4 left-auto justify-center items-center gap-2 text-xl font-bold text-white'>
          <NavLink to='/'>home</NavLink>{' '}
          <FaChevronRight className='text-blue-500' />
          <span>vehical models</span>
        </h1>
      </div>
      <div className='py-10'>
        <div className='text-center space-y-4'>
          <h1
            data='fade-up'
            className='text-3xl md:text-4xl font-bold text-slate-800 capitalize'
          >
            trending rental <span className='text-sky-500'>deals</span>
          </h1>
          <p
            data='fade-up'
            className='font-medium text-sm sm:text-base text-gray-400 capitalize'
          >
            most popular car rental deals
          </p>
        </div>
        <div className='grid mt-10 md:grid-cols-2 lg:grid-cols-3 w-[90vw] md:w-[80vw] mx-auto items-center gap-7 '>
          {data.map((item, index) => {
            const { title, img } = item
            return (
              <article
                data-aos='fade-'
                className=' shadow-lg rounded-xl bg-white'
                key={index}
              >
                <img
                  src={img}
                  alt={title}
                  className='w-full h-full aspect-square bg-blue-400/50 object-contain rounded-t-xl -scale-x-10'
                />
                <div className='text-center space-y-4 p-4'>
                  <div className='flex items-center justify-between text-xl text-slate-900'>
                    <h1 className='font-semibold capitalize'>
                      {title}
                      <br />
                      <span className='text-base text-gray-400 font-light'>
                        cullinan
                      </span>
                    </h1>
                    <h1 className='font-semibold '>
                      $520
                      <br />
                      <span className='text-base text-gray-400 font-light'>
                        Per Day
                      </span>
                    </h1>
                  </div>
                  <div className='flex items-center justify-around'>
                    <div className='grid rounded-xl place-items-center p-2 bg-blue-100'>
                      {' '}
                      <img src={people} alt='people' className='w-6' />
                      <h1 className='text-blue-400 capitalize font-semibold text-sm'>
                        2 peoples
                      </h1>
                    </div>
                    <div className='grid place-items-center p-2 bg-blue-100 rounded-xl'>
                      {' '}
                      <img src={handle} alt='streeing wheel' className='w-6' />
                      <h1 className='text-blue-400 capitalize font-semibold text-sm'>
                        manuel
                      </h1>
                    </div>
                    <div className='rounded-xl grid place-items-center p-2 bg-blue-100'>
                      {' '}
                      <img src={gas} alt='gas-pump' className='w-6' />
                      <h1 className='text-blue-400 capitalize font-semibold text-sm'>
                        100L
                      </h1>
                    </div>
                  </div>
                  <button
                    onClick={() => setChildModal1(true)}
                    className='rounded bg-gradient-to-r to-blue-400 text-white font-bold capitalize hover:scale-105 duration-500 from-sky-500  p-2'
                  >
                    rent now
                  </button>
                </div>
              </article>
            )
          })}
        </div>
      </div>
      <div className='bg-black/80 bg-[url(https://c4.wallpaperflare.com/wallpaper/404/19/616/dark-car-vehicle-ford-wallpaper-preview.jpg)] bg-no-repeat bg-cover  object-cover bg-blend-overlay bg-center h-40 grid place-items-center'>
        <div className='lg:flex grid gap-y-4 gap-x-10 items-center'>
          <p
            data-aos='fade-right'
            className='md:text-4xl text-xl text-white font-bold'
          >
            Book a car by getting in touch with us
          </p>

          <span
            data-aos='fade-left'
            className='text-blue-500 font-bold md:text-4xl text-xl justify-center items-center flex gap-3'
          >
            <FaPhone />
            +44 012 34 5678
          </span>
        </div>
      </div>
    </div>
  )
}

export default VehicalModal
