import React from 'react'
import Category from './Category'
import Product from './Product'

function Main() {
  return (
    <div className='flex flex-col gap-y-10'>
         <div className="flex flex-col gap-y-8">
        <div className="flex flex-row items-end gap-x-4">
          <div className="h-10 w-5 bg-red-500 rounded"></div>
          <div className="text-base font-semibold text-red-500">Product</div>
        </div>
        <div className="font-semibold text-4xl">Products</div>
      </div>
      <div className='flex flex-row justify-between'>
    <Category/>
    <Product/>
    </div>
    </div>
  )
}

export default Main