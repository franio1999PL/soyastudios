import Link from 'next/link'
import { useState } from 'react'
import { FaHourglassHalf } from 'react-icons/fa'

export default function FourOhFour () {
  const [isLoading, setIsLoading] = useState(true)

  setTimeout(() => {
    setIsLoading(false)
  }, 1500)

  if (isLoading) {
    return (
      <>
        <div className='w-screen h-screen flex justify-center items-center'>
          <FaHourglassHalf className='animate-spin text-3xl' />
        </div>
      </>
    )
  }
  return (
    <>
      <div className='flex flex-col w-screen h-screen justify-center items-center gap-4 bg-gray-50'>
        <h1 className='text-4xl font-light'>404 | Ta strona nie istnieje!</h1>

        <Link className='hover:underline text-xl' href='/'>
          Wróć do strony głównej
        </Link>
      </div>
    </>
  )
}
