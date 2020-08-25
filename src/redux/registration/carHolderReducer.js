const SET_HOLDER_TYPE = 'SET-HOLDER-TYPE';

let initialState = {
    holder_type: 0,
};

const carHolderReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_HOLDER_TYPE:
            return {
                ...state,
                holder_type: action.value
            };
        default:
            return state;
    }
};

export const setHolderType = (value) => ({type: SET_HOLDER_TYPE, value});

export default carHolderReducer;