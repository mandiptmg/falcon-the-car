import Hero from './hero/Hero'
import Detail from './hero/Detail'
import Dealer from './car dealer/Dealer'
import Choose from './car dealer/Choose'
import Team from './our team/Team'

const Home = () => {
  return (
    <div className=''>
      <Hero />
      <div className='md:w-[80vw] mx-auto max-w-7xl w-[90vw]'>
        <Detail />
        <Dealer />
        <Choose />
        <Team />
      </div>
    </div>
  )
}

export default Home
