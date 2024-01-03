import Footer from './components/header and footer/Footer'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/header and footer/Navbar'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import Testimonials from './pages/Testimonials/Testimonials'
import About from './pages/About/About'
import VehicalModal from './pages/VehicalModal/VehicalModal'
import { useEffect } from 'react'
import NoPage from './pages/NoPage/NoPage'
const App = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/vehical-model' element={<VehicalModal />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/testimonials' element={<Testimonials />} />
        <Route path='*' element={<NoPage/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
