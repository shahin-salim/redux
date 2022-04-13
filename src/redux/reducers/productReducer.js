import { actionType } from "../constant/action-type";

const initailState = {
     products: [],
};

// action is destructured here as {type , payload}
export const productReducer = (prevState = initailState, { type, payload }) => {
     switch (type) {
          case actionType.SET_PRODUCTS:
               return { ...prevState, products: payload };
          case actionType.FETCH_PRODUCTS:
               return {...prevState, products: payload}
          default:
               return prevState;
     }
};

export const selectedProductReducer = (prevState = {}, {type, payload}) => {
     switch (type){
          case actionType.SELECTED_PRODUCT:
               return {...prevState, ...payload }
          default:
               return prevState
     }
}
