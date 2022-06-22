import {
    PRODUCT_DETAILS_FETCH_FAIL,
    PRODUCT_DETAILS_FETCH_REQUEST,
    PRODUCT_DETAILS_FETCH_SUCCESS,
    PRODUCT_LIST_FETCH_FAIL,
    PRODUCT_LIST_FETCH_REQUEST,
    PRODUCT_LIST_FETCH_SUCCESS,
    PRODUCT_SAVE_FAIL,
    PRODUCT_SAVE_REQUEST,
    PRODUCT_SAVE_SUCCESS
} from "../constants/productReducerConstatnts"

import axios from "axios"

const listProducts = () => async (dispatch) => {


    try {
        dispatch({ type: PRODUCT_LIST_FETCH_REQUEST })
        const { data } = await axios.get("http://localhost:4000/api/products/")
        dispatch({ type: PRODUCT_LIST_FETCH_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: PRODUCT_LIST_FETCH_FAIL, payload: error.message })
    }
}

const detailsProduct = (id) => (dispatch) => {
    
        dispatch({ type: PRODUCT_DETAILS_FETCH_REQUEST, payload: id })
        fetch(`http://localhost:4000/api/products/${id}`)
            
            .then(res => {
                return res.json()
            })
            .then(data=>{
                console.log(data)
                dispatch({ type: PRODUCT_DETAILS_FETCH_SUCCESS, payload: data })
            })
            .catch(error=>{
                dispatch({ type: PRODUCT_DETAILS_FETCH_FAIL, payload: error.message })
            })
        

}



const createProduct =(product)=>async(dispatch, getState)=>{
    try {
    dispatch({type: PRODUCT_SAVE_REQUEST, payload: data})
        const {userSigin:{userInfo}} = getState()
        const {data} = await axios.post("http://localhost:4000/api/createproduct", product, {
            headers:{
                "Authorization": "Bearer" +userInfo.token
            }
            
        })
        dispatch({type: PRODUCT_SAVE_SUCCESS, payload: data})
    } catch (error) {
        if(error) dispatch({type: PRODUCT_SAVE_FAIL, payload: error.message})
    }
}
export { listProducts, detailsProduct, createProduct }
