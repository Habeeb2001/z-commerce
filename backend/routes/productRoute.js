import productsModel from "../models/productsSchema.js"
import express from "express"
import getToken from "./utils.js"
const route = express.Router()

route.get("/api/products", (req, res) => {
    productsModel.find({}).lean()
        .exec((err, products) => {
            res.send(products)
        })
})

route.post("/api/api/createproduct", (req, res) => {
    const productImg = req.files.image
     /* = new productsModel( */
        const product={
        name: req.body.name,
        price: req.body.price,
        brand: req.body.brand,
        image: productImg,
        description: req.body.description,
        amountInStock: req.body.amountInStock
    }
    // await product.save()
    console.log(product)
    if (product) res.status(201).send({ msg: "new product added" })
    else
        res.status(500).send({ msg: "error while creating product, make sure all fields are filled correctly" })
})
export { route }