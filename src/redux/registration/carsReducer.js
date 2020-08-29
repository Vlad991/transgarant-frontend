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
    selected_capacity_id: '',
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
    photo_inside: null,
    photo_in_front: null,
    photo_side: null
};

const carsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEW_CAR_DATA:
            console.log(action.data);
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