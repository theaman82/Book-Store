import React from 'react'

const Header = () => {
  return (
   <div className='flex flex-1  bg-blue-950 p-3 justify-between items-center'>
    {/* <h2 className=' flex flex-1 text-2xl text-white font-bold font-serif'>Bookish Haven</h2> */}
    <img src="logo.png" alt="logo.png" className='h-10 text-black    w-fit' />
    <form action="" className='flex flex-1 items-end justify-end  mr-[20%]' method='post'>
        <input type="text" className='py-1 px-3 w-[40%]  rounded border outline-none' placeholder='Search Here...' />
        <input type="submit" value="Go" className='bg-gray-500 cursor-pointer text-white font-bold p-[0.30rem] rounded-r ' />
    </form>
   </div>
  )
}

export default Header