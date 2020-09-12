import {reset, submit} from "redux-form";

const SET_RECOMMEND_CONTACTS_DATA = 'SET-RECOMMEND-CONTACTS-DATA';
const SET_RECOMMEND_CONTACTS_RESET = 'SET-RECOMMEND-CONTACTS-RESET';

let initialState = {
    recommend_name: null,
    recommend_post: null,
    recommend_phone: null,
    recommend_contact_list: [],
    reset: false
};

const recommendContactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RECOMMEND_CONTACTS_DATA:
            console.log('ok');
            let recommendList = [...state.recommend_contact_list];
            recommendList.push({name: action.data.recommend_name, post: action.data.recommend_post, phone: action.data.recommend_phone})
            return {
                ...state,
                recommend_contact_list: recommendList,
                recommend_name: '',
                recommend_post: '',
                recommend_phone: '',
                reset: true
            }
        case SET_RECOMMEND_CONTACTS_RESET:
            return {
                ...state,
                reset: action.value
            }
        default:
            return state;
    }
};

export const setRecommendContactsData = (data) => ({type: SET_RECOMMEND_CONTACTS_DATA, data});
export const setReset = (value) => ({type: SET_RECOMMEND_CONTACTS_RESET, value});

export const addRecommendContactThunk = () => async (dispatch, getState) => {
    await dispatch(submit('recommend-contacts'));
    if (getState().recommendContactsReducer.reset) {
        dispatch(reset('recommend-contacts'));
        dispatch(setReset(false));
    }
}

export default recommendContactsReducer;