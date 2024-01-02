import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import { FaPhone, FaStar } from 'react-icons/fa'
import { useEffect, useState } from 'react'

const data = [
  {
    img: 'https://i.pinimg.com/236x/52/59/5e/52595ec642520f9ad64a251ecc122d42.jpg',
    title: 'actor',
    name: 'john wick',
  },
  {
    img: 'https://i.pinimg.com/564x/89/c1/dd/89c1ddda172ea8d5d7e5ce5a7dfa27e6.jpg',
    title: 'footballer',
    name: 'Cristiano Ronaldo',
  },
  {
    img: 'https://i.pinimg.com/564x/6a/aa/48/6aaa48d3d5770c329354d85d609e0fdf.jpg',
    title: 'footballer',
    name: 'Lionel Messi',
  },
]

const Testimonials = () => {
  const [isNavigationEnabled, setNavigationEnabled] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth
      setNavigationEnabled(windowWidth >= 600)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <div className='bg-blue-100'>
      <div data-aos='fade-up' className=' w-[90vw] mx-auto  space-y-4 py-20'>
        <h1 className='lg:text-5xl md:text-4xl text-3xl text-center font-bold capitalize'>
          what people say
          <br /> about us?
        </h1>

        <p
          data-aos='fade-right'
          className='max-w-xl text-sm md:text-base  text-gray-400 mx-auto text-center'
        >
          Discover the positive impact we've made on the our clients by reading
          through their testimonials. Our clients have experienced our service
          and results, and they're eager to share their positive experiences
          with you.
        </p>
        <div className='bg-white max-w-2xl mx-auto'>
          <Swiper
            slidesPerView={1}
            navigation={isNavigationEnabled}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation, Pagination]}
            className='mySwiper'
          >
            {data.map((item, index) => {
              const { img, name, title } = item
              return (
                <SwiperSlide key={index}>
                  <article className='grid md:grid-cols-[1.5fr,2fr]'>
                    <div className='grid place-items-center md:flex md:py-0 py-4'>
                      <img
                        src={img}
                        alt={name}
                        className='md:w-[230px] md:h-[460px] w-[250px] h-[250px] md:rounded-none rounded-full object-top object-cover'
                      />
                    </div>{' '}
                    <div className='space-y-4 p-5'>
                      <h1 className='font-[roboto] text-4xl capitalize font-semibold'>
                          {name}
                        </h1>
                   
                      <hr /> 
                       <div className='flex items-center justify-between'>
                         <h1 className='text-base uppercase my-4 font- tracking-[.2rem] text-gray-400'>
                        {title}
                      </h1>
                        <h1 className='flex items-center p-2 bg-gradient-to-r from-sky-400 to-blue-500 rounded-xl text-white font-bold  gap-1'>
                          5.0 <FaStar />
                        </h1>
                      
                      </div>
                      <p className='text-base text-gray-500 font-medium '>
                        " Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Veritatis, consectetur! Amet maiores nam, nisi
                        voluptatem earum unde quod temporibus doloribus.
                        Recusandae, earum expedita quas magni aliquam esse
                        temporibus minus."
                      </p>
                    </div>
                  </article>
                </SwiperSlide>
              )
            })}
          </Swiper>
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

export default Testimonials
