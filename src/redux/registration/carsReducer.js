const SET_NEW_CAR_DATA = 'SET-NEW-CAR-DATA';
const SET_CAPACITY_TYPE = 'SET-CAPACITY_TYPE';

let initialState = {
    cars: [
        {
            model: 'Марка модель',
            capacity_id: 1,
            body_type_id: 3,
            driver_loader: true,
            ramp: 120,
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
            photo_inside: true,
            photo_in_front: true,
            photo_side: true
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
            name: '40023 098034 305980 3098094 0958720 39875098 127'
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
            value: 'Рефрижератор'
        },
        {
            id: 1,
            value: 'Тент'
        },
        {
            id: 3,
            value: 'Фургон'
        },
    ],
    selected_body_type_id: null,
    driver_loader: true,
    ramp: 120,
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
    photo_inside: true,
    photo_in_front: true,
    photo_side: true
};

const carsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEW_CAR_DATA:
            return {
                ...state,
                ...action.data
            }
        case SET_CAPACITY_TYPE:
            return {
                ...state,
                selected_capacity_id: action.id
            }
        default:
            return state;
    }
};

export const setNewCarData = (data) => ({type: SET_NEW_CAR_DATA, data});
export const setCapacityType = (id) => ({type: SET_CAPACITY_TYPE, id});

export default carsReducer;