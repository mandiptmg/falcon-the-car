import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { useGlobalContext } from '../../components/context/context'
import { FaTimes } from 'react-icons/fa'
import { Button } from '@mui/material'
// import toast, { Toaster } from 'react-hot-toast'

function ChildModal({ handleModalClose, isSearchDisabled }) {
  const { childModal, setChildModal } = useGlobalContext()

  const handleOpen = () => {
    setChildModal(true)
  }
  const handleClose = () => {
    setChildModal(false)
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
    <React.Fragment>
      <Button
        onClick={() => {
          handleOpen()
          handleModalClose('hidden')
        }}
        disabled={isSearchDisabled}
        className='from-sky-500 bg-gradient-to-r to-blue-400 hover:scale-105 duration-0 hover:bg-blue-400 font-semibold text-white px-4 py-2'
      >
        search
      </Button>
      <Modal
        open={childModal}
        className='grid overflow-y-auto h-screen py-10 place-items-center'
        aria-labelledby='child-modal-title'
        aria-describedby='child-modal-description'
      >
        <Box className=' w-[90vw] sm:max-w-3xl mx-auto text-white rounded-3xl border backdrop-blur-sm border-sky-200 sm:shadow-3xl p-4'>
          <div className='absolute top-4  right-4 '>
            <button
              onClick={() => {
                handleClose()
                handleModalClose('none')
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
    </React.Fragment>
  )
}

export default function NestedModal() {
  const { setModalOpen, modalOpen } = useGlobalContext()
  const [hidden, setHidden] = useState('')
  const [carType, setCarType] = useState('select a car')
  const [pickUpLocation, setPickUpLocation] = useState(
    'select pick up location'
  )
  const [dropOffLocation, setDropOffLocation] = useState(
    'select drop off location'
  )
  const [pickUpDate, setPickUpDate] = useState('')
  const [dropOffDate, setDropOffDate] = useState('')

  const handleClose = () => {
    setModalOpen(false)
  }

  const isSearchDisabled = () => {
    return (
      carType === 'select a car' ||
      pickUpLocation === 'select pick up location' ||
      dropOffLocation === 'select drop off location' ||
      pickUpDate === '' ||
      dropOffDate === ''
    )
  }

  const carOptions = [
    { value: 'supra', label: 'Supra' },
    { value: 'bmw', label: 'BMW' },
    { value: 'Nissan-GTR', label: 'Nissan GTR' },
    { value: 'Bugatti-Chiron', label: 'Bugatti Chiron' },
    { value: 'Mercedes Benz', label: 'Mercedes Benz' },
    { value: 'Ferrari', label: 'Ferrari' },
    { value: 'McLaren', label: 'McLaren' },
    { value: 'Lamborghini', label: 'Lamborghini' },
    { value: 'Ghost Royal Royce', label: 'Ghost Royal Royce' },
  ]

  const pickupLocations = [
    { value: 'Belgrade', label: 'Belgrade' },
    { value: 'Novi Sad', label: 'Novi Sad' },
    { value: 'Nis', label: 'Nis' },
    { value: 'Kragujevac', label: 'Kragujevac' },
    { value: 'Subotica', label: 'Subotica' },
  ]

  return (
    <div>
      <Modal
        open={modalOpen}
        onClose={handleClose}
        className='grid overflow-y-auto h-screen place-items-center'
        aria-labelledby='parent-modal-title'
        aria-describedby='parent-modal-description'
      >
        <Box
          className={` ${hidden} w-[90vw] sm:max-w-3xl mx-auto bg-black/50 text-white sm:border rounded-xl backdrop-blur-sm outline-sky-200   sm:shadow-2xl p-4`}
        >
          <h2
            id='parent-modal-title'
            className='text-3xl text-sky-500 font-bold capitalize my-4'
          >
            Book a car
          </h2>
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
          <form action='' className='p-1 grid sm:grid-cols-2 gap-4'>
            <div className='grid'>
              <label
                className='font-semibold capitalize'
                htmlFor='select-you-car-type'
              >
                Select your car type
              </label>
              <select
                required
                className='bg-gray-200 p-2 text-blue-600 rounded outline-sky-200'
                onChange={(e) => setCarType(e.target.value)}
                value={carType}
              >
                <option value='select a car'>Select a car</option>
                {carOptions.map((car) => (
                  <option key={car.value} value={car.value}>
                    {car.label}
                  </option>
                ))}
              </select>
            </div>
            <div className='grid'>
              <label className='font-semibold' htmlFor='where-to-pick-up'>
                Where to pick up
              </label>
              <select
                required
                className='bg-gray-200 text-blue-600 rounded outline-sky-200 p-2'
                onChange={(e) => setPickUpLocation(e.target.value)}
                value={pickUpLocation}
              >
                <option value='select pick up location'>
                  Select pick up location
                </option>
                {pickupLocations.map((location) => (
                  <option key={location.value} value={location.value}>
                    {location.label}
                  </option>
                ))}
              </select>
            </div>
            <div className='grid'>
              <label className='font-semibold' htmlFor='where-to-drop-off'>
                Where to drop off
              </label>
              <select
                required
                className='bg-gray-200 p-2 text-blue-600 rounded outline-sky-200'
                onChange={(e) => setDropOffLocation(e.target.value)}
                value={dropOffLocation}
              >
                <option value='select drop off location'>
                  Select drop off location
                </option>
                {pickupLocations.map((location) => (
                  <option key={location.value} value={location.value}>
                    {location.label}
                  </option>
                ))}
              </select>
            </div>
            <div className='grid'>
              <label className='font-semibold' htmlFor='pick-up-date'>
                Pick Up Date & Time:
              </label>
              <input
                required
                className='bg-gray-200 p-2 text-blue-600 rounded outline-sky-200'
                type='date'
                onChange={(e) => setPickUpDate(e.target.value)}
                value={pickUpDate}
              />
            </div>
            <div className='grid'>
              <label className='font-semibold' htmlFor='drop-off-date'>
                Drop Off Date & Time:
              </label>
              <input
                required
                className='bg-gray-200 p-2 text-blue-600 rounded outline-sky-200'
                type='date'
                onChange={(e) => setDropOffDate(e.target.value)}
                value={dropOffDate}
              />
            </div>
            <ChildModal
              handleModalClose={setHidden}
              isSearchDisabled={isSearchDisabled()}
            />
          </form>
        </Box>
      </Modal>
    </div>
  )
}
