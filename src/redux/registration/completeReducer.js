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

export default completeReducer;