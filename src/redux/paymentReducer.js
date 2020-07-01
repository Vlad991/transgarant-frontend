const SET_PAYMENT = 'SET-PAYMENT';
const SET_PAYMENT_COMPANY = 'SET-PAYMENT-COMPANY';

let initialState = {
    selected_payment: null,
    payments: [{data: "onlinepayment", text: "Онлайн оплата"}, {data: "cashpayment", text: "Наличными исполнителю"}, {data: "paymentonaccount", text: "Оплата по счету "}],
    company: ''
};

const paymentReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PAYMENT:
            return {
                ...state,
                selected_payment: action.selected_payment
            }
        case SET_PAYMENT_COMPANY:
            return {
                ...state,
                company: action.company
            }
        default:
            return state;
    }
};

export const setPayment = (selected_payment) => ({type: SET_PAYMENT, selected_payment});
export const setCompany = (company) => ({type: SET_PAYMENT_COMPANY, company});

export default paymentReducer;