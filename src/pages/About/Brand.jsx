import Marquee from 'react-fast-marquee'

const Brand = () => {
  const brand = [
    'https://www.carlogos.org/car-logos/mercedes-benz-logo.png',
    'https://www.carlogos.org/car-logos/bmw-logo.png',
    'https://www.carlogos.org/car-logos/bugatti-logo.png',
    'https://www.carlogos.org/car-logos/rolls-royce-logo.png',
    'https://www.carlogos.org/car-logos/ferrari-logo.png',
    'https://www.carlogos.org/car-logos/mclaren-logo.png',
    'https://www.carlogos.org/car-logos/lamborghini-logo.png',
    'https://www.carlogos.org/car-logos/toyota-logo.png',
    'https://www.carlogos.org/car-logos/nissan-gt-r-logo.png',
  ]
  return (
    <div className='text-center py-10'>
      <h1 className='text-3xl font-bold capitalize text-slate-800 md:text-5xl'>
        our luxury brands
      </h1>
      <div className='my-10 '>
        <Marquee className='flex justify-between items-center'>
          {brand.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Image ${index + 1}`}
              className='w-24 ml-7 md:w-32'
            />
          ))}
        </Marquee>
      </div>
    </div>
  )
}

export default Brand
