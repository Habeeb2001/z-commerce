import { useParams, useNavigate } from "react-router-dom"
import { detailsProduct } from "../../dispatch/productListDispatch"

import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

function ProductPage(props) {


    const [qty, setQuantity] = useState(1);
    const productDetails = useSelector(state => state.productDetails)
    
    const { product, error, loading } = productDetails

    const dispatch = useDispatch();

    const { id } = useParams()
    const navigateTo = useNavigate()
    useEffect(() => {

        dispatch(detailsProduct(id))
        return () => {

        }



    }, [])

    const addToCart = () => {

        navigateTo(`/cart/${id}/qty=${qty}`)
    }
    const goPlaceOrder = () => {
        try {
        navigateTo(`/orderproduct/${id}/qty=${qty}`)    
        } catch (error) {
            navigateTo()
        }
        
    }



    return (
        <div>
            <div className="bactToResults">
                <Link to="/">Back to results</Link>
            </div>
            {loading ? <div>Loading...</div> :
                error ? <div>{error}</div> :
                    (
                        <div key={product._id} className="details">
                            <div className="product_image">
                                <img src={product.image} alt={product.name} />

                            </div>
                            <div className="product_details">
                                <ul>
                                    <li>Name: {product.name}</li>
                                    <li>ratings: {product.rating} </li>
                                    <li> {product.numberOfReviews} of reviews </li>

                                    <li>price: {product.price}</li>
                                    <li>Description: {product.description}</li>

                                </ul>
                            </div>
                            <div className="cart">
                                <ul>
                                    <li>price: {product.price}</li>
                                    <li>status: </li>
                                    <li>
                                        Quantity:<select value={qty} onChange={(e) => setQuantity(e.target.value)}>
                                            {[...Array(product.amountInStock).keys()].map(val =>
                                                <option key={val + 1} value={val + 1}>{val + 1}</option>
                                            )}

                                        </select>
                                    </li>
                                    <li className="addToCart">
                                        {product.amountInStock > 0 ? <button onClick={addToCart}>Add to cart</button> :
                                            <button id="outOfStockBtn" disabled>out of Stock</button>
                                        }
                                    </li>
                                    <li>
                                        {product.amountInStock > 0 ?<button onClick={goPlaceOrder} className="buyNow"  >Buy Now</button>:    
                                            ""
                                        }

                                    </li>
                                </ul>
                            </div>
                        </div>
                    )
            }



        </div>
    )
}


export default ProductPage