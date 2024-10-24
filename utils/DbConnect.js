import mongoose from "mongoose"

export default function DbConnect(){
    try {
        const connect = mongoose.connect("mongodb://localhost:27017/bookdata")
        console.log("connected to mongoDB")
    } catch (error) {
        console.log("Error Connecting to database", error)
    }
}