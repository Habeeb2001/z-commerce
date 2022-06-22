import express from "express"
const route = express.Router()
import { products } from "../data.js"




route.get("/api/products", (req, res) => {
    res.json(products)
})
route.get("/api/products/:id", (req, res) => {

    const product = products.find(x => x._id === req.params.id)


    if (product) {
        res.status(200).json(product)
        console.log(product)
    } else{
        res.status(404).send({ msg: "product wasn't found" })
    }

})


export default route