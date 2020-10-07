const SET_DATE_FROM = 'SET-DATE-FROM';
const SET_DATE_TO = 'SET-DATE-TO';
const SET_DATE_ERROR = 'SET-DATE-ERROR';

let initialState = {
    date_from: new Date(),
    date_to: new Date(),
    has_error: false
};

const dateReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATE_FROM:
            let dateToCopy = state.date_to;
            dateToCopy.setMonth(action.date.getMonth());
            dateToCopy.setFullYear(action.date.getFullYear());
            dateToCopy.setDate(action.date.getDate());
            dateToCopy.setHours(action.date.getHours());
            dateToCopy.setMinutes(action.date.getMinutes() + 15);
            return {
                ...state,
                date_from: action.date,
                date_to: dateToCopy
            };
        case SET_DATE_TO:
            let dateFromCopy = state.date_from;
            dateFromCopy.setMonth(action.date.getMonth());
            dateFromCopy.setFullYear(action.date.getFullYear());
            dateFromCopy.setDate(action.date.getDate());
            if (action.date.getHours() < dateFromCopy.getHours()) {
                dateFromCopy.setHours(action.date.getHours());
                dateFromCopy.setMinutes(action.date.getMinutes() - 15);
            } else if (action.date.getMinutes() < dateFromCopy.getMinutes()) {
                dateFromCopy.setMinutes(action.date.getMinutes() - 15);
            }
            return {
                ...state,
                date_to: action.date,
                date_from: dateFromCopy
            };
        case SET_DATE_ERROR:
            return {
                ...state,
                has_error: action.value
            }
        default:
            return state;
    }
};

export const setDateFrom = (date) => ({type: SET_DATE_FROM, date});
export const setDateTo = (date) => ({type: SET_DATE_TO, date});
export const setDateError = (value) => ({type: SET_DATE_ERROR, value});

export default dateReducer;