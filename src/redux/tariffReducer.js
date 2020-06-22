import {orderAPI} from "../api/api";

const SET_TARIFF = 'SET-TARIFF';
const LOAD_TARIFF = 'LOAD-TARIFF';

let initialState = {
    tariff_types: [
        {
            id: 'bdc31826-7d68-11ea-a9c9-00155d8e4e03',
            name: 'Часовая аренда',
            cost: 0,
            min_cost: 0,
            rate: '',
            min_hours: 0,
            hours: 0,
            cost_by_hour: [],
            items: [],
            items_by_route: [],
            service_information: ''
        },
        {
            id: 'bdc31824-7d68-11ea-a9c9-00155d8e4e03',
            name: 'Ставка',
            cost: 0,
            min_cost: 0,
            rate: '',
            min_hours: 0,
            hours: 0,
            cost_by_hour: 0,
            items: [],
            items_by_route: [],
            service_information: ''
        },
        {
            id: 'bdc31825-7d68-11ea-a9c9-00155d8e4e03',
            name: 'Ставка PM',
            cost: 0,
            min_cost: 0,
            rate: '',
            min_hours: 0,
            hours: 0,
            cost_by_hour: 0,
            items: [],
            items_by_route: [],
            service_information: ''
        },
        {
            id: 'bdc31823-7d68-11ea-a9c9-00155d8e4e03',
            name: 'Доставка',
            cost: 0,
            min_cost: 0,
            rate: '',
            min_hours: 0,
            hours: 0,
            cost_by_hour: 0,
            items: [],
            items_by_route: [],
            service_information: ''
        }
    ],
    selected_tariff: '',
};

const tariffReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_TARIFF:
            let tariffTypes = [...state.tariff_types];
            let tariff = tariffTypes.find(tariff => tariff.id === action.id);
            tariff.cost = action.cost;
            tariff.min_cost = action.min_cost;
            tariff.rate = action.rate;
            tariff.min_hours = action.min_hours;
            tariff.hours = action.hours;
            tariff.cost_by_hour = action.cost_by_hour;
            tariff.items = action.items;
            tariff.items_by_route = action.items_by_route;
            tariff.service_information = action.service_information;
            return {
                ...state,
                tariff_types: tariffTypes
            }
        case SET_TARIFF:
            return {
                ...state,
                selected_tariff: action.selected_tariff
            }
        default:
            return state;
    }
};

export const loadTariff = (id, cost, min_cost, rate, min_hours, hours, cost_by_hour, items, items_by_route, service_information) => ({type: LOAD_TARIFF, id, cost, min_cost, rate, min_hours, hours, cost_by_hour, items, items_by_route, service_information});
export const setTariff = (selected_tariff) => ({type: SET_TARIFF, selected_tariff});

export const loadTariffThunk = (date, body_type_id, body_option_id, body_option_characteristics, additional_requirements, routes, name, price, places, pallets, packages, tariff_type_id, full_name, phone, phone_ext, email, payment_type) => async (dispatch) => {
    let response = await orderAPI.calc(date, body_type_id, body_option_id, body_option_characteristics, additional_requirements, routes, name, price, places, pallets, packages, tariff_type_id, full_name, phone, phone_ext, email, payment_type);
    if (response.status === 200) {
        dispatch(loadTariff(tariff_type_id, response.data.cost, response.data.min_cost, response.data.rate, response.data.min_hours, response.data.hours, response.data.cost_by_hour, response.data.items, response.data.items_by_route, response.data.service_information));
    } else {
        console.error("Load Tariff: failed");
    }
};

export default tariffReducer;