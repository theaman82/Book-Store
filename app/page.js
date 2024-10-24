import DbConnect from '@/utils/DbConnect'
import React from 'react'
import InsertForm from './components/InsertForm'
import CallingTable from './components/CallingTable'
import Header from './components/Header'
import Banner from './components/Banner'
import CallingData from './components/CallingData'

const page = () => {
  DbConnect()
  return (
    <>
    <Header/>
    <div className='flex mt-2 flex-1 gap-4 p-4'>
      <div className='w-4/12 p-6 bg-gray-100'>
        <InsertForm/>
      </div>
      <div className=' w-8/12 '>
       <Banner/>
       <div className='overflow-y-scroll mt-5 h-[40vh] p-2 '><CallingData/></div>
      </div>
    </div>
    </>
  )
}

export default page