import { actionType } from "../constant/action-type";

const initailState = {
     products: [
          {
               id: 1,
               title: "smartphone",
               category: "gadgets",
          },
     ],
};

// action is destructured here as {type , payload}
export const productReducer = (prevState = initailState, { type, payload }) => {
     switch (type) {
          case actionType.SET_PRODUCTS:
               return prevState;
          default:
               return prevState;
     }
};
