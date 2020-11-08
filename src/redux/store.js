import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import numberReducer from "./registration/numberReducer";
import carHolderReducer from "./registration/carHolderReducer";
import individualEntrepreneurReducer from "./registration/individualEntrepreneurReducer";
import driverDataReducer from "./registration/driverDataReducer";
import carsReducer from "./registration/carsReducer";
import driverPassportReducer from "./registration/driverPassportReducer";
import {reducer as formReducer} from 'redux-form'
import driverLicenseReducer from "./registration/driverLicenseReducer";
import recommendContactsReducer from "./registration/recommendContactsReducer";
import driversReducer from "./registration/driversReducer";
import completeReducer from "./registration/completeReducer";


let reducers = combineReducers({
    // registration
    numberReducer,
    carHolderReducer,
    individualEntrepreneurReducer,
    driverDataReducer,
    driverPassportReducer,
    carsReducer,
    driverLicenseReducer,
    recommendContactsReducer,
    driversReducer,
    completeReducer,

    // Redux-Form
    form: formReducer
});

const composeEnhancers = compose;
let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;