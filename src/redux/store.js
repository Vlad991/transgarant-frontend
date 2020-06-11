import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import categoryReducer from "./categoryReducer";
import carBodyReducer from "./carBodyReducer";
import dopReducer from "./dopReducer";


let reducers = combineReducers({
    categoryReducer,
    carBodyReducer,
    dopReducer,
    // routeReducer,
    // cargoReducer,
    // tariffReducer,
    // paymentReducer,
    // socialReducer,
    // clientFormReducer
});

const composeEnhancers = compose;
let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;