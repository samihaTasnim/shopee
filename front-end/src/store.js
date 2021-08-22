import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { productListReducer, productDetailsReducer } from './reducers/productReducers';

const initialState = {}
const reducer = combineReducers({
  productList: productListReducer,
  productDetailList: productDetailsReducer
})

const middleware = [thunk]
const store = createStore(reducer, initialState, applyMiddleware(...middleware))

export default store;