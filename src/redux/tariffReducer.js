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
    selected_tariff: 'bdc31826-7d68-11ea-a9c9-00155d8e4e03',
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

export const loadTariffThunk = (tariffId) => async (dispatch, getState) => {
    let state = getState();
    let date = new Date();
    date = date.getFullYear() + '-'
        + (date.getMonth() > 9 ? date.getMonth() : ('0' + date.getMonth())) + '-'
        + (date.getDate() > 9 ? date.getDate() : ('0' + date.getDate())) + 'T'
        + (date.getHours() > 9 ? date.getHours() : ('0' + date.getHours())) + ':'
        + (date.getMinutes() > 9 ? date.getMinutes() : ('0' + date.getMinutes())) + ':00';
    let bodyOptionCharacteristics = state.carBodyReducer.body_option_characteristics
        .filter(item => {
            if (item.type === 'ref') {
                let selected = item.values.find(value => value.selected);
                if (selected)
                    return true;
            } else {
                if (item.value)
                    return true;
            }
            return false;
        }).map(item => {
            if (item.type === 'ref') {
                let selected = item.values.find(value => value.selected);
                return ({id: item.id, value: selected.id});
            } else {
                return ({id: item.id, value: true});
            }
        });
    let additionalRequirements = state.dopReducer.additional_requirements.filter(item => item.selected).map(item => ({id: item.id, value: true}));
    let points = state.pointsReducer.points.map((item, index) => ({
        id: index,
        adress: item.address,
        adress_comment: item.comment,
        adress_longitude: item.address_longitude,
        adress_latitude: item.address_latitude,
        company: item.company,
        contact_persons: [
            {
                full_name: item.contact_name,
                phone: item.number,
                phone_ext: '777',
                email: null
            }
        ],
        what_to_do: item.todo,
        working_hours: {
            time_from: item.timeFrom + ":00",
            time_to: item.timeTo + ":00",
            lunch_from: item.pauseFrom + ":00",
            lunch_to: item.pauseTo + ":00",
            no_lunch: !item.hasPause,
            max_landing_time: ''
        },
        action_documents: false,
        action_loading: true,
        action_unloading: false,
        action_forwarder: false,
        files_ids: item.files.map(file => file.id)
    }));
    let response = await orderAPI.calc(
        date,
        state.carBodyReducer.active_body_type,
        state.carBodyReducer.active_body_option,
        bodyOptionCharacteristics,
        additionalRequirements,
        points,
        state.cargoReducer.name,
        state.cargoReducer.price,
        state.cargoReducer.places,
        state.cargoReducer.pallets,
        state.cargoReducer.packages,
        tariffId,
        state.clientFormReducer.full_name,
        state.clientFormReducer.phone,
        '777',
        state.clientFormReducer.email,
        'paymentonaccount');
    if (response.status === 200) {
        dispatch(loadTariff(tariffId, response.data.cost, response.data.min_cost, response.data.rate, response.data.min_hours, response.data.hours, response.data.cost_by_hour, response.data.items, response.data.items_by_route, response.data.service_information));
    } else {
        console.error("Load Tariff: failed");
    }
};

export default tariffReducer;