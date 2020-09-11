import {submit} from 'redux-form';

const SUBMIT_DRIVER_FORM = 'SUBMIT_DRIVER_FORM';
const TOGGLE_SHOW_DRIVER_FORM = 'TOGGLE-SHOW-DRIVER-FORM';
const TOGGLE_UPDATE_DRIVER_MODE = 'TOGGLE-UPDATE-DRIVER-MODE';
const SET_DRIVER_CAR = 'SET-DRIVER-CAR';
const DELETE_DRIVER = 'DELETE-DRIVER';

let initialState = {
    drivers: [
        // {
        //     passport_name: 'Иван Иванов Иванов',
        //     passport_birthday: new Date(),
        //     passport_number: '21 45',
        //     passport_series: '698769',
        //     passport_issued_by: 'Заводским МВУ',
        //     passport_department: 'abc',
        //     passport_issued_date: new Date(),
        //     passport_registration: {region_type: "г", region: "Москва", street_type: "ул.", street: "Пушкинская", house: "оф. 2", longitude: 55.750465, latitude: 37.599598, string: "г. Москва ул. Пушкинская оф. 2 "},
        //     passport_address: {region_type: "г", region: "Москва", street_type: "ул.", street: "Пушкинская", house: "оф. 2", longitude: 55.750465, latitude: 37.599598, string: "г. Москва ул. Пушкинская оф. 2 "},
        //     registration_equals_address: true,
        //     passport_reversal_photo: {name: 'file.txt'},
        //     passport_registration_photo: {name: 'file.txt'},
        //     passport_photo_control: {name: 'file.txt'},
        //
        //     license_name: 'Иван Иванов Иванов',
        //     license_number: '67 98',
        //     license_series: '234234',
        //     license_issue_date: new Date(),
        //     license_validity_date: new Date(),
        //     license_issued_by: 'Заводским МВУ',
        //     selected_license_country_id: 0,
        //     selected_license_category_id: 1,
        //     license_photo_1: {name: 'file.txt'},
        //     license_photo_2: {name: 'file.txt'},
        //
        //     car_index: null
        // } // todo
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
        case SUBMIT_DRIVER_FORM:
            let driversSubmit = [...state.drivers];
            if (state.update_driver || (state.update_driver === 0)) {
                driversSubmit[state.update_driver] = {...action.data, car_index: null};
            } else {
                driversSubmit.push({...action.data, car_index: null});
            }
            return {
                ...state,
                drivers: driversSubmit,
                show_add_form: false,
                update_driver: null,
            }
        case TOGGLE_SHOW_DRIVER_FORM:
            return {
                ...state,
                show_add_form: action.value,
                update_driver: null,

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
        case SET_DRIVER_CAR:
            let drivers = [...state.drivers];
            drivers[action.driver_index].car_index = action.car_index;
            return {
                ...state,
                drivers: drivers
            }
        case DELETE_DRIVER:
            let deleteDrivers = [...state.drivers];
            deleteDrivers.splice(action.index, 1);
            return {
                ...state,
                drivers: deleteDrivers
            }
        default:
            return state;
    }
};

export const submitDriverForm = (data) => ({type: SUBMIT_DRIVER_FORM, data});
export const toggleShowForm = (value) => ({type: TOGGLE_SHOW_DRIVER_FORM, value});
export const toggleUpdateDriver = (index) => ({type: TOGGLE_UPDATE_DRIVER_MODE, index});
export const setDriverCar = (driver_index, car_index) => ({type: SET_DRIVER_CAR, driver_index, car_index});
export const deleteDriver = (index) => ({type: DELETE_DRIVER, index});

export const submitDriverForms = () => (dispatch) => {
    dispatch(submit('driver-data-add'));
}

export default driversReducer;