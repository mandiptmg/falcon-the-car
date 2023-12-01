import Hero from './components/hero/Hero'
import Detail from './components/hero/Detail'
import Dealer from './components/car dealer/Dealer'
import Choose from './components/car dealer/Choose'
import Team from './components/our team/Team'
import Footer from './components/header and footer/Footer'
const App = () => {
  return (
    <div>
      <div className='w-[80vw] mx-auto max-w-6xl'>
        <Hero />
        <Detail />
        <Dealer />
        <Choose />
        <Team />
      </div>
      <Footer />
    </div>
  )
}

export default App
