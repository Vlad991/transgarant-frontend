import {innAPI as nalogAPI} from "../../api/nalog-api";

const SET_HOLDER_TYPE = 'SET-HOLDER-TYPE';
const SET_INN = 'SET-INN';
const SET_INN_SAM = 'SET-INN-SAM';
const VERIFY_INN_SAM = 'VERIFY-INN-SAM';

let initialState = {
    holder_type: 0, //todo
    inn: null,
    inn_entered: false, // todo
    inn_sam: null,
    inn_sam_entered: false, //todo
    inn_sam_verified: false // todo
};

const carHolderReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_HOLDER_TYPE:
            return {
                ...state,
                holder_type: action.value
            };
        case SET_INN:
            return {
                ...state,
                inn: action.value.value,
                inn_entered: true
            }
        case SET_INN_SAM:
            return {
                ...state,
                inn_sam: action.value
            }
        case VERIFY_INN_SAM:
            return {
                ...state,
                inn_sam_verified: action.value,
                inn_sam_entered: true
            }
        default:
            return state;
    }
};

export const setHolderType = (value) => ({type: SET_HOLDER_TYPE, value});
export const setInn = (value) => ({type: SET_INN, value});
export const setInnSam = (value) => ({type: SET_INN_SAM, value});
export const verifyInnSam = (value) => ({type: VERIFY_INN_SAM, value});

export const checkInnThunk = () => async (dispatch, getState) => {
    let inn = getState().carHolderReducer.inn_sam;
    let response = await nalogAPI.checkInn(inn);
    if (response.status === 200 && response.data) {
        dispatch(verifyInnSam(response.data.status));
    } else {
        console.warn("Check INN SAM: failed");
    }
}

export default carHolderReducer;