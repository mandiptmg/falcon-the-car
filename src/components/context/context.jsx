import { createContext, useContext, useEffect, useState } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
const AppContext = createContext()
export const AppProvider = ({ children }) => {
  const [show, setShow] = useState(false)
  const [open, setOpen] = useState(false)


  useEffect(() => {
    document.body.style.overflowY = show ? 'hidden' : 'visible'
    document.body.style.overflowX = show ? 'none' : 'hidden'
    //AOS INIT
    Aos.init({ duration: 1500 })
    const handleChange = () => {
      if (window.innerWidth >= 1024) {
        setShow(false)
      }
    }
    handleChange()
    window.addEventListener('resize', handleChange)
  }, [show])
  return (
    <AppContext.Provider value={{ show, setShow, open, setOpen }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
