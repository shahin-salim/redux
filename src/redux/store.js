import { createStore, applyMiddleware, compose } from "redux";
import { reducer } from "./reducers";
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// create store is use for create storage its have reducer the  function change value and second arg is state
const store = createStore(
    reducer,
    // {},
    // // applyMiddleware(thunk),
    composeEnhancers(applyMiddleware(thunk))
);

export default store;
