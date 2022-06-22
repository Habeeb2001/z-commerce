import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { listProducts } from "../../dispatch/productListDispatch"

function HomePage(props) {

    // const [products, setProducts] = useState([])
    const productList= useSelector(state=> state.productList);
    const {products, loading, error} = productList
    const dispatch = useDispatch();
    
    
    
    
    useEffect(() => {
        dispatch(listProducts())
            return () => { }
    }, [])

    return loading? <div>loading...</div>: 
    error? <div>{error}</div>:

        <div>
            <div className="main-child">
                <h2>Beverages</h2>
                <ul className="cards">
                    {
                        products.map((product, _id) => (
                            <li key={product._id}>
                                <div className="card">
                                    <Link to={`/product/` + product._id}>
                                        <img src={product.image} alt={product.name} />
                                    </Link>

                                    <div className="product-name">
                                        <Link to={"/product/" + product._id} _id='product-name'>{product.name}</Link> </div>
                                    <div className="product-brand">{product.brand}</div>
                                    <div className="product-price">${product.price}</div>
                                    <div className="ratings">{product.rating} start {product.numberOfReviews}</div>
                                </div>


                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>

    
}
export default HomePage