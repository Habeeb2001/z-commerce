import axios from "axios"
import Cookie from "js-cookie"
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants"
const addToCart = (productId, qty) => async (dispatch, getState) => {
    try {
        const { data } = await axios.get(`http://localhost:4000/api/products/${productId}`)
        dispatch({
            type: CART_ADD_ITEM, payload: {
                image: data.image,
                qty: qty,
                amountInStock: data.amountInStock,
                name: data.name,
                product: data._id,
                price: data.price

            }

        })

        const { cart: { cartItems } } = getState()
        Cookie.set("cartitems", JSON.stringify(cartItems))
    } catch (error) {
        console.log(error.message)
    }

}



const removeFromCart = (Id) => (dispatch, getState) => {
    dispatch({ type: CART_REMOVE_ITEM, payload: Id })
    const { cart: { cartItems } } = getState()
    Cookie.set("cartitems", JSON.stringify(cartItems))
}
export { addToCart, removeFromCart } 