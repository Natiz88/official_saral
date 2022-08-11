import React from 'react'

const Product = ({products}) => {
  return (
    <>
    <div className=''>
        <img src={products.image} alt="" />
        <div className='text-center'>
        <h1 className='font-bold'>{products.title}</h1>
        <p>Starting from Rs.{products.price}</p>
        </div>
    </div>
    </>
  )
}

export default Product