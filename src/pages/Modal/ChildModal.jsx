import { useState } from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { FaTimes } from 'react-icons/fa'
// import { Button } from '@mui/material'
// import toast, { Toaster } from 'react-hot-toast'
import { useGlobalContext } from '../../components/context/context'

export default function ChildModal() {
  const { childModal1, setChildModal1 } = useGlobalContext()

  const handleClose = () => {
    setChildModal1(false)
  }
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    age: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    subscribeToUpdates: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target

    // Update the state for non-checkbox inputs
    if (type !== 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }))
    } else {
      // Update the state for checkbox input
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked,
      }))
    }

    // Check if the age is 18 or older, and disable the submit button accordingly
    const isAgeValid = name === 'age' ? parseInt(value, 10) > 18 : true
    setAgeValid(isAgeValid)
  }

  const [ageValid, setAgeValid] = useState(true)


  return (
    <div>
      <Modal
        open={childModal1}
        className='grid overflow-y-auto h-screen py-10 place-items-center'
        aria-labelledby='child-modal-title'
        aria-describedby='child-modal-description'
      >
        <Box className=' w-[90vw] sm:max-w-3xl mx-auto text-white rounded-3xl border backdrop-blur-sm border-sky-200 sm:shadow-3xl p-4'>
          <div className='absolute top-4  right-4 '>
            <button
              onClick={() => {
                handleClose()
              }}
              className='bg-red-500 hover:scale-105 duration-500 text-white  p-1 rounded outline-sky-200 '
            >
              <FaTimes />
            </button>
          </div>
          <h2
            id='child-modal-title'
            className='text-center font-bold text-2xl py-4 sm:text-4xl capitalize text-sky-400'
          >
            Personal information
          </h2>
          <hr className='my-2' />
          <form
            action='https://getform.io/f/335c95aa-dfaf-4ac6-bb61-3d8a5b667c9a'
            method='POST'
          >
            <div className='grid gap-4 items-start  sm:grid-cols-2'>
              <div className='grid'>
                <label className='font-semibold'>
                  First Name *
                  <input
                    type='text'
                    name='firstName'
                    value={formData.firstName}
                    placeholder='Enter your first name'
                    onChange={handleChange}
                    required
                    className='bg-gray-200 w-full p-2 text-blue-600 rounded outline-sky-200'
                  />
                </label>
                <span className='text-sm text-gray-300 mt-1 '>
                  {formData.firstName === '' && 'This field is required.'}
                </span>
              </div>

              <div className='grid'>
                <label className='font-semibold'>
                  Last Name *
                  <input
                    type='text'
                    placeholder='Enter your last name'
                    name='lastName'
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className='bg-gray-200 w-full p-2 text-blue-600 rounded outline-sky-200'
                  />
                </label>
                <span className='text-sm text-gray-300 mt-1 '>
                  {formData.lastName === '' && 'This field is required.'}
                </span>
              </div>

              <div className='grid'>
                <label className='font-semibold'>
                  Phone Number *
                  <input
                    className='bg-gray-200 w-full p-2 text-blue-600 rounded outline-sky-200'
                    type='tel'
                    name='phoneNumber'
                    placeholder='Enter your phone number'
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                </label>
                <span className='text-sm text-gray-300 mt-1 '>
                  {formData.phoneNumber === '' && 'This field is required.'}
                </span>
              </div>

              <div className='grid'>
                <label className='font-semibold'>
                  Age *
                  <input
                    className='bg-gray-200 w-full p-2 text-blue-600 rounded outline-sky-200'
                    type='number'
                    name='age'
                    placeholder='18+'
                    value={formData.age}
                    onChange={handleChange}
                    required
                  />
                </label>
                <span className='text-sm text-gray-300 mt-1 '>
                  {formData.age === '' && 'This field is required.'}
                  {!ageValid && 'Age must be 19 or older.'}
                </span>
              </div>

              <div className='grid'>
                <label className='font-semibold'>Email *</label>
                <input
                  className='bg-gray-200 w-full p-2 text-blue-600 rounded outline-sky-200'
                  type='email'
                  name='email'
                  placeholder='Enter your email address'
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <span className='text-sm text-gray-300 mt-1 '>
                  {formData.email === '' && 'This field is required.'}
                </span>
              </div>

              <div className='grid'>
                <label className='font-semibold'>Address *</label>{' '}
                <input
                  className='bg-gray-200 w-full p-2 text-blue-600 rounded outline-sky-200'
                  type='text'
                  name='address'
                  placeholder='Enter your street address'
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
                <span className='text-sm text-gray-300 mt-1 '>
                  {formData.address === '' && 'This field is required.'}
                </span>
              </div>

              <div className='grid'>
                <label className='font-semibold'>City *</label>
                <input
                  type='text'
                  className='bg-gray-200 w-full p-2 text-blue-600 rounded outline-sky-200'
                  name='city'
                  placeholder='Enter your city'
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
                <span className='text-sm text-gray-300 mt-1 '>
                  {formData.city === '' && 'This field is required.'}
                </span>
              </div>

              <div className='grid'>
                <label className='font-semibold'>
                  Zip Code *
                  <input
                    className='bg-gray-200 w-full p-2 text-blue-600 rounded outline-sky-200'
                    type='text'
                    name='zipCode'
                    placeholder='Enter zip code'
                    value={formData.zipCode}
                    onChange={handleChange}
                    required
                  />
                </label>
                <span className='text-sm text-gray-300 mt-1 '>
                  {formData.zipCode === '' && 'This field is required.'}
                </span>
              </div>
            </div>
            <div className='my-4'>
              <label className='flex text-gray-200 text-base gap-x-2 items-center font-semibold'>
                <input
                  type='checkbox'
                  name='subscribeToUpdates'
                  checked={formData.subscribeToUpdates}
                  onChange={handleChange}
                />
                Please send me latest news and updates
              </label>
            </div>
            <hr className='my-4' />
            <div>
              <button
                className='text-center w-full bg-gradient-to-r to-blue-400 hover:scale-[1.01] duration-500 from-sky-500  p-2 rounded-lg font-semibold  '
                type='submit'
                disabled={!ageValid}
              >
                Reserve Now
              </button>
            </div>
          </form>
          {/* <Toaster /> */}
        </Box>
      </Modal>
    </div>
  )
}