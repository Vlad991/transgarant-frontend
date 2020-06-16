import {dopAPI} from "../api/api";

const SET_DOP = 'SET-DOP';
const DOP_TOGGLE = 'DOP-TOGGLE';
const TOGGLE_ADDITIONAL = 'TOGGLE-ADDITIONAL';

let initialState = {
    active: false,
    additional_requirements: [],
    selected_additional_requirements: []
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
        case TOGGLE_ADDITIONAL:
            let selectedAdditional = [...state.selected_additional_requirements];
            let additional = state.additional_requirements;
            let selected = selectedAdditional.find(additional => additional.id === action.id);
            let selectedNew = additional.find(additional => additional.id === action.id);
            if (selected) {
                let index = selectedAdditional.indexOf(selected);
                selectedAdditional.splice(index, 1)
            } else {
                selectedAdditional.push(selectedNew);
            }
            return {
                ...state,
                selected_additional_requirements: selectedAdditional
            };
        default:
            return state;
    }
};

export const setDop = (additionalRequirements) => ({type: SET_DOP, additional_requirements: additionalRequirements});
export const dopToggle = () => ({type: DOP_TOGGLE});
export const toggleAdditional = (id) => ({type: TOGGLE_ADDITIONAL, id});

export const setDopThunk = () => async (dispatch) => {
    let response = await dopAPI.getDop();
    dispatch(setDop(response.data));
};

export default dopReducer;