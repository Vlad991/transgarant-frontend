import validator from 'validator';

const SET_NAME = 'SET-NAME';
const SET_CLIENT_NUMBER = 'SET-CLIENT-NUMBER';
const SET_EMAIL = 'SET-EMAIL';

let initialState = {
    client_name: '',
    name_error: false,
    client_number: '',
    number_error: false,
    client_email: '',
    email_error: false
};

const clientFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NAME:
            if (!validator.isEmpty(action.value)) {
                return {
                    ...state,
                    client_name: action.value,
                    name_error: false
                };
            } else {
                return {
                    ...state,
                    client_name: action.value,
                    name_error: true
                };
            }
        case SET_CLIENT_NUMBER:
            if (!validator.isEmpty(action.value)) {
                return {
                    ...state,
                    client_number: action.value,
                    number_error: false
                };
            } else {
                return {
                    ...state,
                    client_number: action.value,
                    number_error: true
                };
            }
        case SET_EMAIL:
            if (validator.isEmail(action.value)) {
                return {
                    ...state,
                    client_email: action.value,
                    email_error: false
                };
            } else {
                return {
                    ...state,
                    client_email: action.value,
                    email_error: true
                };
            }
        default:
            return state;
    }
};

export const setName = (value) => ({type: SET_NAME, value});
export const setNumber = (value) => ({type: SET_CLIENT_NUMBER, value});
export const setEmail = (value) => ({type: SET_EMAIL, value});

export default clientFormReducer;