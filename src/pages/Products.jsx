import React from 'react'
import ProductList from '../components/ProductList'
import ProductProduction from '../components/ProductProduction'


const Products = () => {
  return (
    <div className='w-full h-full bg-gray-300'>
      <ProductProduction/>
     <ProductList/>
    </div>
  )
}

export default Products