import validator from 'validator';
import {orderAPI, phoneAPI} from "../api/api";

const SET_NAME = 'SET-NAME';
const SET_CLIENT_NUMBER = 'SET-CLIENT-NUMBER';
const SET_EMAIL = 'SET-EMAIL';
const SET_NUMBER_ENTERED = 'SET-NUMBER-ENTERED';
const SET_RECAPTCHA_ENTERED = 'SET-RECAPTCHA-ENTERED';
const SET_CODE_SENT = 'SET-CODE-SENT';
const SET_CODE = 'SET-CODE';
const VERIFY_CODE = 'VERIFY-CODE';
const SHOW_ORDER_RESULT = 'SHOW-ORDER-RESULT';
const DO_PROCESSING_ORDER = 'DO-PROCESSING-ORDER';
const SET_AGREE = 'SET-AGREE';
const ENABLE_ERROR_MODE = 'ENABLE-ERROR-MODE';

let initialState = {
    client_name: '',
    name_error: false,
    client_number: '',
    number_error: false,
    number_is_registered: false,
    number_is_entered: false,
    recaptcha_is_entered: false,
    code_is_sent: false,
    client_number_code: null,
    code_is_verified: false,
    client_email: '',
    email_error: false,
    order_is_processed: false,
    order_is_processing: false,
    order_id: null,
    agree: false,
    error_mode: false
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
            return {
                ...state,
                client_number: action.phone,
                number_error: action.error
            };
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
        case SET_NUMBER_ENTERED:
            return {
                ...state,
                number_is_entered: action.value
            }
        case SET_RECAPTCHA_ENTERED:
            return {
                ...state,
                recaptcha_is_entered: action.value
            }
        case SET_CODE_SENT:
            return {
                ...state,
                code_is_sent: action.value,
                client_number_code: null
            }
        case SET_CODE:
            return {
                ...state,
                client_number_code: action.code
            }
        case VERIFY_CODE:
            return {
                ...state,
                code_is_verified: action.value
            }
        case SHOW_ORDER_RESULT:
            return {
                ...state,
                order_is_processed: action.processed,
                order_is_processing: false,
                order_id: action.id
            };
        case DO_PROCESSING_ORDER:
            return {
                ...state,
                order_is_processing: action.processing
            };
        case SET_AGREE:
            return {
                ...state,
                agree: action.value
            }
        case ENABLE_ERROR_MODE:
            return {
                ...state,
                error_mode: action.value
            }
        default:
            return state;
    }
};

export const setName = (value) => ({type: SET_NAME, value});
export const setNumber = (phone, error) => ({type: SET_CLIENT_NUMBER, phone, error});
export const setEmail = (value) => ({type: SET_EMAIL, value});
export const setNumberEntered = (value) => ({type: SET_NUMBER_ENTERED, value});
export const setRecaptchaEntered = (value) => ({type: SET_RECAPTCHA_ENTERED, value});
export const setCodeSent = (value) => ({type: SET_CODE_SENT, value});
export const setCode = (code) => ({type: SET_CODE, code});
export const verifyCode = (value) => ({type: VERIFY_CODE, value});
export const showOrderResult = (id, processed) => ({type: SHOW_ORDER_RESULT, id, processed});
export const doProcessingOrder = (processing) => ({type: DO_PROCESSING_ORDER, processing});
export const setAgree = (value) => ({type: SET_AGREE, value});
export const enableErrorMode = (value) => ({type: ENABLE_ERROR_MODE, value});

export const setNumberThunk = (phone) => async (dispatch) => {
    let cleanPhone = phone.replace('+', '')
        .replace(/ /g, '')
        .replace('(', '')
        .replace('_', '')
        .replace(')', '');
    if (!validator.isEmpty(cleanPhone)) {
        if (phone.indexOf('_') === -1) {
            let response = await phoneAPI.checkPhone(cleanPhone);
            if (response.data.exist) {
                dispatch(setNumber(phone, false));
                dispatch(setNumberEntered(true));
                dispatch(setRecaptchaEntered(true));
                dispatch(setCodeSent(true));
                dispatch(verifyCode(true));
            } else {
                dispatch(setNumber(phone, false));
                dispatch(setNumberEntered(true));
            }
        } else {
            dispatch(setNumber(phone, true));
            dispatch(setRecaptchaEntered(false));
            dispatch(setNumberEntered(false));
        }
    } else {
        dispatch(setNumber(phone, true));
    }
};

export const setRecaptchaThunk = (value) => async (dispatch) => {
    if (value !== null) {
        dispatch(setRecaptchaEntered(true));
    } else {
        dispatch(setRecaptchaEntered(false));
    }
};

export const sendCodeThunk = () => async (dispatch, getState) => {
    let state = getState().clientFormReducer;
    let phone = state.client_number.replace('+', '')
        .replace(/ /g, '')
        .replace('(', '')
        .replace(')', '');
    let response = await phoneAPI.sendSms(phone);
    if (response.data.status === 'success') {
        dispatch(setCodeSent(true));
    } else {
        dispatch(setCodeSent(false));
    }
};

export const setCodeThunk = (code) => async (dispatch, getState) => {
    let state = getState().clientFormReducer;
    if (code.indexOf('_') === -1) {
        dispatch(setCode(code));
        let phone = state.client_number.replace('+', '')
            .replace(/ /g, '')
            .replace('(', '')
            .replace(')', '');
        let response = await phoneAPI.checkSms(phone, code.replace(/ /g, ''));
        if (response.data.valid === true) {
            dispatch(verifyCode(true));
        }
    } else {
        dispatch(setCode(code));
    }
};

export const doOrderThunk = () => async (dispatch, getState) => {
    let state = getState();
    dispatch(doProcessingOrder(true));
    if (validateAllData(state, dispatch)) {
        let date = state.dateReducer.date_from;
        date = date.getFullYear() + '-'
            + ((date.getMonth() + 1) > 9 ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '-'
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
        let response = await orderAPI.orders(
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
            state.tariffReducer.selected_tariff,
            state.clientFormReducer.full_name,
            state.clientFormReducer.phone,
            '777',
            state.clientFormReducer.email,
            state.paymentReducer.payments.find((item, index) => (index + 1) === state.paymentReducer.selected_payment) ?
                state.paymentReducer.payments.find((item, index) => (index + 1) === state.paymentReducer.selected_payment).data : '',
            state.categoryReducer.active_category);
        if (response.status === 200) {
            dispatch(showOrderResult(response.data.id, true));
        } else {
            console.error("Do Order: failed");
        }
    } else {
        dispatch(doProcessingOrder(false));
    }
};

const validateAllData = (state, dispatch) => {
    let hasErrors = false;
    if (state.pointsReducer.points.length < 2) {
        hasErrors = true;
    }
    if (state.cargoReducer.packed_items.length === 0) {
        hasErrors = true;
    }
    if (!state.paymentReducer.selected_payment) {
        hasErrors = true;
    }
    if (!state.clientFormReducer.client_name) {
        hasErrors = true;
    }
    if (!state.clientFormReducer.client_number) {
        hasErrors = true;
    }
    if (!state.clientFormReducer.code_is_verified) {
        hasErrors = true;
    }
    if (!state.clientFormReducer.client_email) {
        hasErrors = true;
    }
    if (!state.clientFormReducer.agree) {
        hasErrors = true;
    }
    if (hasErrors) {
        dispatch(enableErrorMode(true));
    } else {
        dispatch(enableErrorMode(false));
    }
    return !hasErrors;
}

export default clientFormReducer;