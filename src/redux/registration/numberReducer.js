import {numberAPI} from "../../api/registration-api";

const SET_PHONE_NUMBER = 'SET-PHONE-NUMBER';

let initialState = {
    phone_number: null,
    phone_is_entered: false,


    phone_is_verified: true // todo
};

const numberReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PHONE_NUMBER:
            return {
                ...state,
                phone_number: action.value,
                phone_is_entered: action.value.indexOf('_') === -1,
                phone_is_verified: action.value.indexOf('_') === -1 // todo
            };
        default:
            return state;
    }
};

export const setPhoneNumber = (value) => ({type: SET_PHONE_NUMBER, value});

export const setPhoneNumberThunk = (value) => async (dispatch) => {
    // let response = await numberAPI.checkPhone(value);
    // if (response.status === 200 && response.data) {
    //     dispatch(setCategories(response.data));
    // } else {
    //     console.warn("Load Categories: failed");
    // }
};

export default numberReducer;