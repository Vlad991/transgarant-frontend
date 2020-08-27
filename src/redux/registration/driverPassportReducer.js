const SET_PASSPORT_DATA = 'SET-PASSPORT-DATA';

let initialState = {
    passport_name: '',
    passport_birthday: '',
    passport_number: '',
    passport_series: '',
    passport_issued_by: '',
    passport_department: '',
    passport_issued_date: '',
    passport_registration: '',
    passport_address: '',
    passport_reversal_photo: '',
    passport_registration_photo: '',
};

const driverPassportReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PASSPORT_DATA:
            console.log(action.data);
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