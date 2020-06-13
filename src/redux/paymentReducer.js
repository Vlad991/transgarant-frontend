const SET_PAYMENT = 'SET-PAYMENT';

let initialState = {
    selected_payment: null
};

const paymentReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PAYMENT:
            return {
                ...state,
                selected_payment: action.selected_payment
            }
        default:
            return state;
    }
};

export const setPayment = (selected_payment) => ({type: SET_PAYMENT, selected_payment});

export default paymentReducer;