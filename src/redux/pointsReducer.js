import {fileAPI} from "../api/api";

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

let initialState = {
    points: [
        // {
        //     name: 'Точка 1',
        //     address: 'г Москва, Пушкинская пл, д 2',
        //     address_longitude: 37.505951,
        //     address_latitude: 55.706611,
        //     comment: '',
        //     company: 'В ООО "Salus"',
        //     contact_name: 'Васька',
        //     number: '+ 7 934 43 59 435',
        //     todo: 'Принять гурз для того то от такой то компании сказать что по счету такому то',
        //     files: [{id: 1, name: 'file.txt'}],
        //     timeFrom: '09.00',
        //     timeTo: '18.00',
        //     hasPause: true,
        //     pauseFrom: '09.00',
        //     pauseTo: '18.00',
        //     values: [
        //         {
        //             id: 1,
        //             name: 'Погр',
        //             selected: false
        //         },
        //         {
        //             id: 2,
        //             name: 'Разг',
        //             selected: true
        //         },
        //         {
        //             id: 3,
        //             name: 'Получ док',
        //             selected: false
        //         },
        //         {
        //             id: 4,
        //             name: 'Встретить экспедитора',
        //             selected: false
        //         },
        //     ]
        // },
        // {
        //     name: 'Точка 2',
        //     address: 'г Москва, пр-кт Защитников Москвы',
        //     address_longitude: 37.716064,
        //     address_latitude: 55.796263,
        //     comment: '',
        //     company: 'В ООО "Salus"',
        //     contact_name: 'Васька',
        //     number: '+ 7 934 43 59 435',
        //     todo: 'Принять гурз для того то от такой то компании сказать что по счету такому то',
        //     files: [{id: 1, name: 'file.txt'}],
        //     timeFrom: '09.00',
        //     timeTo: '18.00',
        //     hasPause: true,
        //     pauseFrom: '09.00',
        //     pauseTo: '18.00',
        //     values: [
        //         {
        //             id: 1,
        //             name: 'Погр',
        //             selected: false
        //         },
        //         {
        //             id: 2,
        //             name: 'Разг',
        //             selected: true
        //         },
        //         {
        //             id: 3,
        //             name: 'Получ док',
        //             selected: false
        //         },
        //         {
        //             id: 4,
        //             name: 'Встретить экспедитора',
        //             selected: false
        //         },
        //     ]
        // }
    ],
    updatePoint: null,
    name: '',
    address: '',
    address_longitude: null,
    address_latitude: null,
    address_error: false,
    comment: '',
    company: '',
    contact_name: '',
    number: '',
    number_error: false,
    todo: '',
    files: [],
    timeFrom: '',
    timeTo: '',
    hasPause: 0,
    pauseFrom: '',
    pauseTo: '',
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
    showValuesCollapse: false,
    values_error: false,
    showForm: false
};

const pointsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POINT:
            if (!state.address || !state.number || (!state.values.find(value => value.selected))) {
                return {
                    ...state,
                    address_error: !state.address,
                    number_error: !state.number,
                    values_error: !(state.values.find(value => value.selected)),
                    showForm: true
                };
            }
            let point = {
                name: action.name,
                address: state.address,
                address_longitude: state.address_longitude,
                address_latitude: state.address_latitude,
                comment: state.comment,
                company: state.company,
                contact_name: state.contact_name,
                number: state.number,
                todo: state.todo,
                files: state.files,
                timeFrom: state.timeFrom,
                timeTo: state.timeTo,
                hasPause: state.hasPause,
                pauseFrom: state.pauseFrom,
                pauseTo: state.pauseTo,
                values: [...state.values]
            }
            let points = [...state.points];
            points.push(point);
            return {
                ...state,
                points: points,
                name: '',
                address: '',
                comment: '',
                company: '',
                contact_name: '',
                number: '',
                todo: '',
                files: [],
                timeFrom: '',
                timeTo: '',
                hasPause: 0,
                pauseFrom: '',
                pauseTo: '',
                values: [
                    {
                        id: 1,
                        name: 'Погр',
                        selected: false
                    },
                    {
                        id: 2,
                        name: 'Разг',
                        selected: false
                    },
                    {
                        id: 3,
                        name: 'Получ док',
                        selected: false
                    },
                    {
                        id: 4,
                        name: 'Встретить экспедитора',
                        selected: false
                    },
                ],
                showForm: false,
                address_error: false,
                number_error: false,
                values_error: false
            };
        case SHOW_POINT_INFO:
            let pointToShow = state.points[action.index];
            return {
                ...state,
                updatePoint: action.index,
                name: pointToShow.name,
                address: pointToShow.address,
                address_longitude: pointToShow.address_longitude,
                address_latitude: pointToShow.address_latitude,
                comment: pointToShow.comment,
                company: pointToShow.company,
                contact_name: pointToShow.contact_name,
                number: pointToShow.number,
                todo: pointToShow.todo,
                files: pointToShow.files,
                timeFrom: pointToShow.timeFrom,
                timeTo: pointToShow.timeTo,
                hasPause: pointToShow.hasPause,
                pauseFrom: pointToShow.pauseFrom,
                pauseTo: pointToShow.pauseTo,
                values: [...pointToShow.values]
            };
        case DO_UPDATE_POINT:
            if (!state.address) {
                return {
                    ...state,
                    address_error: true,
                    showForm: true
                };
            }
            let pointToUpdate = {
                name: action.name,
                address: state.address,
                address_longitude: state.address_longitude,
                address_latitude: state.address_latitude,
                comment: state.comment,
                company: state.company,
                contact_name: state.contact_name,
                number: state.number,
                todo: state.todo,
                files: state.files,
                timeFrom: state.timeFrom,
                timeTo: state.timeTo,
                hasPause: state.hasPause,
                pauseFrom: state.pauseFrom,
                pauseTo: state.pauseTo,
                values: [...state.values]
            }
            let pointsToUpdate = [...state.points];
            pointsToUpdate[action.index] = pointToUpdate;
            return {
                ...state,
                points: pointsToUpdate,
                updatePoint: null,
                name: '',
                address: '',
                address_latitude: null,
                address_longitude: null,
                comment: '',
                company: '',
                contact_name: '',
                number: '',
                todo: '',
                files: [],
                timeFrom: '',
                timeTo: '',
                hasPause: 0,
                pauseFrom: '',
                pauseTo: '',
                values: [
                    {
                        id: 1,
                        name: 'Погр',
                        selected: false
                    },
                    {
                        id: 2,
                        name: 'Разг',
                        selected: false
                    },
                    {
                        id: 3,
                        name: 'Получ док',
                        selected: false
                    },
                    {
                        id: 4,
                        name: 'Встретить экспедитора',
                        selected: false
                    },
                ],
                showForm: false,
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
            return {
                ...state,
                address_error: false,
                address: action.value.value,
                address_latitude: parseFloat(action.value.data.geo_lat),
                address_longitude: parseFloat(action.value.data.geo_lon)
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
                showValuesCollapse: action.show
            }
        case TOGGLE_FORM:
            return {
                ...state,
                showForm: action.show
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

export const addFileThunk = (name, data) => async (dispatch) => {
    let response = await fileAPI.addFile(name, data);
    dispatch(addFile(response.data.id, name));
};

export default pointsReducer;