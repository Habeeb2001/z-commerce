import React from "react"
import { useLocation, useParams, useSearchParams, useNavigate} from "react-router-dom"
import { useEffect } from "react"
import { addToCart, removeFromCart } from "../../dispatch/cartAction"
import { useDispatch, useSelector } from "react-redux";
function Cart() {
  const { id } = useParams();
  const location = useLocation()
  const qty = location? parseInt(location.pathname.split("=")[1]):1
  const navigate = useNavigate()

  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const { cartItems } = cart;
  const removeFromCartHandler=(id)=>{
    dispatch(removeFromCart(id))
  }
  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty))
    }
  }, [])
  function checkoutHandler(){
    navigate("/signin/redirect=shipping")
  }
  return <div>
    <div className="cart-list">
      <ul className="cart-list-container">

        <li>
          <h3>Shopping cart</h3>
          <div>price</div>
        </li>
        <li>
          {
            cartItems.length === 0 ?
              <div   id="cart-error">cart is empty</div> :
              cartItems.map(item =>
                <div>
                  <div key={id} >
                  <img src={item.image} alt="product-image" />
                  <div>{item.name}</div>
                  <div>
                    qty:
                    <select value={item.qty} onChange={(e)=>dispatch(item.product, e.target.value)}>
                      {[...Array(item.amountInStock).keys()].map(m=><option key={m+1} value={m+1}>{m+1}</option>)}
                    </select>
                    <button className="button" onClick={()=>removeFromCartHandler(item.product)}>Remove Product</button>
          
                    <div>
                      {item.price}
                    </div>
                    
                  </div>
                </div>
                
                  <div className="cart-action">
                    <h3>
                      SubTotal ({cartItems.reduce((a, c)=> a+c.qty, 0) } items)
                      :${cartItems.reduce((a, c)=> a + c.price * c.qty, 0)}
                    </h3>
                      <button type="button" onClick={checkoutHandler} disabled={cartItems.length ===0}>
                            Proceed to checkout
                      </button>
                  </div> 
                </div>
              )
          }
        </li>
      </ul>
    </div>

  </div>
}

export default Cart