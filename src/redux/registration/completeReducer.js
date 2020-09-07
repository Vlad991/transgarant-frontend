import {submit} from "redux-form";

const SET_AGREE_TERMS = 'SET-AGREE-TERMS';

let initialState = {
    agree_terms: false
};

const completeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AGREE_TERMS:
            return {
                ...state,
                agree_terms: action.value
            }
        default:
            return state;
    }
};

export const setAgreeTerms = (value) => ({type: SET_AGREE_TERMS, value});

export const completeRegistrationThunk = () => async (dispatch) => {
    await dispatch(submit('individual-entrepreneur'));
    await dispatch(submit('driver-data'));
    await dispatch(submit('driver-passport'));
    await dispatch(submit('driver-license'));
}

export default completeReducer;