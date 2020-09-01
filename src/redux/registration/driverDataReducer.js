const SET_DRIVER_DATA = 'SET-DRIVER-DATA';
const SET_FIRST_DRIVER_PHONE = 'SET-FIRSTA-DRIVER-PHONE'

let initialState = {
    driver_name: null,
    driver_phones: [''],
    driver_email: null
};

const driverDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DRIVER_DATA:
            console.log(action.data);
            return {
                ...state,
                ...action.data
            }
        case SET_FIRST_DRIVER_PHONE:
            return {
                ...state,
                driver_phones: [action.phone]
            }
        default:
            return state;
    }
};

export const setDriverData = (data) => ({type: SET_DRIVER_DATA, data});
export const setFirstDriverPhone = (phone) => ({type: SET_FIRST_DRIVER_PHONE, phone});

export default driverDataReducer;