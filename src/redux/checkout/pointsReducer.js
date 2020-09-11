import {fileAPI} from "../../api/checkout-api";
import {addressAPI} from "../../api/dadata-api";

const ADD_POINT = 'ADD-POINT';
const SHOW_POINT_INFO = 'SHOW-POINT-INFO';
const DO_UPDATE_POINT = 'DO-UPDATE-POINT';
const DELETE_POINT = 'DELETE-POINT';
const TOGGLE_VALUE = 'TOGGLE-VALUE';
const SET_ADDRESS = 'SET-ADDRESS';
const SET_NUMBER = 'SET-NUMBER';
const SET_FILES = 'SET-FILES';
const SET_FORM_STATE = 'SET-FORM-STATE';
const TOGGLE_VALUES_COLLAPSE = 'TOGGLE-VALUES-COLLAPSE';
const TOGGLE_FORM = 'TOGGLE-FORM';
const TOGGLE_ADDRESS_MAP = 'TOGGLE-ADDRESS-MAP'

let initialState = {
    points: [
        // {
        //     name: "Точка 1",
        //     address: {
        //         region_type: "г",
        //         region: "Москва",
        //         street_type: "б-р",
        //         street: "Гоголевский",
        //         house: "31",
        //         longitude: 37.599598,
        //         latitude: 55.750465,
        //         string: "г Москва, Гоголевский б-р, д 31 стр 2"
        //     },
        //     comment: "Мой очень очень длинный длинный комментарий",
        //     company: "В ООО \"Salus\"",
        //     contact_name: "Кузьма Владислав Владимирович",
        //     number: "+7 ( 123 ) - 412 - 34 - 12",
        //     todo: "Принять гурз для того то от такой то компании сказать что по счету такому то",
        //     files: [
        //         {
        //             id: "45c4da15-65a7-48e8-9366-4fabfa31",
        //             name: "preloader.svg"
        //         }
        //     ],
        //     time_from: "с 09:00",
        //     time_to: "до 18:00",
        //     has_pause: 0,
        //     pause_from: "с 14:00",
        //     pause_to: "до 15:00",
        //     values: [
        //         {
        //             id: 1,
        //             name: "Погрузка",
        //             selected: true
        //         },
        //         {
        //             id: 2,
        //             name: "Разгрузка",
        //             selected: true
        //         },
        //         {
        //             id: 3,
        //             name: "Получить/сдать документы",
        //             selected: true
        //         },
        //         {
        //             id: 4,
        //             name: "Встретить экспедитора",
        //             selected: true
        //         }
        //     ]
        // },
        // {
        //     name: "Точка 2",
        //     address: {
        //         region_type: "обл",
        //         region: "Московская",
        //         street_type: "ул",
        //         street: "Дзержинского",
        //         house: "11",
        //         longitude: 37.858483,
        //         latitude: 55.752496,
        //         string: "Московская обл, г Реутов, ул Дзержинского, д 11"
        //     },
        //     comment: "Мой комментарий",
        //     company: "В ООО \"Salus\"",
        //     contact_name: "Кузьма Владислав Владимирович",
        //     number: "+7 ( 123 ) - 412 - 34 - 12",
        //     todo: "Принять гурз для того то от такой то компании сказать что по счету такому то",
        //     files: [
        //         {
        //             id: "45c4da15-65a7-48e8-9366-4fabfa31",
        //             name: "preloader.svg"
        //         }
        //     ],
        //     time_from: "с 09:00",
        //     time_to: "до 18:00",
        //     has_pause: 0,
        //     pause_from: "с 14:00",
        //     pause_to: "до 15:00",
        //     values: [
        //         {
        //             id: 1,
        //             name: "Погрузка",
        //             selected: true
        //         },
        //         {
        //             id: 2,
        //             name: "Разгрузка",
        //             selected: false
        //         },
        //         {
        //             id: 3,
        //             name: "Получить/сдать документы",
        //             selected: false
        //         },
        //         {
        //             id: 4,
        //             name: "Встретить экспедитора",
        //             selected: false
        //         }
        //     ]
        // }
    ],
    update_point: null,
    name: '',
    address: {
        region_type: '',
        region: '',
        street_type: '',
        street: '',
        house: '',
        longitude: null,
        latitude: null,
        string: ''
    },
    address_error: false,
    show_map: false,
    comment: '',
    company: '',
    contact_name: '',
    number: '',
    number_error: false,
    todo: '',
    files: [],
    time_from: '',
    time_to: '',
    has_pause: 0,
    pause_from: '',
    pause_to: '',
    values: [
        {
            id: 1,
            name: 'Погрузка',
            selected: false
        },
        {
            id: 2,
            name: 'Разгрузка',
            selected: false
        },
        {
            id: 3,
            name: 'Получить/сдать документы',
            selected: false
        },
        {
            id: 4,
            name: 'Встретить экспедитора',
            selected: false
        },
    ],
    show_values_collapse: false,
    values_error: false,
    show_form: false,
};

const pointsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POINT:
            if (!state.address.region || !state.address.street || !state.address.house || !state.number || (!state.values.find(value => value.selected))) {
                return {
                    ...state,
                    address_error: (!state.address.region || !state.address.street || !state.address.house),
                    number_error: !state.number,
                    values_error: !(state.values.find(value => value.selected)),
                    show_form: true
                };
            }
            let point = {
                name: action.name,
                address: state.address,
                comment: state.comment,
                company: state.company,
                contact_name: state.contact_name,
                number: state.number,
                todo: state.todo,
                files: state.files,
                time_from: state.time_from,
                time_to: state.time_to,
                has_pause: state.has_pause,
                pause_from: state.pause_from,
                pause_to: state.pause_to,
                values: [...state.values]
            }
            let points = [...state.points];
            points.push(point);
            return {
                ...state,
                points: points,
                name: '',
                address: {
                    region_type: '',
                    region: '',
                    street_type: '',
                    street: '',
                    house: '',
                    longitude: null,
                    latitude: null,
                    string: ''
                },
                comment: '',
                company: '',
                contact_name: '',
                number: '',
                todo: '',
                files: [],
                time_from: '',
                time_to: '',
                has_pause: 0,
                pause_from: '',
                pause_to: '',
                values: [
                    {
                        id: 1,
                        name: 'Погрузка',
                        selected: false
                    },
                    {
                        id: 2,
                        name: 'Разгрузка',
                        selected: false
                    },
                    {
                        id: 3,
                        name: 'Получить/сдать документы',
                        selected: false
                    },
                    {
                        id: 4,
                        name: 'Встретить экспедитора',
                        selected: false
                    },
                ],
                show_form: false,
                address_error: false,
                number_error: false,
                values_error: false
            };
        case SHOW_POINT_INFO:
            let pointToShow = state.points[action.index];
            return {
                ...state,
                update_point: action.index,
                name: pointToShow.name,
                address: pointToShow.address,
                comment: pointToShow.comment,
                company: pointToShow.company,
                contact_name: pointToShow.contact_name,
                number: pointToShow.number,
                todo: pointToShow.todo,
                files: pointToShow.files,
                time_from: pointToShow.time_from,
                time_to: pointToShow.time_to,
                has_pause: pointToShow.has_pause,
                pause_from: pointToShow.pause_from,
                pause_to: pointToShow.pause_to,
                values: [...pointToShow.values],
                show_form: true
            };
        case DO_UPDATE_POINT:
            if (!state.address.region || !state.address.street || !state.address.house || !state.number || (!state.values.find(value => value.selected))) {
                return {
                    ...state,
                    address_error: (!state.address.region || !state.address.street || !state.address.house),
                    number_error: !state.number,
                    values_error: !(state.values.find(value => value.selected)),
                    show_form: true
                };
            }
            let pointToUpdate = {
                name: action.name,
                address: state.address,
                comment: state.comment,
                company: state.company,
                contact_name: state.contact_name,
                number: state.number,
                todo: state.todo,
                files: state.files,
                time_from: state.time_from,
                time_to: state.time_to,
                has_pause: state.has_pause,
                pause_from: state.pause_from,
                pause_to: state.pause_to,
                values: [...state.values]
            }
            let pointsToUpdate = [...state.points];
            pointsToUpdate[action.index] = pointToUpdate;
            return {
                ...state,
                points: pointsToUpdate,
                update_point: null,
                name: '',
                address: {
                    region_type: '',
                    region: '',
                    street_type: '',
                    street: '',
                    house: '',
                    longitude: null,
                    latitude: null,
                    string: ''
                },
                comment: '',
                company: '',
                contact_name: '',
                number: '',
                todo: '',
                files: [],
                time_from: '',
                time_to: '',
                has_pause: 0,
                pause_from: '',
                pause_to: '',
                values: [
                    {
                        id: 1,
                        name: 'Погрузка',
                        selected: false
                    },
                    {
                        id: 2,
                        name: 'Разгрузка',
                        selected: false
                    },
                    {
                        id: 3,
                        name: 'Получить/сдать документы',
                        selected: false
                    },
                    {
                        id: 4,
                        name: 'Встретить экспедитора',
                        selected: false
                    },
                ],
                show_form: false,
                address_error: false,
                number_error: false,
                values_error: false
            };
        case DELETE_POINT:
            let pointsToDelete = [...state.points];
            pointsToDelete.splice(action.index, 1)
            return {
                ...state,
                points: pointsToDelete
            };
        case TOGGLE_VALUE:
            let values = [...state.values];
            let value = values.find(value => value.id === action.id);
            value.selected = !value.selected;
            if (values.find(value => value.selected)) {
                return {
                    ...state,
                    values: values,
                    values_error: false
                };
            } else {
                return {
                    ...state,
                    values: values,
                    values_error: true
                };
            }
        case SET_ADDRESS:
            let data = action.value.data;
            return {
                ...state,
                address_error: false,
                address: {
                    region_type: data.region_type,
                    region: data.region,
                    street_type: data.street_type,
                    street: data.street,
                    house: data.house,
                    longitude: data.geo_lon,
                    latitude: data.geo_lat,
                    string: action.value.value
                },
            }
        case SET_NUMBER:
            if (action.value) {
                return {
                    ...state,
                    number_error: false,
                    number: action.value
                }
            } else {
                return {
                    ...state,
                    number_error: true,
                    number: action.value
                }
            }
        case SET_FILES:
            let files = [...state.files];
            files.push({id: action.id, name: action.name});
            return {
                ...state,
                files
            }
        case SET_FORM_STATE:
            return {
                ...state,
                ...action.object
            }
        case TOGGLE_VALUES_COLLAPSE:
            return {
                ...state,
                show_values_collapse: action.show
            }
        case TOGGLE_FORM:
            return {
                ...state,
                show_form: action.show
            }
        case TOGGLE_ADDRESS_MAP:
            return {
                ...state,
                show_map: action.show
            }
        default:
            return state;
    }
};

export const addPoint = (name) => ({type: ADD_POINT, name});
export const showPointInfo = (index) => ({type: SHOW_POINT_INFO, index});
export const doUpdatePoint = (index, name) => ({type: DO_UPDATE_POINT, index, name});
export const deletePoint = (index) => ({type: DELETE_POINT, index});
export const toggleValue = (id) => ({type: TOGGLE_VALUE, id});
export const setAddress = (value) => ({type: SET_ADDRESS, value});
export const setNumber = (value) => ({type: SET_NUMBER, value});
export const addFile = (id, name) => ({type: SET_FILES, id, name});
export const setFormState = (object) => ({type: SET_FORM_STATE, object});
export const toggleValuesCollapse = (show) => ({type: TOGGLE_VALUES_COLLAPSE, show});
export const toggleForm = (show) => ({type: TOGGLE_FORM, show});
export const toggleAddressMap = (show) => ({type: TOGGLE_ADDRESS_MAP, show});

export const addFileThunk = (name, data) => async (dispatch) => {
    let response = await fileAPI.addFile(name, data);
    dispatch(addFile(response.data.id, name));
};

export const setAddressFromMapThunk = (coords) => async (dispatch) => {
    let response = await addressAPI.getAddressByCoords(coords[0], coords[1]);
    if (response.data.suggestions[0]) {
        dispatch(setAddress(response.data.suggestions[0]));
    } else {
        dispatch(setAddress({data: {region_type: '', region: '', street_type: '', street: '', house: '', geo_lat: null, geo_lon: null}, value: ''}));
    }
};

export default pointsReducer;