const SET_NEW_CAR_DATA = 'SET-NEW-CAR-DATA';

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
            value: 100
        },
        {
            id: 1,
            value: 200
        },
        {
            id: 2,
            value: 300
        },
        {
            id: 3,
            value: 400
        },
        {
            id: 4,
            value: 500
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
        default:
            return state;
    }
};

export const setNewCarData = (data) => ({type: SET_NEW_CAR_DATA, data});

export default carsReducer;