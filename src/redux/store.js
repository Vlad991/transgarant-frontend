import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import categoryReducer from "./checkout/categoryReducer";
import carBodyReducer from "./checkout/carBodyReducer";
import dopReducer from "./checkout/dopReducer";
import dateReducer from "./checkout/dateReducer";
import pointsReducer from "./checkout/pointsReducer";
import cargoReducer from "./checkout/cargoReducer";
import tariffReducer from "./checkout/tariffReducer";
import paymentReducer from "./checkout/paymentReducer";
import socialReducer from "./checkout/socialReducer";
import clientFormReducer from "./checkout/clientFormReducer";
import docReturnReducer from "./checkout/docReturnReducer";
import leafletMapReducer from "./checkout/leaflet/leafletMapReducer";


let reducers = combineReducers({
    categoryReducer,
    carBodyReducer,
    dopReducer,
    docReturnReducer,
    dateReducer,
    pointsReducer,
    cargoReducer,
    tariffReducer,
    paymentReducer,
    socialReducer,
    clientFormReducer,
    mapReducer: leafletMapReducer,
});

const composeEnhancers = compose;
let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;