const SET_PASSPORT_DATA = 'SET-PASSPORT-DATA';

let initialState = {
    passport_name: null,
    passport_birthday: null,
    passport_number: null,
    passport_series: null,
    passport_issued_by: null,
    passport_department: null,
    passport_issued_date: null,
    passport_registration: null,
    passport_address: null,
    passport_reversal_photo: null,
    passport_registration_photo: null,
};

const driverPassportReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PASSPORT_DATA:
            return {
                ...state,
                ...action.data
            }
        default:
            return state;
    }
};

export const setPassportData = (data) => ({type: SET_PASSPORT_DATA, data});

export default driverPassportReducer;