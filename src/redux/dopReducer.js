import {dopAPI} from "../api/api";

const SET_DOP = 'SET-DOP';
const DOP_TOGGLE = 'DOP-TOGGLE';
const TOGGLE_ADDITIONAL = 'TOGGLE-ADDITIONAL';

let initialState = {
    active: false,
    additional_requirements: []
};

const dopReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DOP:
            return {
                ...state,
                additional_requirements: action.additional_requirements.map(item => {
                    item.selected = false;
                    return item;
                })
            };
        case DOP_TOGGLE:
            return {
                ...state,
                active: action.value
            };
        case TOGGLE_ADDITIONAL:
            let additional = [...state.additional_requirements];
            let exclude;
            additional = additional.map(item => {
                if (item.id === action.id) {
                    item.selected = !item.selected;
                    exclude = item.exclude;
                }
                return item;
            });
            additional = additional.map(item => {
                if (exclude.indexOf(item.id) !== -1) {
                    item.selected = false;
                }
                return item;
            });
            return {
                ...state,
                additional_requirements: additional
            };
        default:
            return state;
    }
};

export const setDop = (additionalRequirements) => ({type: SET_DOP, additional_requirements: additionalRequirements});
export const dopToggle = (value) => ({type: DOP_TOGGLE, value});
export const toggleAdditional = (id) => ({type: TOGGLE_ADDITIONAL, id});

export const setDopThunk = () => async (dispatch) => {
    let response = await dopAPI.getDop();
    if (response.status === 200 && response.data) {
        dispatch(setDop(response.data));
    }
};

export default dopReducer;