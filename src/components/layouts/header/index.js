import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { MdShoppingCart } from 'react-icons/md'

const Header = ({ header }) => {
  const { siteLogoUrl, siteTitle, siteDescription, favicon, headerMenuItems } =
    header

  const [showText, setShowText] = useState(true)

  const LogoText = () => {
    setShowText(!showText)
  }
  // console.log('header', header)
  return (
    <>
      <Head>
        <title>Woocommerce Next.js App</title>
        <link rel='icon' href={favicon} />
      </Head>
      <div className='header w-full flex text-4xl items-center p-4 justify-between px-20 border-b bg-slate-50'>
        {/* <Link href='/'> */}
        <div
          onClick={() => LogoText()}
          className='flex gap-4 justify-center items-center '
        >
          <Image
            width={80}
            height={80}
            alt={siteTitle}
            src={siteLogoUrl}
            className={`border rounded-full border-gray-300 shadow-md hover:shadow-lg cursor-pointer
            `}
          />
          {!showText && (
            <div className='flex flex-col gap-1 justify-center items-center'>
              <h1 className='font-light uppercase text-2xl'>{siteTitle}</h1>
              <p className='text-sm'>{siteDescription}</p>
            </div>
          )}
        </div>
        {/* </Link> */}
        <div className=''>
          <ul className='flex text-xl gap-4 justify-center items-center pt-4 uppercase font-light'>
            {headerMenuItems &&
              headerMenuItems.map(item => (
                <li
                  key={item.ID}
                  className='hover:text-gray-900/50 cursor-pointer '
                >
                  <a href={item.url} target='_blank' rel='noreferrer'>
                    {item.title}
                  </a>
                </li>
              ))}
          </ul>
        </div>
        <div className='pt-4 hover:text-gray-900/60 cursor-pointer font-light'>
          <MdShoppingCart />
        </div>
      </div>
      <div className='hidden md:flex'>
        <ul className='flex justify-around border-b w-full text-center uppercase font-semibold py-2'>
          <li className='border-r w-[10%] hover:bg-gray-100 cursor-pointer'>
            Gucci
          </li>
          <li className='border-r w-[10%] hover:bg-gray-100 cursor-pointer'>
            Fendi
          </li>
          <li className='border-r w-[10%] hover:bg-gray-100 cursor-pointer'>
            Prada
          </li>
          <li className='border-r w-[10%] hover:bg-gray-100 cursor-pointer'>
            Adidas
          </li>
          <li className='border-r w-[10%] hover:bg-gray-100 cursor-pointer'>
            Nike
          </li>
          <li className='border-r w-[10%] hover:bg-gray-100 cursor-pointer'>
            Reebok
          </li>
          <li className='border-r w-[10%] hover:bg-gray-100 cursor-pointer'>
            4F
          </li>
          <li className='border-r w-[10%] hover:bg-gray-100 cursor-pointer'>
            LEVIS
          </li>
          <li className='border-r w-[10%] hover:bg-gray-100 cursor-pointer'>
            LOUIS VUITTON
          </li>
          <li className='border-r w-[10%] hover:bg-gray-100 cursor-pointer'>
            BURBERRY
          </li>
        </ul>
      </div>
    </>
  )
}

export default Header
