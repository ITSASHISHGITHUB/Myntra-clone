import bagReducer from "./bagReducer";
import wishlistReducer from "./wishlistReducer";
import {combineReducers} from 'redux'
import productsReducer from "./productsReducer";

const rootReducer=combineReducers({
    bag:bagReducer,
    wishlist:wishlistReducer,
    products:productsReducer
})

export default rootReducer;