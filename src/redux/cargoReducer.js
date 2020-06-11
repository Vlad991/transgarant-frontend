import {cargoAPI} from "../api/api";

const SET_PALLET_TYPES = 'SET-PALLET-TYPES';
let initialState = {
    cargo: [],
    quantity: 1,
    length: 1.2,
    width: 0.8,
    height: 1,
    pallet_types: [{name: 'Евро'}]
};

const cargoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PALLET_TYPES:
            return {
                ...state,
                pallet_types: [...action.pallet_types]
            }
        default:
            return state;
    }
};

export const setPalletTypes = (pallet_types) => ({type: SET_PALLET_TYPES, pallet_types});

export const setPalletTypesThunk = () => async (dispatch) => {
    //debugger;
    let response = await cargoAPI.getPalletTypes();
    dispatch(setPalletTypes(response.data));
};

export default cargoReducer;