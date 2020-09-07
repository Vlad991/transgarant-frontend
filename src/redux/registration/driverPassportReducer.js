const SET_PASSPORT_DATA = 'SET-PASSPORT-DATA';
const SET_CONTROL_PHOTO = 'SET-CONTROL-PHOTO'
const SET_REGISTRATION_EQUALS_ADDRESS = 'SET-REGISTRATION-EQUALS-ADDRESS';

let initialState = {
    passport_name: null,
    passport_birthday: null,
    passport_number: null,
    passport_series: null,
    passport_issued_by: null,
    passport_department: null,
    passport_issued_date: null,
    passport_registration: {string: 'test'},
    passport_address: {},
    registration_equals_address: false,
    passport_reversal_photo: null,
    passport_registration_photo: null,
    passport_photo_control: null
};

const driverPassportReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PASSPORT_DATA:
            console.log(action.data);
            return {
                ...state,
                ...action.data
            }
        case SET_CONTROL_PHOTO:
            return {
                ...state,
                passport_photo_control: action.file
            }
        case SET_REGISTRATION_EQUALS_ADDRESS:
            return {
                ...state,
                passport_address: action.value ? state.passport_registration : '',
                registration_equals_address: action.value
            }
        default:
            return state;
    }
};

export const setPassportData = (data) => ({type: SET_PASSPORT_DATA, data});
export const setControlPhoto = (file) => ({type: SET_CONTROL_PHOTO, file});
export const setRegistrationEqualsAddress = (value) => ({type: SET_REGISTRATION_EQUALS_ADDRESS, value});

export default driverPassportReducer;