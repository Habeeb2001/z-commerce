import "../../style/signinPage.css"
import React, { useMemo } from "react"
import { useParams, useNavigate } from "react-router-dom"

import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { signin } from "../../dispatch/userAction"
import { createProduct } from "../../dispatch/productListDispatch"


function CreateProductPage() {


    const [name, setName] = useState('');
    const [image, setImage] = useState('')
    // const [numberOfReviews, setNumberOfReviews]= useState('')
    const [price, setPrice]= useState('')
    const [brand, setBrand]= useState('')
    const [description, setDescription]= useState('')
    const [amountInStock, setAmountInStock]= useState('')
    // const [rating, setRating] = useState('')

    const adminCreateProduct = useSelector(state => state.adminCreateProduct)
    const { saving, productInfo, error } = adminCreateProduct
    const dispatch = useDispatch();


    const navigateTo = useNavigate()
    useEffect(() => {


    }, [])





    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createProduct ({
            name, 
            image, 
            price,
            brand,
            
            
            description,
            amountInStock
        }))





    }
    return (
        <div className="Form-parent">
            <div className="Form">
                <form onSubmit={submitHandler} encType='multipart/form-data'>
                    <div className="form-container">
                        <h1> sign In </h1>
                        <div className="inputBox">
                            {loading && <div>Loading...</div>}
                            {error && <div className="error-message">{error}</div>}
                        </div>
                        <div className="inputBox">
                            <label htmlFor="name">
                                name
                            </label>
                            <input type="text" name='name' id="name" onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="inputBox">
                            <label htmlFor="brand">
                                brand
                            </label>
                            <input type="text" name='brand' id="brand" onChange={(e) => setBrand(e.target.value)} />
                        </div>
                        <div className="inputBox">
                            <label htmlFor="price">
                                price
                            </label>
                            <input type="number" name='price' id="price" onChange={(e) => setPrice(e.target.value)} />
                        </div>
                        <div className="inputBox">
                            <label htmlFor="image">
                                image
                            </label>
                            <input type="file" name='image' id="image" onChange={(e) => setImage(e.target.files[0])} />
                        </div>
                        <div className="inputBox">
                            <label htmlFor="rating">
                                rating
                            </label>
                            <input type="number" name='rating' id="rating" onChange={(e) => setBrand(e.target.value)} />
                        </div>
                        <div className="inputBox">
                            <label htmlFor="description">
                                description
                            </label>
                            <textarea cols="20" name='description' rows="10" onChange={(e)=> setDescription(e.target.value)} >

                            </textarea>
                        </div>
                        <div className="inputBox">
                            <label htmlFor="amount">
                                amount in stock
                            </label>
                            <input type="number" name='amount' id="amount" onChange={(e) => setAmountInStock(e.target.value)} />
                        </div>
                        
                        <div className="inputBox">

                            <button type="submit" className="btn btn-primary" >Create product</button>
                        </div>
                        

                    </div>
                </form>
            </div>
        </div>)
}



export default CreateProductPage