import {vehicleAPI} from "../api/api";

const SET_BODY_TYPES = 'SET-BODY-TYPES';
const SET_BODY_OPTIONS = 'SET-BODY-OPTIONS';
const SET_BODY_OPTION_CHS = 'SET-BODY-OPTION-CHS';
const SET_ACTIVE_BODY_TYPE = 'SET-ACTIVE-BODY-TYPE';
const SET_BODY_OPTION = 'SET-BODY-OPTION';
const SET_BODY_OPTION_CH_VAL = 'SET-BODY-OPTION-CH-VAL';
const SET_BODY_OPTION_CH_BOOL_VAL = 'CLEAR-BODY-OPTION-CH-BOOL-VAL';

let initialState = {
    body_types: [],
    active_body_type: 0,
    body_options: [],
    active_body_option: 'bca0024d-f0f9-11db-9d25-000cf16cef9c',
    body_option_characteristics: []
};

const carBodyReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BODY_TYPES:
            return {
                ...state,
                body_types: [...action.body_types],
                active_body_type: action.body_types[0].id
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
        case SET_ACTIVE_BODY_TYPE:
            return {
                ...state,
                active_body_type: action.typeId
            };
        case SET_BODY_OPTION:
            return {
                ...state,
                active_body_option: action.optionId,
            };
        case SET_BODY_OPTION_CH_VAL:
            let refCharacteristics = [...state.body_option_characteristics];
            refCharacteristics = refCharacteristics.map(characteristic => {
                if (characteristic.id === action.bodyOptionChId) {
                    characteristic.values.map(value => {
                        if (value.id === action.optionChValId) {
                            value.selected = true;
                        } else {
                            value.selected = false;
                        }
                    });
                }
                return characteristic;
            })
            return {
                ...state,
                body_option_characteristics: refCharacteristics
            };
        case SET_BODY_OPTION_CH_BOOL_VAL:
            let characteristics = [...state.body_option_characteristics];
            characteristics = characteristics.map(characteristic => {
                if (characteristic.id === action.bodyOptionChId) {
                    characteristic.value = action.optionChBoolVal;
                }
                return characteristic;
            })
            return {
                ...state,
                body_option_characteristics: characteristics
            };
        default:
            return state;
    }
};

export const setBodyTypes = (bodyTypes) => ({type: SET_BODY_TYPES, body_types: bodyTypes});
export const setBodyOptions = (bodyOptions) => ({type: SET_BODY_OPTIONS, body_options: bodyOptions});
export const setBodyOptionChs = (bodyOptionChs) => ({type: SET_BODY_OPTION_CHS, body_option_characteristics: bodyOptionChs});
export const setActiveBodyType = (typeId) => ({type: SET_ACTIVE_BODY_TYPE, typeId});
export const setBodyOption = (optionId) => ({type: SET_BODY_OPTION, optionId});
export const setBodyOptionChVal = (bodyOptionChId, optionChValId) => ({type: SET_BODY_OPTION_CH_VAL, bodyOptionChId, optionChValId});
export const setBodyOptionChBoolVal = (bodyOptionChId, optionChBoolVal) => ({type: SET_BODY_OPTION_CH_BOOL_VAL, bodyOptionChId, optionChBoolVal});

export const setBodyTypesThunk = (categoryId) => async (dispatch) => {
    let response = await vehicleAPI.getBodyTypes(categoryId);
    let bodyTypes = response.data;
    bodyTypes = bodyTypes.map((bodyType, index) => {
        switch (index) {
            case 0:
                bodyType.img = '../img/car-body/vc-4-04 6.svg';
                return bodyType;
            case 1:
                bodyType.img = '../img/car-body/Group.svg';
                return bodyType;
            default:
                return bodyType;
        }
    });
    dispatch(setBodyTypes(bodyTypes));
};

export const setBodyOptionsThunk = (bodyTypeId, categoryId) => async (dispatch) => {
    let response = await vehicleAPI.getBodyOptions(bodyTypeId, categoryId);
    dispatch(setBodyOptions(response.data));
};

export const setBodyOptionChsThunk = (bodyOptionId, bodyTypeId, categoryId) => async (dispatch) => {
    let response = await vehicleAPI.getBodyOptionChs(bodyOptionId, bodyTypeId, categoryId);
    let characteristics = [];
    for (let characteristic of response.data) {
        if (characteristic.type === 'ref') {
            let responseValues = await vehicleAPI.getBodyOptionChValues(characteristic.id, categoryId);
            characteristic.values = responseValues.data;
            if (characteristic.values.length > 0) characteristic.values[0].selected = true;
        } else {
            characteristic.value = false;
        }
        characteristics.push(characteristic);
    }
    dispatch(setBodyOptionChs(characteristics));
};

export default carBodyReducer;