import img from '../../assets/mechanic/img.png'
import img1 from '../../assets/mechanic/img1.png'
import img2 from '../../assets/mechanic/img2.png'

import { FaChevronCircleRight } from 'react-icons/fa'

const data = [
  { img: img, title: 'luffy rai' },
  { img: img1, title: 'shiva limbu' },
  { img: img2, title: 'ram sharma' },
]
const Team = () => {
  return (
    <div className='py-20'>
      <h1
        data-aos='fade-right'
        className='text-left text-xl font-semibold md:text-2xl '
      >
        Our Team
      </h1>
      <div className='grid md:grid-cols-3 items-center gap-4 mt-7 '>
        {data.map((item, index) => {
          const { title, img } = item
          return (
            <article data-aos='fade-up' key={index}>
              <img
                src={img}
                alt={title}
                className='aspect-square h-80 w-full rounded-lg object-contain bg-blue-200'
              />
              <div className='px-3'>
                <h1 className='text-lg capitalize font-semibold mt-2'>
                  {title}
                </h1>
                <h1 className='text-sm text-gray-500'>Mechanic</h1>
              </div>
            </article>
          )
        })}
      </div>
      <div className='my-10'>
        <iframe
          data-aos='fade-up'
          width='100%'
          height='450'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.03610183194!2d-74.30933397609385!3d40.69753995777949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2snp!4v1701270648772!5m2!1sen!2snp'
          frameborder='0'
          loading='lazy'
          allowfullscreen
        ></iframe>
      </div>
      <div className='mt-20 p-6 text-white md:px-14 md:py-6 bg-sky-400 flex justify-between items-center'>
        <div data-aos='fade-right'>
          <h6 className='text-xs font-semibold uppercase '>
            free consultation
          </h6>
          <h1 className='text-sm md:text-5xl font-bold capitalize'>
            for any emergency <span className='block'>contact</span>
          </h1>
        </div>
        <div
          data-aos='fade-left'
          className='bg-white  text-sky-400 md:px-4 md:py-2 p-1 text-xs md:text-base  '
        >
          <button className='flex items-center gap-2'>
            Book appointment <FaChevronCircleRight className='text-xl' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Team
