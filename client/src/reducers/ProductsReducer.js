import {PRODUCT_LIST_FETCH_REQUEST, 
    PRODUCT_LIST_FETCH_SUCCESS, 
    PRODUCT_LIST_FETCH_FAIL, 
    PRODUCT_DETAILS_FETCH_REQUEST, 
    PRODUCT_DETAILS_FETCH_SUCCESS, 
    PRODUCT_DETAILS_FETCH_FAIL,
    PRODUCT_SAVE_REQUEST,
    PRODUCT_SAVE_SUCCESS,
    PRODUCT_SAVE_FAIL} from "../constants/productReducerConstatnts"



function productListReducer(state={products:[]}, action){
    switch(action.type){
        case PRODUCT_LIST_FETCH_REQUEST:
            return {loading: true};
        case PRODUCT_LIST_FETCH_SUCCESS:
            return {loading: false, products: action.payload};
        case PRODUCT_LIST_FETCH_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}
function productDetailsReducer(state={product:[]}, action){
    switch(action.type){
        case PRODUCT_DETAILS_FETCH_REQUEST:
            return {loading: true};
        case PRODUCT_DETAILS_FETCH_SUCCESS:
            return {loading: false, product: action.payload};
        case PRODUCT_DETAILS_FETCH_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}
function createProductReducer(state={product:{}}, action){
    switch(action.type){
        case PRODUCT_SAVE_REQUEST:
            return {saving: true};
        case PRODUCT_SAVE_SUCCESS:
            return {saving: false, success: true,  product: action.payload};
        case PRODUCT_SAVE_FAIL:
            return {saving: false, error: action.payload};
        default:
            return state;
    }
}
export {productListReducer, productDetailsReducer, createProductReducer}

// productInfo