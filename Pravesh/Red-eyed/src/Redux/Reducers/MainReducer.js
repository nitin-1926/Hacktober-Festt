import { combineReducers } from "redux";
import collectionReducer from "./collectionReducer";
import SearchReducer from './SearchReducer'
import CartReducer from './CartReducer'
import SignUpReducer from './SignUpReducer'

const MainReducer = combineReducers({
    collectionReducer,
    SearchReducer,
    CartReducer,
    SignUpReducer
})

export default MainReducer