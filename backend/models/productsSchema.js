import { default as mongoose } from "mongoose"
import schema from "./dbconfig.js"

const product = new schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        default: 0,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        default: 0,
        required: true
    },
    numberOfReviews: {
        type: Number,
        default: 0,
        required: true
    },
    description: {
        type: String,

        required: true
    },
    amountInStock: {
        type: Number,
        default: 0,
        required: true
    },
   
})
const productsModel = mongoose.model("products", product)
export {
    productsModel
}