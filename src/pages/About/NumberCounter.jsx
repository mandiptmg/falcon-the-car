import { useEffect, useState } from 'react'

const NumberCounter = ({ value, label, img }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const increment = Math.ceil(value / 1000)
    let initialValue = 0

    const increaseCount = setInterval(() => {
      initialValue += increment

      if (initialValue > value) {
        setCount(value)
        clearInterval(increaseCount)
        return
      }

      setCount(initialValue)
    }, 1)

    return () => clearInterval(increaseCount)
  }, [value])

  return (
    <article className='text-center'>
      <img src={img} alt={label} className='w-12 mx-auto' />
      <div className='md:text-xl text-base font-semibold text-white'>
        <span>{count}+</span>
        <p>{label}</p>
      </div>
    </article>
  )
}

export default NumberCounter
