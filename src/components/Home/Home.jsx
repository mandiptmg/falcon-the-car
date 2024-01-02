import Hero from './hero/Hero'
import Detail from './hero/Detail'
import Dealer from './car dealer/Dealer'
import Choose from './car dealer/Choose'
import Team from './our team/Team'
import Work from './hero/Work'

const Home = () => {
  return (
    <>
      <Hero />
      <div className='md:w-[80vw] mx-auto max-w-7xl w-[90vw]'>
        <Work/>
        <Detail />
</div>
        <Dealer />
        <div className='md:w-[80vw] mx-auto max-w-7xl w-[90vw]'></div>
        <Choose />
      
      <Team />
    </>
  )
}

export default Home
