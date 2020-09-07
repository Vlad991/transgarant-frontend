import {submit} from 'redux-form';

const SUBMIT_CAR_FORM = 'SUBMIT_CAR_FORM';
const TOGGLE_SHOW_FORM = 'TOGGLE-SHOW-FORM';
const TOGGLE_UPDATE_CAR_MODE = 'TOGGLE-UPDATE-CAR-MODE';
const DELETE_CAR = 'DELETE-CAR';

let initialState = {
    cars: [
        {
            selected_capacity_id: 1,
            selected_body_type_id: 3,
            selected_pass_type_id: 2,
            selected_gidrobort_id: 2,
            selected_ramp_id: 1,
            agree_help: true,
            driver_loader: true,
            garage_address: {
                region_type: "г",
                region: "Москва",
                street_type: "ул.",
                street: "Пушкинская",
                house: "оф. 2",
                longitude: 55.750465,
                latitude: 37.599598,
                string: "г. Москва ул. Пушкинская оф. 2 "
            },
            photo_inside: {name: 'file1.jpg', data: ''},
            photo_in_front: {name: 'file2.jpg', data: ''},
            photo_side: {name: 'file3.jpg', data: ''},

            certificate_national_number: null,
            certificate_vin: 'A134AA',
            certificate_brand: 'Марка 1',
            certificate_model: 'Модель 1',
            certificate_car_type: null,
            certificate_car_category: null,
            certificate_car_issue_date: null,
            certificate_ecology_class: null,
            certificate_ptc_series: null,
            certificate_ptc_number: null,
            certificate_ctc_series: null,
            certificate_ctc_number: null,
            certificate_photo_1: {name: 'file1.jpg', data: ''},
            certificate_photo_2: {name: 'file2.jpg', data: ''},
        }
    ],

    capacity_types: [
        {
            id: 0,
            name: 100
        },
        {
            id: 1,
            name: 200
        },
        {
            id: 2,
            name: 300
        },
        {
            id: 3,
            name: 400
        },
        {
            id: 4,
            name: 500
        },
    ],
    selected_capacity_id: null,
    body_types: [
        {
            id: 0,
            name: 'Рефрижератор'
        },
        {
            id: 1,
            name: 'Тент'
        },
        {
            id: 3,
            name: 'Фургон'
        },
    ],
    selected_body_type_id: null,
    pass_types: [
        {
            id: 0,
            name: 'ТТК'
        },
        {
            id: 1,
            name: 'МКАД'
        },
        {
            id: 3,
            name: 'СК'
        },
    ],
    selected_pass_type_id: null,
    gidrobort_types: [
        {
            id: 0,
            name: 400
        },
        {
            id: 1,
            name: 600
        },
        {
            id: 3,
            name: 800
        },
        {
            id: 4,
            name: 1000
        },
    ],
    selected_gidrobort_id: null,
    ramp_types: [
        {
            id: 0,
            name: 90
        },
        {
            id: 1,
            name: 100
        },
        {
            id: 3,
            name: 110
        },
        {
            id: 4,
            name: 120
        },
    ],
    selected_ramp_id: null,
    agree_help: false,
    driver_loader: false,
    garage_address: {},
    photo_inside: null,
    photo_in_front: null,
    photo_side: null,

    certificate_national_number: null,
    certificate_vin: null,
    certificate_brand: null,
    certificate_model: null,
    certificate_car_type: null,
    certificate_car_category: null,
    certificate_car_issue_date: null,
    certificate_ecology_class: null,
    certificate_ptc_series: null,
    certificate_ptc_number: null,
    certificate_ctc_series: null,
    certificate_ctc_number: null,
    certificate_photo_1: null,
    certificate_photo_2: null,

    show_add_form: false,
    update_car: null
};

const carsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUBMIT_CAR_FORM:
            let cars = [...state.cars];
            if (state.update_car) {
                cars[state.update_car] = {...action.data};
            } else {
                cars.push({...action.data});
            }
            return {
                ...state,
                cars: cars,
                show_add_form: false,
                update_car: null,
            }
        case TOGGLE_SHOW_FORM:
            return {
                ...state,
                show_add_form: action.value,
                update_car: null,

                selected_capacity_id: null,
                selected_body_type_id: null,
                selected_pass_type_id: null,
                selected_gidrobort_id: null,
                selected_ramp_id: null,
                agree_help: false,
                driver_loader: false,
                garage_address: {},
                photo_inside: null,
                photo_in_front: null,
                photo_side: null,

                certificate_national_number: null,
                certificate_vin: null,
                certificate_brand: null,
                certificate_model: null,
                certificate_car_type: null,
                certificate_car_category: null,
                certificate_car_issue_date: null,
                certificate_ecology_class: null,
                certificate_ptc_series: null,
                certificate_ptc_number: null,
                certificate_ctc_series: null,
                certificate_ctc_number: null,
                certificate_photo_1: null,
                certificate_photo_2: null,
            }
        case TOGGLE_UPDATE_CAR_MODE:
            let updateCar = state.cars[action.index];
            if (action.index !== null) {
                return {
                    ...state,
                    update_car: action.index,
                    show_add_form: true,
                    ...updateCar
                }
            }
            return {
                ...state,
                update_car: null,
                show_add_form: false,

                selected_capacity_id: null,
                selected_body_type_id: null,
                selected_pass_type_id: null,
                selected_gidrobort_id: null,
                selected_ramp_id: null,
                agree_help: false,
                driver_loader: false,
                garage_address: {},
                photo_inside: null,
                photo_in_front: null,
                photo_side: null,

                certificate_national_number: null,
                certificate_vin: null,
                certificate_brand: null,
                certificate_model: null,
                certificate_car_type: null,
                certificate_car_category: null,
                certificate_car_issue_date: null,
                certificate_ecology_class: null,
                certificate_ptc_series: null,
                certificate_ptc_number: null,
                certificate_ctc_series: null,
                certificate_ctc_number: null,
                certificate_photo_1: null,
                certificate_photo_2: null,
            }
        case DELETE_CAR:
            let deleteCars = [...state.cars];
            deleteCars.splice(action.index, 1);
            return {
                ...state,
                cars: deleteCars
            }
        default:
            return state;
    }
};

export const submitCarForm = (data) => ({type: SUBMIT_CAR_FORM, data});
export const toggleShowForm = (value) => ({type: TOGGLE_SHOW_FORM, value});
export const toggleUpdateCar = (index) => ({type: TOGGLE_UPDATE_CAR_MODE, index});
export const deleteCar = (index) => ({type: DELETE_CAR, index});

export const submitCarForms = () => async (dispatch) => {
    dispatch(submit('car-data'));
}

export default carsReducer;