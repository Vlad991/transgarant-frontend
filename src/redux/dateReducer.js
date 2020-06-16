const SET_DATE_FROM = 'SET-DATE-FROM';
const SET_DATE_TO = 'SET-DATE-TO';

let initialState = {
    dateFrom: new Date(),
    dateTo: new Date()
};

const dateReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATE_FROM:
            let dateToCopy = state.dateTo;
            dateToCopy.setMonth(action.date.getMonth());
            dateToCopy.setFullYear(action.date.getFullYear());
            dateToCopy.setDate(action.date.getDate());
            dateToCopy.setHours(action.date.getHours());
            dateToCopy.setMinutes(action.date.getMinutes() + 15);
            return {
                ...state,
                dateFrom: action.date,
                dateTo: dateToCopy
            };
        case SET_DATE_TO:
            let dateFromCopy = state.dateFrom;
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
                dateTo: action.date,
                dateFrom: dateFromCopy
            };
        default:
            return state;
    }
};

export const setDateFrom = (date) => ({type: SET_DATE_FROM, date});
export const setDateTo = (date) => ({type: SET_DATE_TO, date});

export default dateReducer;