import { NavLink } from 'react-router-dom'
import { FaChevronRight, FaPhone } from 'react-icons/fa'
import NumberCounter from './NumberCounter'
import img from '../../assets/about/man.png'
import img1 from '../../assets/about/team.png'
import img2 from '../../assets/about/clean-car.png'


 const numbers = [
   { value: 412, label: 'Expertise', img:img1 },
   { value: 7800, label: 'Happy Customer', img:img },
   { value: 8500, label: 'Car Rent', img:img2 },
 ]
 import History from './History'
import OurTeam from './OurTeam'
import Brand from './Brand'

const About = () => {
  return (
    <div>
      <div className='w-full relative grid place-items-center bg-black/50 bg-blend-overlay h-[50vh] bg-[url(https://di-uploads-pod5.dealerinspire.com/schumacherautogroupsplash/uploads/2020/05/car-shopping-2-1024x356.jpg)] bg-no-repeat bg-cover bg-center'>
        <h1 className='capitalize font-bold text-white text-4xl md:text-6xl'>
          about company
        </h1>

        <h1 className='capitalize flex border-t w-full absolute bottom-4 pt-4 left-auto justify-center items-center gap-2 text-xl font-bold text-white'>
          <NavLink to='/'>home</NavLink>{' '}
          <FaChevronRight className='text-blue-500' />
          <span>about us</span>
        </h1>
      </div>
      <div className='bg-gradient-to-r from-blue-500 to-slate-800'>
        <div className='w-[90vw] md:w-[80vw] mx-auto py-10 '>
          <div className='grid space-y-4 place-items-center items-start lg:grid-cols-2'>
            <div className='p-4'>
              <img
                src='https://img.freepik.com/free-photo/person-using-ai-tool-job_23-2150711486.jpg?w=826&t=st=1704089993~exp=1704090593~hmac=15a3dadf822808a17ed6eee98b1779d717b9c7b1aae20ca72268f9cb476f9979'
                alt='manufacture car'
                className='lg:max-w-[415px] md:h-[450px]  object-cover rounded-xl'
              />
            </div>
            <div className='w-full'>
              <h1 className='uppercase text-base font-semibold  text-blue-400'>
                about company
              </h1>
              <div className='space-y-4'>
                <p className='text-white font-semibold  text-2xl capitalize '>
                  A New Way To rent Car Safely
                </p>
                <p className='text-white/50'>
                  Embark on a journey with Falcon Car Rent, where every mile is
                  a chapter in your story of adventure. Picture yourself behind
                  the wheel of our sleek, high-performance vehicles, navigating
                  scenic landscapes and urban landscapes alike. Whether it's a
                  spontaneous road trip or a carefully planned escape, our fleet
                  becomes the canvas for your travel tale. Feel the power of the
                  falcon as you soar through highways and byways, creating
                  memories that linger long after the engine is turned off.
                  Falcon Car Rent is not just about transportation; it's about
                  turning the ordinary into extraordinary. Let your story unfold
                  on the road with us.
                </p>
                <section className='flex items-start justify-around'>
                  {numbers.map((number, index) => (
                    <NumberCounter
                      key={index}
                      value={number.value}
                      label={number.label}
                      img={number.img}
                    />
                  ))}
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <History />
      </div>
      <div>
        <OurTeam />
      </div>
      <div>
        <Brand/>
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

export default About