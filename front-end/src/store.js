import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { productListReducer, productDetailsReducer } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
import { composeWithDevTools } from 'redux-devtools-extension'

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const initialState = {
  cart: { cartItems: cartItemsFromStorage}
}

const reducer = combineReducers({
  productList: productListReducer,
  productDetailList: productDetailsReducer,
  cart: cartReducer
})

const middleware = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;