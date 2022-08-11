import React from 'react'

export default function Resetpass() {
  return (
    <>
      <div className='h-screen w-full flex justify-center bg-gradient-to-r from-blue-400  to-blue-200 items-center '>
        <div className='h-[26rem] flex-col flex drop-shadow-2xl bg-gray-100  border rounded-3xl w-[70%] md:w-[60%] md:h-[35%]  lg:w-[50%] lg:h-[70%]  xl:w-[40%] xl:h-[47%]  '>
          <form className='flex flex-col px-9 my-16'>
            {/* <h1 className='flex justify-center font-extrabold font-sans'>Reset Password</h1> */}
            <label className='flex font-medium mt-6 mb-2'>Password</label>
            <input
              className='rounded-lg h-10'
              type="password"
              name="password"
              placeholder='  Enter new password '
            />

            <label className='flex font-medium mt-6 mb-2'>Comfirm password</label>
            <input
              className='rounded-lg h-10 mb-2'
              type="password"
              name="password"
              placeholder='  Confirm Password'
            />
            <div className='flex justify-center  m-5'>
              <button className='border shadow-lg rounded-lg h-11 w-[100%]  bg-blue-300 text-white font-bold  md:w-[80%] lg:w-[80%] xl:w-[80%]'>
                Change password</button>
            </div>
          </form>

        </div>
      </div> 
    </>
  )
}