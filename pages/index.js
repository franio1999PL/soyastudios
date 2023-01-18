import Image from 'next/image'
import axios from 'axios'
import Header from '../src/components/layouts/header'
import Footer from '../src/components/layouts/footer'
import Products from '../src/components/Products'
import { FaHourglassHalf } from 'react-icons/fa'
import {
  GET_PRODUCTS_ENDPOINT,
  HEADER_FOOTER_ENDPOINT
} from '../src/utils/constants/endpoints'
import { getProductsData } from '../src/utils/products'
import { useState } from 'react'

export default function Home ({ headerFooter, products }) {
  const { header, footer } = headerFooter.data || {}
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
      <div>
        <Header header={header} />
        <main className='container mx-auto p-4'>
          <Products products={products} />
        </main>
        <Footer footer={footer} />
      </div>
    </>
  )
}

export async function getStaticProps () {
  const { data: headerFooter } = await axios.get(HEADER_FOOTER_ENDPOINT)
  const { data: products } = await getProductsData()

  const data = {
    headerFooter,
    products: products ?? {}
  }

  return {
    props: data || {},

    revalidate: 1
  }
}
