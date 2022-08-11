import React from 'react'

const SocailMediaDesign = ({socialMediaDesign}) => {
  return (
    <>
    <div>
        <img src={socialMediaDesign.photo} alt="" className='w-2rem'/>
        <h1 className='font-semibold'>{socialMediaDesign.title}</h1>
        <p className='text-sm'>As low as Rs.{socialMediaDesign.price} per design</p>
        <p className='text-sm'>Know More</p>
    </div>
    </>
  )
}

export default SocailMediaDesign