import DbConnect from '@/utils/DbConnect'
import React from 'react'
import BookStore from '../models/BookStore'
import { redirect } from 'next/navigation'

const CallingTable = async() => {

    DbConnect()
    const callingRecord = await BookStore.find()

    const handleDelete = async(formData) =>{
        "use server"
        let id = formData.get("recordId");
        await BookStore.findByIdAndDelete(id)

        redirect("/")
    }

  return (
    <div className='px-2'>
        <table className='w-full border-2 border-black'>
            <thead className='bg-yellow-100 '>
                <tr >
                    <td className='border-black border-2 text-center p-3'>Id</td>
                    <td className='border-black border-2 text-center p-3'>Title</td>
                    <td className='border-black border-2 text-center p-3'>Author</td>
                    <td className='border-black border-2 text-center p-3'>No Of Pages</td>
                    <td className='border-black border-2 text-center p-3'>Description</td>
                    <td className='border-black border-2 text-center p-3'>Remove</td>

                </tr>
            </thead>
            <tbody>
                {
                    callingRecord.map((record, index)=>{
                        return(
                            <tr key={index}>
                                <td className='border-black border-2 px-3'>{index+1}</td>
                                <td className='border-black border-2 px-3'>{record.title}</td>
                                <td className='border-black border-2 px-3'>{record.author}</td>
                                <td className='border-black border-2 px-3'>{record.noOfPages}</td>
                                <td className='border-black border-2 px-3'>{record.description}</td>
                                <td className='border-black border-2 p-3'>
                                <form action={handleDelete} className='bg-yellow-100' method='post'>
                                    <input type="hidden" name='recordId' value={record._id} />
                                    <input type="submit" className='bg-red-500 px-3 py-2 cursor-pointer rounded text-white' value="Delete" />
                                </form>
                                </td>
                            </tr>
                           
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default CallingTable