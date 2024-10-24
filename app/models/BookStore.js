import mongoose from "mongoose"


const BookStoreSchema = new mongoose.Schema({
    image: {type:String, required:true},
    title: {type:String},
    author: {type:String},
    noOfPages: {type:String},
    description: {type:String}
})

export default mongoose.models.BookStore || mongoose.model("BookStore",BookStoreSchema)