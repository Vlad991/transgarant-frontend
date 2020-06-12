import {vehicleAPI} from "../api/api";

const SET_BODY_TYPES = 'SET-BODY-TYPES';
const SET_BODY_OPTIONS = 'SET-BODY-OPTIONS';
const SET_BODY_OPTION_CHS = 'SET-BODY-OPTION-CHS';
const SET_BODY_OPTION_CH_VALUES = 'SET-BODY-OPTION-CH-VALUES';
const SET_ACTIVE_BODY_TYPE = 'SET-ACTIVE-BODY-TYPE';
const SET_BODY_OPTION = 'SET-BODY-OPTION';
const SET_BODY_OPTION_CH_VAL = 'SET-BODY-OPTION-CH-VAL';
const CLEAR_BODY_OPTION_CH_VAL = 'CLEAR-BODY-OPTION-CH-VAL';

let initialState = {
    body_types: [],
    active_body_type: 0,
    body_options: [],
    active_body_option: 'ae606bfa-1df7-11e4-9a8e-e41f13c2b943',
    body_option_characteristics: [],
    body_option_characteristics_values: [],
    active_body_option_characteristics_values: []
};

const carBodyReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BODY_TYPES:
            return {
                ...state,
                body_types: [...action.body_types]
            }
        case SET_BODY_OPTIONS:
            return {
                ...state,
                body_options: [...action.body_options],
                active_body_option: action.body_options[0].id
            }
        case SET_BODY_OPTION_CHS:
            return {
                ...state,
                body_option_characteristics: action.body_option_characteristics,
            };
        case SET_BODY_OPTION_CH_VALUES:
            let chValuesCopy = [...state.body_option_characteristics_values];
            chValuesCopy = chValuesCopy.concat(action.body_option_characteristics_values);
            return {
                ...state,
                body_option_characteristics_values: chValuesCopy,
            };
        case SET_ACTIVE_BODY_TYPE:
            return {
                ...state,
                active_body_type: action.typeId,
                active_body_option: action.optionId,
            };
        case SET_BODY_OPTION:
            return {
                ...state,
                active_body_option: action.optionId,
            };
        case SET_BODY_OPTION_CH_VAL:
            let valuesCopy = [...state.active_body_option_characteristics_values];
            valuesCopy = valuesCopy.map(value => {
                if (value.body_option_characteristics_id === action.bodyOptionChId) {
                    let valueCopy = {...value};
                    let findValue = state.body_option_characteristics_values.find(value => value.id === action.optionChValId);
                    valueCopy.name = findValue.name;
                    valueCopy.id = findValue.id;
                    return valueCopy;
                } else {
                    return value;
                }
            });
            return {
                ...state,
                active_body_option_characteristics_values: valuesCopy
            };
        case CLEAR_BODY_OPTION_CH_VAL:
            return {
                ...state,
                body_option_characteristics_values: []
            };
        default:
            return state;
    }
};

export const setBodyTypes = (bodyTypes) => ({type: SET_BODY_TYPES, body_types: bodyTypes});
export const setBodyOptions = (bodyOptions) => ({type: SET_BODY_OPTIONS, body_options: bodyOptions});
export const setBodyOptionChs = (bodyOptionChs) => ({type: SET_BODY_OPTION_CHS, body_option_characteristics: bodyOptionChs});
export const setBodyOptionChValues = (bodyOptionChValues) => ({type: SET_BODY_OPTION_CH_VALUES, body_option_characteristics_values: bodyOptionChValues});
export const clearBodyOptionChValues = () => ({type: CLEAR_BODY_OPTION_CH_VAL});
export const setActiveBodyType = (typeId, optionId) => ({type: SET_ACTIVE_BODY_TYPE, typeId, optionId});
export const setBodyOption = (optionId) => ({type: SET_BODY_OPTION, optionId});
export const setBodyOptionChVal = (optionChValId, bodyOptionChId) => ({type: SET_BODY_OPTION_CH_VAL, optionChValId, bodyOptionChId});

export const setBodyTypesThunk = () => async (dispatch) => {
    let response = await vehicleAPI.getBodyTypes();
    let bodyTypes = response.data;
    bodyTypes = bodyTypes.map((bodyType, index) => {
        switch (index) {
            case 0:
                bodyType.img = '../img/car-body/vc-4-04 6.svg';
                return  bodyType;
            case 1:
                bodyType.img = '../img/car-body/Group.svg';
                return  bodyType;
            default:
                return bodyType;
        }
    });
    dispatch(setBodyTypes(bodyTypes));
};

export const setBodyOptionsThunk = () => async (dispatch) => {
    let response = await vehicleAPI.getBodyOptions(0);
    let bodyOptions = response.data;
    response = await vehicleAPI.getBodyOptions(1);
    bodyOptions = bodyOptions.concat(response.data);
    dispatch(setBodyOptions(bodyOptions));
};

export const setBodyOptionChsThunk = (bodyOptionId, bodyTypeId) => async (dispatch) => {
    let response = await vehicleAPI.getBodyOptionChs(bodyOptionId, bodyTypeId);
    dispatch(setBodyOptionChs(response.data));
};

export const setBodyOptionChValuesThunk = (bodyOptionChId) => async (dispatch) => {
    let response = await vehicleAPI.getBodyOptionChValues(bodyOptionChId);
    dispatch(setBodyOptionChValues(response.data));
};

export default carBodyReducer;