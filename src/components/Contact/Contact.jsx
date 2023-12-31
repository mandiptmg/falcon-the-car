import { FaPhone } from 'react-icons/fa'
import img from '../../assets/off.png'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <div className='bg-[url(https://c4.wallpaperflare.com/wallpaper/892/163/808/vehicle-car-blue-cars-volkswagen-wallpaper-preview.jpg)] bg-no-repeat bg-cover bg-black/50 bg-blend-overlay '>
      <div className='md:w-[80vw]  mx-auto max-w-7xl w-[90vw]'>
        <div className='text-center pt-10'>
          {' '}
          <div className=' grid items-center h-20'>
            <img
              data-aos=''
              src={img}
              alt=''
              className='md:w-60 sm:w-44 w-28 opacity-50 object-contain absolute left-0 -top-40 h-full'
            />
            <h1
              data-aos='fade-up'
              className='text-3xl text-white font-bold mb-4'
            >
              Contact Us
            </h1>
          </div>
          <p data-aos='fade-up' className='text-gray-200 mb-8'>
            Feel free to reach out to us for any inquiries or assistance.
          </p>
        </div>
        <div className='grid  lg:grid-cols-[1fr,1fr] pb-20   items-center'>
          <div></div>

          <div data-aos='fade-left' className='w-full mx-auto'>
            <ContactForm />
          </div>
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
          
          <span data-aos='fade-left' className='text-blue-500 font-bold md:text-4xl text-xl justify-center items-center flex gap-3'>
            <FaPhone />
            +44 012 34 5678
          </span>
        </div>
      </div>
    </div>
  )
}

export default Contact
