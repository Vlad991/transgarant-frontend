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
            id: '2',
            name: 'Часовая аренда РМ',
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
    let date = state.dateReducer.date_from; // todo
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
        adress: item.address.string,
        adress_comment: item.comment,
        adress_longitude: item.address.longitude,
        adress_latitude: item.address.latitude,
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
            time_from: item.time_from.replace('.', ':').replace('с ', '') + ":00",
            time_to: item.time_to.replace('.', ':').replace('до ', '') + ":00",
            lunch_from: item.pause_from.replace('.', ':').replace('с ', '') + ":00",
            lunch_to: item.pause_to.replace('.', ':').replace('до ', '') + ":00",
            no_lunch: !item.has_pause,
            max_landing_time: ''
        },
        action_documents: item.values[2].selected,
        action_loading: item.values[0].selected,
        action_unloading: item.values[1].selected,
        action_forwarder: item.values[3].selected,
        files_ids: item.files.map(file => file.id)
    }));
    if (state.docReturnReducer.show) {
        points.push({
            id: points.length + 1,
            adress: state.docReturnReducer.address.string,
            adress_comment: '',
            adress_longitude: state.docReturnReducer.address.longitude,
            adress_latitude: state.docReturnReducer.address.latitude,
            company: '',
            contact_persons: [
                {
                    full_name: state.docReturnReducer.full_name,
                    phone: state.docReturnReducer.phone,
                    phone_ext: '777',
                    email: null
                }
            ],
            what_to_do: 'Возврат документов',
            working_hours: {
                time_from: '',
                time_to: '',
                lunch_from: '',
                lunch_to: '',
                no_lunch: true,
                max_landing_time: ''
            },
            action_documents: true,
            action_loading: false,
            action_unloading: false,
            action_forwarder: false,
            files_ids: []
        });
    }
    let response = await orderAPI.calc(
        date,
        state.carBodyReducer.active_body_type,
        state.carBodyReducer.active_body_option,
        bodyOptionCharacteristics,
        additionalRequirements,
        points,
        state.cargoReducer.name,
        parseInt(state.cargoReducer.price),
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