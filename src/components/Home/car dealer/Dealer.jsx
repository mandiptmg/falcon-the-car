import { NavLink } from 'react-router-dom'
import data from '../../../Data/Data'
//icon img
import gas from '../../../assets/car/gas-pump.png'
import handle from '../../../assets/car/steering-wheel.png'
import people from '../../../assets/car/employees.png'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import Brand from '../../../pages/About/Brand'

const Dealer = () => {

  return (
    <div className='pt-20 bg-[url(https://img.freepik.com/free-vector/blue-shade-watercolor-texture-background_1017-19546.jpg?w=740&t=st=1704212948~exp=1704213548~hmac=ac9090676ef1ce034240644f6750c73a8f88df691f1c2e6816e4e64efa4469a5)] bg-cover bg-center bg-no-repeat bg-white/50 bg-blend-overlay mb-40'>
      <div className='md:w-[80vw] mx-auto w-[90vw]'>
        <div className=' grid place-content-center '>
          <div className='max-w-md'>
            <h6
              data-aos='fade-up'
              className='text-sm text-blue-500 text-center font-semibold uppercase'
            >
              most popular car rental dealer
            </h6>
            <h1
              data-aos='fade-up'
              className='md:text-4xl text-center text-2xl font-bold my-4 '
            >
              Welcome to Falcon Auto Showroom
            </h1>
          </div>
        </div>
        <div data-aos='fade-left' className='grid place-items-end my-4'>
          <NavLink to='/vehical-model'>
            <button className='capitalize  px-3 text-white py-1 bg-gradient-to-r from-sky-500 to-blue-400 hover:scale-105 flex items-center gap-1 duration-500 rounded'>
              view more <HiOutlineArrowNarrowRight />
            </button>
          </NavLink>
        </div>
        <div className='grid md:grid-cols-3 items-center gap-7 '>
          {data
            .map((item, index) => {
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
                        <img
                          src={handle}
                          alt='streeing wheel'
                          className='w-6'
                        />
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
                    <button className='rounded bg-gradient-to-r to-blue-400 text-white font-bold capitalize hover:scale-105 duration-500 from-sky-500  p-2'>
                      rent now
                    </button>
                  </div>
                </article>
              )
            })
            .slice(0, 3)}
        </div>
      </div>
      <div className='mt-7'>
        <Brand/>
      </div>
    </div>
  )
}

export default Dealer
