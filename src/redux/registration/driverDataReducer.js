const SET_DRIVER_DATA = 'SET-DRIVER-DATA';
const SET_FIRST_DRIVER_PHONE = 'SET-FIRST-DRIVER-PHONE'
const ADD_DRIVER_PHONE = 'ADD-DRIVER-PHONE'

let initialState = {
    driver_name: null,
    driver_phones: [''],
    driver_email: null,
    valid: true
};

const driverDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DRIVER_DATA:
            return {
                ...state,
                ...action.data,
                valid: true
            }
        case SET_FIRST_DRIVER_PHONE:
            return {
                ...state,
                driver_phones: [action.phone]
            }
        case ADD_DRIVER_PHONE:
            return {
                ...state,

            }
        default:
            return state;
    }
};

export const setDriverData = (data) => ({type: SET_DRIVER_DATA, data});
export const setFirstDriverPhone = (phone) => ({type: SET_FIRST_DRIVER_PHONE, phone});

export default driverDataReducer;