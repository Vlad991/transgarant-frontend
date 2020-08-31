import {submit} from 'redux-form';

const SET_NEW_DRIVER_DATA = 'SET-NEW-DRIVER-DATA';
const TOGGLE_SHOW_DRIVER_FORM = 'TOGGLE-SHOW-DRIVER-FORM';
const ADD_NEW_DRIVER = 'ADD-NEW-DRIVER';
const TOGGLE_UPDATE_DRIVER_MODE = 'TOGGLE-UPDATE-DRIVER-MODE';
const DO_UPDATE_DRIVER = 'DO-UPDATE-DRIVER';

let initialState = {
    drivers: [
        {
            passport_name: 'Иван Иванов Иванов',
            passport_birthday: null,
            passport_number: 55,
            passport_series: 9686574,
            passport_issued_by: 'Заводским МВУ',
            passport_department: null,
            passport_issued_date: '12.10.2020',
            passport_registration: null,
            passport_address: null,
            registration_equals_address: false,
            passport_reversal_photo: null,
            passport_registration_photo: null,
            passport_photo_control: null,

            license_name: null,
            license_number: null,
            license_series: null,
            license_issue_date: '12.10.2020',
            license_validity_date: '12.10.2020',
            license_issued_by: null,
            selected_license_country_id: 0,
            selected_license_category_id: 1,
            license_photo_1: null,
            license_photo_2: null,

            car_index: null
        }
    ],

    passport_name: null,
    passport_birthday: null,
    passport_number: null,
    passport_series: null,
    passport_issued_by: null,
    passport_department: null,
    passport_issued_date: null,
    passport_registration: null,
    passport_address: null,
    registration_equals_address: false,
    passport_reversal_photo: null,
    passport_registration_photo: null,
    passport_photo_control: null,

    license_name: null,
    license_number: null,
    license_series: null,
    license_issue_date: null,
    license_validity_date: null,
    license_issued_by: null,
    license_countries: [{id: 0, name: 'Россия'}, {id: 1, name: 'Беларусь'}, {id: 2, name: 'Казахстан'}],
    selected_license_country_id: null,
    license_categories: [{id: 0, name: 'Категория A'}, {id: 1, name: 'Категория B'}, {id: 2, name: 'Категория C'}],
    selected_license_category_id: null,
    license_photo_1: null,
    license_photo_2: null,

    show_add_form: false,
    update_driver: null
};

const driversReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEW_DRIVER_DATA:
            console.log(action.data)
            return {
                ...state,
                ...action.data
            }
        case TOGGLE_SHOW_DRIVER_FORM:
            return {
                ...state,
                show_add_form: action.value
            }
        case ADD_NEW_DRIVER:
            let driversCopy = [...state.drivers];
            driversCopy.push({
                passport_name: state.passport_name,
                passport_birthday: state.passport_birthday,
                passport_number: state.passport_number,
                passport_series: state.passport_series,
                passport_issued_by: state.passport_issued_by,
                passport_department: state.passport_department,
                passport_issued_date: state.passport_issued_date,
                passport_registration: state.passport_registration,
                passport_address: state.passport_address,
                registration_equals_address: state.registration_equals_address,
                passport_reversal_photo: state.passport_reversal_photo,
                passport_registration_photo: state.passport_registration_photo,
                passport_photo_control: state.passport_photo_control,

                license_name: state.license_name,
                license_number: state.license_number,
                license_series: state.license_series,
                license_issue_date: state.license_issue_date,
                license_validity_date: state.license_validity_date,
                license_issued_by: state.license_issued_by,
                selected_license_country_id: state.selected_license_country_id,
                selected_license_category_id: state.selected_license_category_id,
                license_photo_1: state.license_photo_1,
                license_photo_2: state.license_photo_2,

                car_index: null
            });
            return {
                ...state,
                drivers: driversCopy,
                show_add_form: false,

                passport_name: null,
                passport_birthday: null,
                passport_number: null,
                passport_series: null,
                passport_issued_by: null,
                passport_department: null,
                passport_issued_date: null,
                passport_registration: null,
                passport_address: null,
                registration_equals_address: false,
                passport_reversal_photo: null,
                passport_registration_photo: null,
                passport_photo_control: null,

                license_name: null,
                license_number: null,
                license_series: null,
                license_issue_date: null,
                license_validity_date: null,
                license_issued_by: null,
                selected_license_country_id: null,
                selected_license_category_id: null,
                license_photo_1: null,
                license_photo_2: null,
            }
        case TOGGLE_UPDATE_DRIVER_MODE:
            let updateDriver = state.drivers[action.index];
            if (action.index !== null) {
                return {
                    ...state,
                    update_driver: action.index,
                    show_add_form: true,
                    ...updateDriver
                }
            }
            return {
                ...state,
                update_driver: null,
                show_add_form: false,

                passport_name: null,
                passport_birthday: null,
                passport_number: null,
                passport_series: null,
                passport_issued_by: null,
                passport_department: null,
                passport_issued_date: null,
                passport_registration: null,
                passport_address: null,
                registration_equals_address: false,
                passport_reversal_photo: null,
                passport_registration_photo: null,
                passport_photo_control: null,

                license_name: null,
                license_number: null,
                license_series: null,
                license_issue_date: null,
                license_validity_date: null,
                license_issued_by: null,
                selected_license_country_id: null,
                selected_license_category_id: null,
                license_photo_1: null,
                license_photo_2: null,
            }
        case DO_UPDATE_DRIVER:
            let updateDriversCopy = [...state.drivers];
            updateDriversCopy[state.update_driver] = {
                passport_name: state.passport_name,
                passport_birthday: state.passport_birthday,
                passport_number: state.passport_number,
                passport_series: state.passport_series,
                passport_issued_by: state.passport_issued_by,
                passport_department: state.passport_department,
                passport_issued_date: state.passport_issued_date,
                passport_registration: state.passport_registration,
                passport_address: state.passport_address,
                registration_equals_address: state.registration_equals_address,
                passport_reversal_photo: state.passport_reversal_photo,
                passport_registration_photo: state.passport_registration_photo,
                passport_photo_control: state.passport_photo_control,

                license_name: state.license_name,
                license_number: state.license_number,
                license_series: state.license_series,
                license_issue_date: state.license_issue_date,
                license_validity_date: state.license_validity_date,
                license_issued_by: state.license_issued_by,
                selected_license_country_id: state.selected_license_country_id,
                selected_license_category_id: state.selected_license_category_id,
                license_photo_1: state.license_photo_1,
                license_photo_2: state.license_photo_2,

                car_index: updateDriversCopy[state.update_driver].car_index
            }
            return {
                ...state,
                drivers: updateDriversCopy,
                update_driver: null,
                show_add_form: false,

                passport_name: null,
                passport_birthday: null,
                passport_number: null,
                passport_series: null,
                passport_issued_by: null,
                passport_department: null,
                passport_issued_date: null,
                passport_registration: null,
                passport_address: null,
                registration_equals_address: false,
                passport_reversal_photo: null,
                passport_registration_photo: null,
                passport_photo_control: null,

                license_name: null,
                license_number: null,
                license_series: null,
                license_issue_date: null,
                license_validity_date: null,
                license_issued_by: null,
                selected_license_country_id: null,
                selected_license_category_id: null,
                license_photo_1: null,
                license_photo_2: null,
            }
        default:
            return state;
    }
};

export const setNewDriverData = (data) => ({type: SET_NEW_DRIVER_DATA, data});
export const toggleShowForm = (value) => ({type: TOGGLE_SHOW_DRIVER_FORM, value});
export const addNewDriver = () => ({type: ADD_NEW_DRIVER});
export const toggleUpdateDriver = (index) => ({type: TOGGLE_UPDATE_DRIVER_MODE, index});
export const updateDriver = () => ({type: DO_UPDATE_DRIVER});

export const submitDriverForms = () => (dispatch) => {
    dispatch(submit('driver-passport-add'));
    dispatch(submit('driver-license-add'));
}

export default driversReducer;