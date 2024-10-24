import DbConnect from '@/utils/DbConnect'
import React from 'react'
import BookStore from '../models/BookStore'
import { redirect } from 'next/navigation'

const CallingData = async() => {
    DbConnect()
    const handleRemove = async(formData)=>{
      "use server"
      let id = formData.get("recordId") 
      await BookStore.findByIdAndDelete(id)

      redirect("/")
    }
    const callingRecord = await BookStore.find()

  
  return (
    <div className='p-1 grid grid-cols-2 gap-4  '>
       {
        callingRecord.map((record,index)=>{
            return(
                <div className='bg-gray-100 border hover:shadow rounded p-3 h-[30vh] gap-3 w-auto flex flex-1 flex-row'>
                 <img src={`/photos/${record.image}`} className='h-full w-fit rounded' alt="book" />
                    <div className='flex flex-col justify-center font-semibold font-sans text-lg'>
                        <h2 >Title: <span className='font-medium text-gray-500'>{record.title}</span></h2>
                        <h2 >Author: <span className='font-medium text-gray-500'>{record.author}</span></h2>
                        <h2 >No Of Pages: <span className='font-medium text-gray-500'>{record.noOfPages}</span></h2>
                        <h2>Description: <span className='font-medium text-gray-500'>{record.description}</span></h2>
                        <form action={handleRemove}  method='post'>
                                    <input type="hidden" name='recordId' value={record._id} />
                                    <input type="submit" className='bg-red-500 px-3 py-1 cursor-pointer rounded text-white' value="Delete" />
                        </form>
                    </div>
                </div>
            )
        })
       }
    </div>
  )
}

export default CallingData