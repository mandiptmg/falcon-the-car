import img1 from '../../../assets/icons/customer-service.png'
import img2 from '../../../assets/icons/car.png'
import img3 from '../../../assets/icons/map.png'
import img4 from '../../../assets/icons/life-protection.png'
import img5 from '../../../assets/icons/steering-wheel.png'
import img6 from '../../../assets/icons/shield.png'

const data = [
  {
    img: img1,
    title: 'outsanding services',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    img: img2,
    title: 'quality vehicles',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    img: img3,
    title: 'gPS on every vehicle',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    img: img4,
    title: 'competitive pricing',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    img: img5,
    title: 'protective sealant',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    img: img6,
    title: 'interior detailing',
    desc: 'Lorem ipsum dolor sitLorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
]
const Choose = () => {
  return (
    <div className='py-20'>
      <div className=' grid place-content-left'>
        <div className='max-w-md'>
          <h6
            data-aos='fade-right'
            className='text-sm text-blue-400 font-semibold uppercase'
          >
            why choose us
          </h6>
          <h1
            data-aos='fade-right'
            className='md:text-4xl capitalize text-2xl font-bold my-4 '
          >
            we have mastered the art of detailing
          </h1>
        </div>
      </div>
      <div className='grid md:grid-cols-3 grid-cols-2 md:gap-x-14 items-center'>
{data.map((item, index) => {
              const { title, img, desc } = item
              return (
                <article data-aos='fade-up' className='p-4 max-w-xs' key={index}>
                  <img
                    src={img}
                    alt={title}
                    className='w-14 p-2 bg-gray-200'
                  />
                  <div>
                    <h1 className=' my-2 text-lg font-semibold capitalize'>
                      {title}
                    </h1>
                    <p className='text-sm text-gray-500'>{desc}</p>
                  </div>
                </article>
                )})}
      </div>
    </div>
  )
}

export default Choose
