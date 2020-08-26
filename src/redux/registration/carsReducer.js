const SET_NEW_CAR_DATA = 'SET-NEW-CAR-DATA';

let initialState = {
    cars: [
        {
            model: 'Марка модель',
            capacity: 500,
            body_type: 'Рефрижератор',
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
            }
        }
    ]
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