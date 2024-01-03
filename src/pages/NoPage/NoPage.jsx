import { NavLink } from 'react-router-dom'
import errorImage from '../../assets/error.svg'

const NoPage = () => {
  const containerStyle = {
    height: '80vh',
    background: `url(${errorImage})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition:'right'

  }

  return (
    <div className='grid  place-items-center' style={containerStyle}>
      <div className='w-full text-center space-y-4'>
        <h1 className='text-[100px] md:text-[150px]  font-bold text-blue-500'>404</h1>
        <p className='text-3xl md:text-5xl font-bold text-sky-800'  >Oops! Page no found</p>
        <NavLink to='/'><button className='bg-gradient-to-r text-xl mt-7 hover:scale-105 duration-500 font-bold text-white capitalize  from-sky-500 rounded-xl  p-3 to-blue-400'>
         back home</button></NavLink>
      </div>
    </div>
  )
}

export default NoPage
