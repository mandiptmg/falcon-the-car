import { FaRegPlayCircle } from 'react-icons/fa'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import { NavLink } from 'react-router-dom'
import { useGlobalContext } from '../../context/context'
import { useState,useEffect } from 'react'

const hero = () => {
  const { open, setOpen } = useGlobalContext()
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

   const [style, setStyle] = useState({
     position: 'absolute',
     top: '50%',
     left: '50%',
     transform: 'translate(-50%, -50%)',
     width: '70%',
     height: '70%',
     maxWidth: '100%',
     maxHeight: '100%',
   })

   useEffect(() => {
     const handleResize = () => {
       const isMobile = window.innerWidth <= 768
       setStyle({
         ...style,
         width: isMobile ? '100%' : '70%',
         height: isMobile ? '50%' : '70%',
       })
     }

     handleResize() // Initial call to set styles based on current width

     window.addEventListener('resize', handleResize)

     return () => {
       window.removeEventListener('resize', handleResize)
     }
   }, [style])
  return (
    <div className=' bg-gradient-to-l from-transparent -mt-20 h-screen via-transparent to-black/60 before:absolute before:top-0 before:left-0 before:-z-10   before:bg-[url(https://c4.wallpaperflare.com/wallpaper/814/151/716/car-sports-car-supercars-aston-martin-wallpaper-preview.jpg)] before:bg-cover before:bg-no-repeat before:bg-center   before:w-full before:h-screen'>
      <div id='home' className='md:pt-20 pt-28 mx-auto w-[90vw]'>
        <div
          className='grid pt-10 md:pt-36 items-center lg:grid-cols-[1fr,1.7fr]'
        >
          <div data-aos='fade-right' className='h-full '>
            <button className='text-sm font-semibold uppercase text-blue-400'>
              <a href='#art'>art of detailing</a>
            </button>
            <div>
              <p className='mt-4 font-bold text-white text-3xl md:text-5xl'>
                Welcome To Car Buying Made Simple
              </p>
              <p className='mt-6 text-sm font-semibold text-gray-200'>
                Get more value in the affordable seven-passenger Chrysler
                Pacofoca Hybird.The exceptional and
              </p>
            </div>
            <div className='flex mt-6 items-center gap-4'>
              <button className='text-base hover:bg-gray-400  font-semibold capitalize px-3 py-2  bg-black/90 text-white'>
                <NavLink to='/vehical-model'>shop now</NavLink>
              </button>
              <Button
                onClick={handleOpen}
                className='flex items-center text-white gap-3 text-base font-semibold capitalize px-2 hover:bg-gray-400 py-1 '
              >
                <FaRegPlayCircle className='w-8 h-8' /> play video
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Box sx={style}>
            <iframe
              title='YouTube video player'
              width='100%'
              height='100%'
              src='https://www.youtube.com/embed/mKci2gErqJo?autoplay=1&controls=1'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            ></iframe>
          </Box>
        </Modal>
      </div>
    </div>
  )
}

export default hero
