import FakeStoreApi from "../../apis/FakeStoreApi"
import { actionType } from "../constant/action-type"


export const setProducts = (products) => {
    return {
        type: actionType.SET_PRODUCTS,
        payload: products
    }
}

export const selectedProduct = (products) => {
    return {
        type: actionType.SELECTED_PRODUCT,
        payload: products
    }
}

export const fetchProducts = () => async (dispatch) => {
    
    const response = await FakeStoreApi.get("/products")
    console.log(response)
    console.log('-------------------------------')
    dispatch({
        type: actionType.FETCH_PRODUCTS,
        payload: response.data,
    });
}


// what i think is products are parameter in this function and what will this function do is
// just calling the reducer 