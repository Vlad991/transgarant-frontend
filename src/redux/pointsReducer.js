const ADD_POINT = 'ADD-POINT';
const SHOW_POINT_INFO = 'SHOW-POINT-INFO';
const DO_UPDATE_POINT = 'DO-UPDATE-POINT';
const DELETE_POINT = 'DELETE-POINT';
const TOGGLE_VALUE = 'TOGGLE-VALUE';
const SET_ADDRESS = 'SET-ADDRESS';
const SET_FORM_STATE = 'SET-FORM-STATE';

let initialState = {
    points: [
        {
            name: 'Точка 1',
            address: 'г Москва, Пушкинская пл, д 2',
            comment: '',
            company: 'В ООО "Salus"',
            contact_name: 'Васька',
            number: '+ 7 934 43 59 435',
            todo: 'Принять гурз для того то от такой то компании сказать что по счету такому то',
            file: 'file.txt',
            timeFrom: '09.00',
            timeTo: '18.00',
            hasPause: true,
            pauseFrom: '09.00',
            pauseTo: '18.00',
            values: [
                {
                    id: 1,
                    name: 'Погр',
                    selected: false
                },
                {
                    id: 2,
                    name: 'Разг',
                    selected: true
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
            ]
        }
    ],
    updatePoint: null,
    name: '',
    address: '',
    address_error: false,
    comment: '',
    company: '',
    contact_name: '',
    number: '',
    todo: '',
    file: '',
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
    ]
};

const pointsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POINT:
            let point = {
                name: action.name,
                address: state.address,
                comment: state.comment,
                company: state.company,
                contact_name: state.contact_name,
                number: state.number,
                todo: state.todo,
                file: state.file,
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
                points: points
            };
        case SHOW_POINT_INFO:
            let pointToShow = state.points[action.index];
            return {
                ...state,
                updatePoint: action.index,
                name: pointToShow.name,
                address: pointToShow.address,
                comment: pointToShow.comment,
                company: pointToShow.company,
                contact_name: pointToShow.contact_name,
                number: pointToShow.number,
                todo: pointToShow.todo,
                file: pointToShow.file,
                timeFrom: pointToShow.timeFrom,
                timeTo: pointToShow.timeTo,
                hasPause: pointToShow.hasPause,
                pauseFrom: pointToShow.pauseFrom,
                pauseTo: pointToShow.pauseTo,
                values: [...pointToShow.values]
            };
        case DO_UPDATE_POINT:
            let pointToUpdate = {
                name: action.name,
                address: state.address,
                comment: state.comment,
                company: state.company,
                contact_name: state.contact_name,
                number: state.number,
                todo: state.todo,
                file: state.file,
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
                comment: '',
                company: '',
                contact_name: '',
                number: '',
                todo: '',
                file: '',
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
            return {
                ...state,
                values: values
            };
        case SET_ADDRESS:
            if (!action.value) {
                return {
                    ...state,
                    address_error: true
                };
            } else {
                return {
                    ...state,
                    address_error: false,
                    address: action.value.value
                }
            }
        case SET_FORM_STATE:
            return {
                ...state,
                ...action.object
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
export const setFormState = (object) => ({type: SET_FORM_STATE, object});

export default pointsReducer;