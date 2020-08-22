import {vehicleAPI} from "../api/api";
import closedImg from '../img/car-body/vc-4-04 6.svg';
import openedImg from '../img/car-body/Group.svg';

const SET_BODY_TYPES = 'SET-BODY-TYPES';
const SET_BODY_OPTIONS = 'SET-BODY-OPTIONS';
const SET_BODY_OPTION_CHS = 'SET-BODY-OPTION-CHS';
const SET_ACTIVE_BODY_TYPE = 'SET-ACTIVE-BODY-TYPE';
const SET_BODY_OPTION = 'SET-BODY-OPTION';
const SET_BODY_OPTION_CH_VAL = 'SET-BODY-OPTION-CH-VAL';
const SET_BODY_OPTION_CH_BOOL_VAL = 'CLEAR-BODY-OPTION-CH-BOOL-VAL';
const TOGGLE_OPTION_COLLAPSE = 'TOGGLE-OPTION-COLLAPSE';
const TOGGLE_CH_COLLAPSE = 'TOGGLE-CH-COLLAPSE';
const SET_BODY_TYPES_LOADING = 'SET-BODY-TYPES-LOADING';
const SET_BODY_OPTIONS_LOADING = 'SET-BODY-OPTIONS-LOADING';
const SET_CHARACTERISTICS_LOADING = 'SET-CHARACTERISTICS-LOADING';

let initialState = {
    body_types: [],
    active_body_type: 0,
    body_options: [],
    active_body_option: 'bca0024d-f0f9-11db-9d25-000cf16cef9c',
    body_option_characteristics: [],
    show_option_collapse: false,
    body_types_loading: false,
    body_options_loading: false,
    characteristics_loading: false,
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
                    if (action.optionChValId === 0) {
                        characteristic.values[0].selected = true;
                    } else {
                        characteristic.values.forEach(value => {
                            if (value.id === action.optionChValId) {
                                value.selected = true;
                            } else {
                                value.selected = false;
                            }
                        });
                    }
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
        case TOGGLE_OPTION_COLLAPSE:
            return {
                ...state,
                show_option_collapse: action.show
            }
        case TOGGLE_CH_COLLAPSE:
            let items = [...state.body_option_characteristics];
            items.find(item => item.id === action.id).showCollapse = action.show;
            return {
                ...state,
                body_option_characteristics: items
            }
        case SET_BODY_TYPES_LOADING:
            return {
                ...state,
                body_types_loading: action.value
            }
        case SET_BODY_OPTIONS_LOADING:
            return {
                ...state,
                body_options_loading: action.value
            }
        case SET_CHARACTERISTICS_LOADING:
            return {
                ...state,
                characteristics_loading: action.value
            }
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
export const toggleOptionCollapse = (show) => ({type: TOGGLE_OPTION_COLLAPSE, show});
export const toggleChCollapse = (id, show) => ({type: TOGGLE_CH_COLLAPSE, id, show});
export const setBodyTypesLoading = (value) => ({type: SET_BODY_TYPES_LOADING, value});
export const setBodyOptionsLoading = (value) => ({type: SET_BODY_OPTIONS_LOADING, value});
export const setCharacteristicsLoading = (value) => ({type: SET_CHARACTERISTICS_LOADING, value});

export const setBodyTypesThunk = (categoryId) => async (dispatch) => {
    dispatch(setBodyTypesLoading(true));
    let response = await vehicleAPI.getBodyTypes(categoryId);
    let bodyTypes = response.data;
    bodyTypes = bodyTypes.map((bodyType, index) => {
        switch (index) {
            case 0:
                bodyType.img = closedImg;
                return bodyType;
            case 1:
                bodyType.img = openedImg;
                return bodyType;
            default:
                return bodyType;
        }
    });
    dispatch(setBodyTypes(bodyTypes));
    dispatch(setBodyTypesLoading(false));
};

export const setBodyOptionsThunk = (bodyTypeId, categoryId) => async (dispatch) => {
    dispatch(setBodyOptionsLoading(true));
    let response = await vehicleAPI.getBodyOptions(bodyTypeId, categoryId);
    dispatch(setBodyOptions(response.data));
    dispatch(setBodyOptionsLoading(false));
};

export const setBodyOptionChsThunk = (bodyOptionId, bodyTypeId, categoryId) => async (dispatch) => {
    dispatch(setCharacteristicsLoading(true));
    let response = await vehicleAPI.getBodyOptionChs(bodyOptionId, bodyTypeId, categoryId);
    let characteristics = [];
    for (let characteristic of response.data) {
        if (characteristic.type === 'ref') {
            let responseValues = await vehicleAPI.getBodyOptionChValues(characteristic.id, categoryId);
            characteristic.values = responseValues.data;
        } else {
            characteristic.value = false;
        }
        characteristics.push(characteristic);
    }
    dispatch(setBodyOptionChs(characteristics));
    dispatch(setCharacteristicsLoading(false));
};

export default carBodyReducer;