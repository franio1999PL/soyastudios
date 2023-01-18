import { isArray, isEmpty } from 'lodash'
import Link from 'next/link'
import TestImage from '../../../public/380x380.png'
import Image from '../image'

const Products = ({ products }) => {
  if (isEmpty(products) || !isArray(products)) {
    return null
  }
  // console.log(products)

  return (
    <>
      <div className='flex flex-wrap -mx-2 overflow-hidden'>
        {products.length
          ? products.map(product => {
              const img = product?.images?.[0] ?? {}
              return (
                <div
                  key={product?.id}
                  className='my-2 px-2 w-full overflow-hidden sm:w-1/2 md:w-1/3 xl:w-1/4 text-center'
                >
                  <Link
                    href={
                      product.permalink
                        .replace('index.php/', '')
                        .replace('produkt', 'product')
                        .replace('https', 'http') ?? '/'
                    }
                  >
                    <div className='border rounded-md shadow-sm hover:shadow-md hover:border-gray-700/40 p-4 h-full flex flex-col justify-between gap-1'>
                      {/* eslint-disable-next-line jsx-a11y/alt-text */}
                      <Image
                        sourceUrl={img?.src ?? TestImage}
                        altText={img?.alt ?? ''}
                        title={product?.name ?? ''}
                        width='380'
                        height='380'
                      />
                      <p className='text-lg'>{product?.name ?? ''}</p>
                      <div className='flex justify-center gap-2'>
                        {product?.sale_price ? (
                          <>
                            {/* Po przecenie */}
                            <p>{product?.price}zł</p>
                            {/* Przed przeceną */}
                            <p className='line-through text-gray-900/30'>
                              {product?.regular_price}zł
                            </p>
                          </>
                        ) : (
                          <p>{product?.price}zł</p>
                        )}
                      </div>
                    </div>
                  </Link>
                </div>
              )
            })
          : null}
      </div>
    </>
  )
}

export default Products
