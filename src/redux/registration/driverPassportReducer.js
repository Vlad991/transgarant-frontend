const SET_PASSPORT_DATA = 'SET-PASSPORT-DATA';
const SET_CONTROL_PHOTO = 'SET-CONTROL-PHOTO'

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
    passport_photo_control: null
};

const driverPassportReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PASSPORT_DATA:
            return {
                ...state,
                ...action.data
            }
        case SET_CONTROL_PHOTO:
            console.log(action.file);
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