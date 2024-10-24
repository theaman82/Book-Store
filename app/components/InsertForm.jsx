import DbConnect from '@/utils/DbConnect';
import BookStore from '../models/BookStore';
import { redirect } from 'next/navigation';
import {writeFile} from 'fs/promises'

const InsertForm = () => {

    //server Action
    const handleInsert = async (formData) =>{
        "use server";
        let image = formData.get("image")
        let title = formData.get("title")
        let author = formData.get("author")
        let noOfPages = formData.get("noOfPages")
        let description = formData.get("description")

        if(!image){
            console.log("Please select an image")
            return;
        }

        // upload to server
        const bytes = await image.arrayBuffer();
        const buffer = Buffer.from(bytes);

        try {
            await writeFile(`./public/photos/${image.name}`,buffer)
            DbConnect();
            let newdata = await BookStore.create({title:title,image:image.name,author:author,noOfPages:noOfPages,description:description})
        
           
        } catch (error) {
            console.log("failed to insert photo, try again")
        }
    

        redirect("/")

       

       

    }

  return (
    <div>
        <form action={handleInsert} method='post' className='flex flex-col gap-2 rounded'>
            <label className=' text-center bg-gray-300 rounded text-black p-3 text-lg'>Enter Book Details</label>
            <div className='mb-2 mt-5'>
                <label htmlFor="title">Title</label>
                <input type="text" id='title' name='title' className='w-full border px-3 py-2 rounded' />
            </div>
            <div className='mb-2'>
                <label htmlFor="author">Author</label>
                <input type="text" id='author' name='author' className='w-full border px-3 py-2 rounded' />
            </div>
            <div className='mb-2'>
                <label htmlFor="noOfPages">No Of Pages</label>
                <input type="number" id='noOfPages' name='noOfPages' className='w-full border px-3 py-2 rounded' />
            </div>
            <div className='mb-2'>
                <label htmlFor="description">Description</label>
                <input type="text" id='description' name='description' className='w-full border px-3 py-2 rounded' />
            </div>
            <div className=''>
                <label htmlFor="">Choose image</label>
                <input type="file" id='image' name='image' className='w-full border px-3 py-2 rounded' />
            </div>
            <div className=''>
                <input type="submit" className='w-full border px-3 py-2 rounded bg-gray-500 text-white' value="Create Record"  />
            </div>
        </form>
    </div>
  )
}

export default InsertForm
