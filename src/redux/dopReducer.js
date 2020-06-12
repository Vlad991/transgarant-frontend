import {dopAPI, vehicleAPI} from "../api/api";
import {setBodyOptionChs} from "./carBodyReducer";

const SET_DOP = 'SET-DOP';
const DOP_TOGGLE = 'DOP-TOGGLE';

let initialState = {
    active: false,
    additional_requirements: []
};

const dopReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DOP:
            return {
                ...state,
                additional_requirements: action.additional_requirements
            };
        case DOP_TOGGLE:
            return {
                ...state,
                active: !state.active
            };
        default:
            return state;
    }
};

export const setDop = (additionalRequirements) => ({type: SET_DOP, additional_requirements: additionalRequirements});
export const dopToggle = () => ({type: DOP_TOGGLE});

export const setDopThunk = () => async (dispatch) => {
    let response = await dopAPI.getDop();
    dispatch(setDop(response.data));
};

export default dopReducer;