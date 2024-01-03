import Hero from './hero/Hero'
import Detail from './hero/Detail'
import Dealer from './car dealer/Dealer'
import Choose from './car dealer/Choose'
import Team from './our team/Team'
import Work from './hero/Work'

const Home = () => {
  return (
    <main>
      <Hero />
      <div className='md:w-[80vw] mx-auto w-[90vw]'>
        <Work/>
        <Detail />
</div>
        <Dealer />
<<<<<<< HEAD
      
        <Choose />
      
      <Team />
    </main>
=======
        <div className='md:w-[80vw] mx-auto max-w-7xl w-[90vw]'>
        <Choose />
      
      <Team />
          </div>
    </>
>>>>>>> ac424159a56949f076df4fab1b63e9b9dc1bc8e9
  )
}

export default Home
