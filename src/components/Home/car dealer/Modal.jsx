import { useGlobalContext } from "../../context/context"
const Modal = () => {
  const { open, showRef } = useGlobalContext()
  return open ? (
    <div className='relative'>
      <div className='fixed z-20 grid place-items-center   top-0 bg-black/50 h-screen left-0 w-full mx-auto'>
        <div ref={showRef} className='  max-w-lg md:max-w-xl mx-auto'>
          <iframe
          width='100%'
          height="100%"
            title='YouTube video player'
            src='https://www.youtube.com/embed/mKci2gErqJo?autoplay=1&controls=1'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  ) : null
}

export default Modal
