const SET_PASSPORT_DATA = 'SET-PASSPORT-DATA';
const SET_CONTROL_PHOTO = 'SET-CONTROL-PHOTO'

let initialState = {
    passport_name: null,
    passport_birthday: null,
    passport_number: null,
    passport_series: null,
    passport_issued_by: null,
    passport_department: null,
    passport_issued_date: null,
    passport_registration: {},
    passport_address: {},
    registration_equals_address: false,
    passport_reversal_photo: null,
    passport_registration_photo: null,
    passport_photo_control: null,
    valid: false
};

const driverPassportReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PASSPORT_DATA:
            return {
                ...state,
                ...action.data,
                valid: true
            }
        case SET_CONTROL_PHOTO:
            return {
                ...state,
                passport_photo_control: action.file
            }
        default:
            return state;
    }
};

export const setPassportData = (data) => ({type: SET_PASSPORT_DATA, data});
export const setControlPhoto = (file) => ({type: SET_CONTROL_PHOTO, file});

export default driverPassportReducer;