import { default as mongoose } from "mongoose"
import schema from "./dbconfig.js"
const userDetails = new schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    isAdmin: {type: Boolean,required:true, default: false}
})

const User = mongoose.model("user", userDetails)
export default User