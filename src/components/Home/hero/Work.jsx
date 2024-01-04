import img from '../../../assets/icons/time.png'
import img1 from '../../../assets/icons/car.png'
import img2 from '../../../assets/icons/location.png'
import { useGlobalContext } from '../../context/context'

const Work = () => {
  const { setModalOpen } = useGlobalContext()
  const handleOpen = () => setModalOpen(true)
  return (
    <div className='text-center py-16 space-y-7'>
      <h1 className='font-bold capitalize text-black/80 text-4xl'>
        how it <span className='text-blue-500'> works</span>
      </h1>
      <p className='text-sm font-semibold text-gray-400 capitalize  '>
        rent with following 3 working steps
      </p>
      <div className='grid py-10 gap-7 sm:grid-cols-3 place-items-center'>
        <div className='grid space-y-4 text-center place-items-center'>
          <img
            src={img2}
            alt='location'
            className='w-16 p-2 bg-gradient-to-r from-sky-400 rounded-xl to-blue-500'
          />
          <h1 className='text-lg font-bold capitalize text-slate-950/80'>
            choose location
          </h1>
          <p className='text-sm text-gray-500'>
            Explore our car rental services conveniently located for seamless
            travel experiences and convenience.
          </p>
        </div>
        <div className='grid space-y-4 text-center place-items-center'>
          <img
            src={img}
            alt='time'
            className='w-16 rounded-xl p-2 bg-gradient-to-r from-sky-400 to-blue-500 '
          />

          <h1 className='text-lg font-bold capitalize text-slate-950/80'>
            pick up date
          </h1>
          <p className='text-sm text-gray-500'>
            Select car rental pickup date for your convenience and an enjoyable
            travel experience ahead.
          </p>
        </div>
        <div className='grid space-y-4 text-center place-items-center'>
          <img
            src={img1}
            alt='car'
            className='w-16 p-2 bg-gradient-to-r from-sky-400 rounded-xl to-blue-500'
          />

          <h1 className='text-lg font-bold capitalize text-slate-950/80'>
            book your car
          </h1>
          <p className='text-sm text-gray-500'>
            Secure your car rental today! Book now for a seamless experience in
            reliable and comfortable vehicles. Drive with confidence
          </p>
        </div>
      </div>

      <button
        onClick={handleOpen}
        className='text-lg text-white p-2 bg-gradient-to-r from-sky-400 to-blue-500   font-semibold capitalize hover:scale-105 duration-500 shadow-lg rounded-xl '
      >
        start booking
      </button>
    </div>
  )
}

export default Work