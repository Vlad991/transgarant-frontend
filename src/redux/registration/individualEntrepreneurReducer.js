const SET_IE_DETAILS_DATA = 'SET-IE-DETAILS-DATA';

let initialState = {
    bank_account: null,
    bank_name: null,
    bank_id: null,
    bank_corr_account: null,
    bank_tax: null,
    bank_registration_reason_code: null,
    bank_national_registration_number: null,
    bank_law_address: null
};

const individualEntrepreneurReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IE_DETAILS_DATA:
            return {
                ...state,
                ...action.data
            }
        default:
            return state;
    }
};

export const setIEDetailsData = (data) => ({type: SET_IE_DETAILS_DATA, data});

export default individualEntrepreneurReducer;