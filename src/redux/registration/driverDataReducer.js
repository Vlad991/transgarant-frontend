const SET_DRIVER_DATA = 'SET-DRIVER-DATA';

let initialState = {
    driver_name: null,
    driver_phones: ['', ''],
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
        default:
            return state;
    }
};

export const setDriverData = (data) => ({type: SET_DRIVER_DATA, data});

export default driverDataReducer;