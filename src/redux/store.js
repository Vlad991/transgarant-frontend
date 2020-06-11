import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import categoryReducer from "./categoryReducer";
import carBodyReducer from "./carBodyReducer";
import dopReducer from "./dopReducer";
import dateReducer from "./dateReducer";
import pointsReducer from "./pointsReducer";
import { reducer as formReducer } from 'redux-form';
import cargoReducer from "./cargoReducer";


let reducers = combineReducers({
    categoryReducer,
    carBodyReducer,
    dopReducer,
    dateReducer,
    pointsReducer,
    cargoReducer,
    // tariffReducer,
    // paymentReducer,
    // socialReducer,
    // clientFormReducer
    form: formReducer
});

const composeEnhancers = compose;
let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;