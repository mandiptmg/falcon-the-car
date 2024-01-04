import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'
import { useGlobalContext } from '../../components/context/context'
import { FaTimes } from 'react-icons/fa'

function ChildModal({ handleModalClose, isSearchDisabled }) {
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
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
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your logic to handle form submission, e.g., sending data to a server

    // For now, log the form data to the console
    console.log('Form Data:', formData)
  }
  return (
    <React.Fragment>
      <Button
        onClick={() => {
          handleOpen()
          handleModalClose('hidden')
        }}
        disabled={isSearchDisabled()}
        className='from-sky-500 bg-gradient-to-r to-blue-400 hover:scale-105 duration-0 hover:bg-blue-400 font-semibold text-white px-4 py-2'
      >
        search
      </Button>
      <Modal
        open={open}
        className='grid overflow-y-auto h-screen py-10 place-items-center'
        aria-labelledby='child-modal-title'
        aria-describedby='child-modal-description'
      >
        <Box className=' w-[90vw] sm:max-w-3xl mx-auto text-white rounded-3xl border backdrop-blur-sm border-sky-200 sm:shadow-3xl p-4'>
          <div className='absolute top-4  right-4 '>
            <button
              onClick={() => {
                handleClose()
                handleModalClose('')
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
          <form onSubmit={handleSubmit}>
            <div className='grid gap-4 items-start  sm:grid-cols-2'>
              <div className='grid'>
                <label className='font-semibold'>
                  First Name *
                  <input
                    type='text'
                    name='firstName'
                    value={formData.firstName}
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
                    value={formData.age}
                    onChange={handleChange}
                    required
                  />
                </label>
                <span className='text-sm text-gray-300 mt-1 '>
                  {formData.age === '' && 'This field is required.'}
                </span>
              </div>

              <div className='grid'>
                <label className='font-semibold'>Email *</label>
                <input
                  className='bg-gray-200 w-full p-2 text-blue-600 rounded outline-sky-200'
                  type='email'
                  name='email'
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
            <button
              className='text-center w-full bg-gradient-to-r to-blue-400 hover:scale-[1.01] duration-500 from-sky-500  p-2 rounded-lg font-semibold  '
              type='submit'
            >
              Reserve Now
            </button>
          </form>
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
              isSearchDisabled={isSearchDisabled}
              handleModalClose={setHidden}
            />
          </form>
        </Box>
      </Modal>
    </div>
  )
}
