import {numberAPI} from "../../api/registration-api";

const SET_PHONE_NUMBER = 'SET-PHONE-NUMBER';
const SET_SMS_CODE = 'SET-SMS-CODE';
const SET_SMS_IS_CLICKED = 'SET-SMS-IS-CLICKED';
const SET_SMS_IS_SENT = 'SET-SMS-IS-SENT';
const SET_PHONE_VERIFIED = 'SET-PHONE-VERIFIED';
const SET_RECAPTCHA_ENTERED = 'SET-RECAPTCHA-ENTERED';

let initialState = {
    phone_number: null,
    phone_is_entered: false,
    recaptcha_is_entered: false,
    sms_is_clicked: false,
    sms_is_sent: false,
    sms_code: null,
    sms_code_is_entered: false,
    phone_is_verified: true,
};

const numberReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PHONE_NUMBER:
            return {
                ...state,
                phone_number: action.value,
                phone_is_entered: action.value && (action.value.indexOf('_') === -1)
            };
        case SET_RECAPTCHA_ENTERED:
            return {
                ...state,
                recaptcha_is_entered: (action.value !== null)
            }
        case SET_SMS_IS_CLICKED:
            return {
                ...state,
                sms_is_clicked: action.value
            }
        case SET_SMS_IS_SENT:
            return {
                ...state,
                sms_is_sent: action.value
            }
        case SET_SMS_CODE:
            return {
                ...state,
                sms_code: action.value,
                sms_code_is_entered: action.value && (action.value.indexOf('_') === -1)
            };
        case SET_PHONE_VERIFIED:
            return {
                ...state,
                phone_is_verified: action.value
            }
        default:
            return state;
    }
};

export const setPhoneNumber = (value) => ({type: SET_PHONE_NUMBER, value});
export const setRecaptcha = (value) => ({type: SET_RECAPTCHA_ENTERED, value});
export const setSmsClicked = (value) => ({type: SET_SMS_IS_CLICKED, value});
export const setSmsSent = (value) => ({type: SET_SMS_IS_SENT, value});
export const setSmsCode = (value) => ({type: SET_SMS_CODE, value});
export const setPhoneVerified = (value) => ({type: SET_PHONE_VERIFIED, value});

export const sendSmsThunk = () => async (dispatch, getState) => {
    if (!getState().numberReducer.sms_is_clicked) {
        dispatch(setSmsClicked(true));
        let response = await numberAPI.sendSms(getState().numberReducer.phone_number);
        if (response.status === 200) {
            dispatch(setSmsSent(true));
        } else {
            console.warn('Send SMS: failed');
        }
        dispatch(setSmsClicked(false));
    }
}

export const setSmsCodeThunk = (code) => async (dispatch, getState) => {
    if (!getState().numberReducer.sms_code_is_entered) {
        dispatch(setSmsCode(code));
        if (code && (code.indexOf("_") === -1)) {
            let response = await numberAPI.verifyPhone(getState().numberReducer.phone_number, code.replace(/ /g, ''));
            if (response.status === 200 && response.data) {
                dispatch(setPhoneVerified(response.data.valid));
            } else {
                console.warn('Verify phone: failed');
            }
        }
    }
}

export default numberReducer;