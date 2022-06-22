import mongoose from "mongoose"

import dotenv from "dotenv"
dotenv.config()
const mongoURi = process.env.DB_CONNECTION_URI
mongoose.connect(mongoURi, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>{
        console.log("DB connected")
    }).catch(e=>{
        if(e){
            console.log(e.message)
        }
    })
const schema = mongoose.Schema
export default schema