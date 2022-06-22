import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import {productDetailsReducer, productListReducer, productReducer} from "./reducers/ProductsReducer";
import thunk from "redux-thunk"
import { cartReducer } from "./reducers/cartReducers";
import Cookie from "js-cookie";
import { userRegisterReducer, userSignInReducer } from "./reducers/userReducer";

const cartItems = Cookie.get("cartItems")|| []

const userInfo = Cookie.get('userInfo')
const iniitialState={cart:{cartItems}, userSignIn:{userInfo}}
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSignInReducer,
    userRegister: userRegisterReducer,
    adminCreateProduct: createProductReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||compose;
const store = createStore(reducer, iniitialState, composeEnhancer(applyMiddleware(thunk)));
export default store