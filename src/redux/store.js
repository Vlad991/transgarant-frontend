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
import numberReducer from "./registration/numberReducer";
import carHolderReducer from "./registration/carHolderReducer";
import individualEntrepreneurReducer from "./registration/individualEntrepreneurReducer";
import driverDataReducer from "./registration/driverDataReducer";
import carsReducer from "./registration/carsReducer";
import driverPassportReducer from "./registration/driverPassportReducer";


let reducers = combineReducers({
    // checkout
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

    // registration
    numberReducer,
    carHolderReducer,
    individualEntrepreneurReducer,
    driverDataReducer,
    driverPassportReducer,
    carsReducer
});

const composeEnhancers = compose;
let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;