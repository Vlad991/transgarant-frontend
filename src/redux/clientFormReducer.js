import validator from 'validator';
import {orderAPI} from "../api/api";

const SET_NAME = 'SET-NAME';
const SET_CLIENT_NUMBER = 'SET-CLIENT-NUMBER';
const SET_EMAIL = 'SET-EMAIL';
const SHOW_ORDER_RESULT = 'SHOW-ORDER-RESULT';

let initialState = {
    client_name: '',
    name_error: false,
    client_number: '',
    number_error: false,
    client_email: '',
    email_error: false,
    orderIsProcessed: false,
    orderId: null
};

const clientFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NAME:
            if (!validator.isEmpty(action.value)) {
                return {
                    ...state,
                    client_name: action.value,
                    name_error: false
                };
            } else {
                return {
                    ...state,
                    client_name: action.value,
                    name_error: true
                };
            }
        case SET_CLIENT_NUMBER:
            if (!validator.isEmpty(action.value)) {
                return {
                    ...state,
                    client_number: action.value,
                    number_error: false
                };
            } else {
                return {
                    ...state,
                    client_number: action.value,
                    number_error: true
                };
            }
        case SET_EMAIL:
            if (validator.isEmail(action.value)) {
                return {
                    ...state,
                    client_email: action.value,
                    email_error: false
                };
            } else {
                return {
                    ...state,
                    client_email: action.value,
                    email_error: true
                };
            }
        case SHOW_ORDER_RESULT:
            return {
                ...state,
                orderIsProcessed: action.processed,
                orderId: action.id
            };
        default:
            return state;
    }
};

export const setName = (value) => ({type: SET_NAME, value});
export const setNumber = (value) => ({type: SET_CLIENT_NUMBER, value});
export const setEmail = (value) => ({type: SET_EMAIL, value});
export const showOrderResult = (id, processed) => ({type: SHOW_ORDER_RESULT, id, processed});

export const doOrderThunk = () => async (dispatch, getState) => {
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
    if (state.docReturnReducer.show) {
        points.push({
            id: points.length + 1,
            adress: state.docReturnReducer.address,
            adress_comment: '',
            adress_longitude: state.docReturnReducer.address_longitude,
            adress_latitude: state.docReturnReducer.address_latitude,
            company: '',
            contact_persons: [
                {
                    full_name: state.docReturnReducer.fullName,
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
    let response = await orderAPI.orders(
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
        state.tariffReducer.selected_tariff,
        state.clientFormReducer.full_name,
        state.clientFormReducer.phone,
        '777',
        state.clientFormReducer.email,
        state.paymentReducer.payments.find((item, index) => (index + 1) === state.paymentReducer.selected_payment) ?
            state.paymentReducer.payments.find((item, index) => (index + 1) === state.paymentReducer.selected_payment).data : '');
    if (response.status === 200) {
        dispatch(showOrderResult(response.data.id, true));
    } else {
        console.error("Do Order: failed");
    }
};

export default clientFormReducer;