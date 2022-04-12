import { createStore } from "redux";
import { reducer } from "./index";

// create store is use for create storage its have reducer the  function change value and second arg is state
const store = createStore(
    reducer,
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );  

export default store;
