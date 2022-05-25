import { combineReducers, createStore } from "redux";

import productReducer from "./productManagement";

const reducer = combineReducers({
    product: productReducer,
});
const store = createStore(reducer);

export default store;
