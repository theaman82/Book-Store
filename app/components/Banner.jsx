import React from 'react'

const Banner = () => {
  return (
    <div className='flex flex-1 justify-center items-center '>
         <div 
        className='w-full h-64 bg-cover rounded-md bg-center bg-no-repeat p-5' 
        style={{ backgroundImage: "url('banner.jpg')" }}>
            <div className='mt-5 flex flex-col gap-2 text-white'>
            <h2 className=' border-y text-center w-fit p-1 text-sm '>CLEARANCE SALE</h2>
            <h1 className='text-5xl font-semibold mt-1'>COLLECTION</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button className='bg-blue-500 text-white w-fit py-1 px-2 rounded font-bold'>BUY NOW</button>
            </div>
      </div>
    </div>
  )
}

export default Banner