import { combineReducers } from "redux";
import transactionReducer from "./transactionReducer";
import userReducer from "./userReducer";
const rootreducer = combineReducers({
    user:userReducer,
    transactions:transactionReducer
})

export default rootreducer