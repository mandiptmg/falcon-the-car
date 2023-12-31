// ContactForm.js

import { HiOutlineMailOpen } from 'react-icons/hi'

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='sm:max-w-md sm:bg-black/50 md:backdrop-blur-xs rounded-xl p-10 mx-auto'
    >
      <div>
        <h1 data-aos='fade-up' className='text-center mb-4 text-white'>
          If You Prefer, You Can Also Reach Out To Us By Filling Out This
          Contact Form.{' '}
        </h1>
      </div>
      <div className='mb-4'>
        <label htmlFor='name' className='block text-sm font-medium text-white'>
          Your Name
        </label>
        <input
          type='text'
          id='name'
          name='name'
          placeholder='Enter your name'
          className='mt-1 p-2 w-full border rounded-md'
          required
        />
      </div>
      <div className='mb-4'>
        <label htmlFor='email' className='block text-sm font-medium text-white'>
          Your Email
        </label>
        <input
          type='email'
          id='email'
          placeholder='Email address'
          name='email'
          className='mt-1 p-2 w-full border rounded-md'
          required
        />
      </div>
      <div className='mb-4'>
        <label
          htmlFor='message'
          className='block text-sm font-medium text-white'
        >
          Message
        </label>
        <textarea
          id='message'
          name='message'
          placeholder='Send me a message...'
          rows='4'
          cols='50'
          className='mt-1 resize-none p-2 w-full border rounded-md'
          required
        ></textarea>
      </div>
      <button
        type='submit'
        className='bg-blue-400 border border-blue-400 w-full text-white py-2 px-4 rounded-md hover:bg-white font-semibold duration-500 flex items-center justify-center gap-2 hover:text-blue-400'
      >
        <HiOutlineMailOpen className='text-2xl' /> Send Message
      </button>
    </form>
  )
}

export default ContactForm
