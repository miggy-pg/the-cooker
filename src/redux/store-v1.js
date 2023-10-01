import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import customerReducer from "./features/customers/customerSlice";
import accountReducer from "./features/accounts/accountSlice";

const combineReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

// basically, 'applyMiddleware' is a function that takes 'thunk' as an argument
// where redux will know that we are using 'thunk' as a middleware API
// NOTE: redux-thunk or 'thunk' is a middleware API that allows us to
// write action creators that return a function instead of an action.
// In simpler term, it allows us to write asynchronous logic that interacts on the dispatch
// before reaching the store.
const store = createStore(combineReducer, applyMiddleware(thunk));

export default store;
