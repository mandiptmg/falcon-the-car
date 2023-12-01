import { FaBriefcase } from 'react-icons/fa'
import { FiTool } from 'react-icons/fi'
import { FaDumbbell } from 'react-icons/fa'

const data = [
  {
    icon: <FaBriefcase />,
    title: 'professional services',
    des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
  },
  {
    icon: <FiTool />,
    title: 'High-End Equipment',
    des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
  },
  {
    icon: <FaDumbbell />,
    title: 'Competitive Pricing',
    des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
  },
]
const Detail = () => {
  return (
    <div id='art' className='pb-40 pt-20'>
      <div data-aos='fade-up' className='w-full grid place-items-center'>
        <h1 className='font-bold md:max-w-md text-center text-2xl md:text-4xl capitalize  '>
          we have mastered the art of detailing
        </h1>
      </div>
      <div className='grid mt-14 md:gap-x-4 gap-y-10 md:grid-cols-2 lg:grid-cols-3 items-center'>
        {data.map((item,index) => {
          return (
            <article
              data-aos='fade-up'
              key={index}
              className='bg-blue-200 p-4 rounded-xl relative text-center'
            >
              <span className='absolute -top-[25px] text-3xl bg-white text-blue-400 p-2'>
                {item.icon}
              </span>
              <h1 className='capitalize font-semibold mt-4 text-xl'>
                {item.title}
              </h1>
              <p className='text-sm mt-4 text-gray-600'>{item.des}</p>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default Detail
