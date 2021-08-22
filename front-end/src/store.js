import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { productListReducer, productDetailsReducer } from './reducers/productReducers';
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = {}
const reducer = combineReducers({
  productList: productListReducer,
  productDetailList: productDetailsReducer
})

const middleware = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;