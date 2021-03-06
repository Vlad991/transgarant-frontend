import {orderAPI} from "../../api/checkout-api";
import * as axios from "axios";
import {setDateError} from "./dateReducer";

const SET_TARIFF = 'SET-TARIFF';
const LOAD_TARIFF = 'LOAD-TARIFF';
const SET_MAP_TYPE = 'SET-MAP-TYPE';
const SET_TARIFF_LOADING = 'SET-TARIFF-LOADING';

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
            service_information: '',
            text: '<a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1qm0OF9PcSZZcGHvP0e_hkHf7NqI9VGN67PbCKFohpgg/edit">Условия работы и договор >></a>',
            tariff_loading: false,
            cancelSource: null
        },
        {
            id: 'aa6d8cc0-e0f1-11ea-8dfb-000c298a28ba',
            name: 'Часовая аренда РМ',
            cost: 0,
            min_cost: 0,
            rate: '',
            min_hours: 0,
            hours: 0,
            cost_by_hour: [],
            items: [],
            items_by_route: [],
            service_information: '',
            text: 'Скидка с 13:00 до 17:00*<br/>*время предоставления скидки может изменяться<br/><a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1qm0OF9PcSZZcGHvP0e_hkHf7NqI9VGN67PbCKFohpgg/edit">Условия работы и договор >></a>',
            tariff_loading: false,
            cancelSource: null
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
            service_information: '',
            text: '<a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/19kwRryD9MBkDZmNNklgo2eQHKL2Lj8HGUB5JMnXkY7U/edit">Условия работы и договор >></a>',
            tariff_loading: false,
            cancelSource: null
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
            service_information: '',
            text: 'Скидка с 13:00 до 17:00*<br/>*время предоставления скидки может изменяться<br/>Условия работы и договор >><br/><a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/19kwRryD9MBkDZmNNklgo2eQHKL2Lj8HGUB5JMnXkY7U/edit">Условия работы и договор >></a>',
            tariff_loading: false,
            cancelSource: null
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
            service_information: '',
            text: 'Перевозка выполняется в конкретный день в течение предлагаемого промежутка времени.<br/>*время выполнения заказа нефиксированное<br/><a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/19kwRryD9MBkDZmNNklgo2eQHKL2Lj8HGUB5JMnXkY7U/edit">Условия работы и договор >></a>',
            tariff_loading: false,
            cancelSource: null
        },
        {
            id: 'aa6d8cc1-e0f1-11ea-8dfb-000c298a28ba',
            name: 'Доставка РМ',
            cost: 0,
            min_cost: 0,
            rate: '',
            min_hours: 0,
            hours: 0,
            cost_by_hour: 0,
            items: [],
            items_by_route: [],
            service_information: '',
            text: 'Перевозка выполняется в конкретный день в течение предлагаемого промежутка времени.<br/>*время выполнения заказа нефиксированное<br/><a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/19kwRryD9MBkDZmNNklgo2eQHKL2Lj8HGUB5JMnXkY7U/edit">Условия работы и договор >></a>',
            tariff_loading: false,
            cancelSource: null
        }
    ],
    selected_tariff: 'bdc31826-7d68-11ea-a9c9-00155d8e4e03',
    yandex_map: true
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
        case SET_TARIFF_LOADING:
            state.tariff_types.find(tariff => tariff.id === action.id).tariff_loading = action.value;
            return {
                ...state
            }
        case SET_MAP_TYPE:
            return {
                ...state,
                yandex_map: action.isYandex
            }
        default:
            return state;
    }
};

export const loadTariff = (id, cost, min_cost, rate, min_hours, hours, cost_by_hour, items, items_by_route, service_information) => ({type: LOAD_TARIFF, id, cost, min_cost, rate, min_hours, hours, cost_by_hour, items, items_by_route, service_information});
export const setTariff = (selected_tariff) => ({type: SET_TARIFF, selected_tariff});
export const setMapType = (isYandex) => ({type: SET_MAP_TYPE, isYandex});
export const setTariffLoading = (id, value) => ({type: SET_TARIFF_LOADING, id, value});

export const loadTariffThunk = (tariffId) => async (dispatch, getState) => {
    let state = getState();
    let date = state.dateReducer.date_from;
    let dateTo = state.dateReducer.date_to;
    date = date.getFullYear() + '-'
        + ((date.getMonth() + 1) > 9 ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '-'
        + (date.getDate() > 9 ? date.getDate() : ('0' + date.getDate())) + 'T'
        + (date.getHours() > 9 ? date.getHours() : ('0' + date.getHours())) + ':'
        + (date.getMinutes() > 9 ? date.getMinutes() : ('0' + date.getMinutes())) + ':00T'
        + (dateTo.getHours() > 9 ? dateTo.getHours() : ('0' + dateTo.getHours())) + ':'
        + (dateTo.getMinutes() > 9 ? dateTo.getMinutes() : ('0' + dateTo.getMinutes())) + ':00';
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
    let foundCancelSource = state.tariffReducer.tariff_types.find(tariff => tariff.id === tariffId).cancelSource;
    if (foundCancelSource) {
        foundCancelSource.cancel('Canceled calc method');
    }
    const cancelToken = axios.CancelToken.source().token;
    dispatch(setTariffLoading(tariffId, true));
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
        'paymentonaccount',
        state.categoryReducer.active_category,
        cancelToken);
    if (response.status === 200 && response.data) {
        dispatch(loadTariff(tariffId, response.data.cost, response.data.min_cost, response.data.rate, response.data.min_hours, response.data.hours, response.data.cost_by_hour, response.data.items, response.data.items_by_route, response.data.service_information));
        dispatch(setTariffLoading(tariffId, false));
    } else {
        console.warn("Load Tariff: failed");
    }
};
export const setTariffThunk = (tariffId) => async (dispatch, getState) => {
    const dateFrom = getState().dateReducer.date_from;
    const dateTo = getState().dateReducer.date_to;
    const rmTariffIdList = ['aa6d8cc0-e0f1-11ea-8dfb-000c298a28ba', 'bdc31825-7d68-11ea-a9c9-00155d8e4e03', 'aa6d8cc1-e0f1-11ea-8dfb-000c298a28ba'];
    if (rmTariffIdList.includes(tariffId)) {
        if (dateFrom.getHours() < 13 || (dateTo.getHours() > 17 || (dateTo.getHours() === 17 && dateTo.getMinutes() > 0))) {
            dispatch(setDateError(true));
        } else {
            dispatch(setDateError(false));
        }
    } else {
        dispatch(setDateError(false));
    }
    dispatch(setTariff(tariffId));
};

export default tariffReducer;