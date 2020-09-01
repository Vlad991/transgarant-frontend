import {reset, submit} from "redux-form";

const SET_RECOMMEND_CONTACTS_DATA = 'SET-RECOMMEND-CONTACTS-DATA';
const ADD_RECOMMEND_CONTACT = 'ADD-RECOMMEND-CONTACT';

let initialState = {
    recommend_name: null,
    recommend_post: null,
    recommend_phone: null,
    recommend_contact_list: []
};

const recommendContactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RECOMMEND_CONTACTS_DATA:
            return {
                ...state,
                ...action.data
            }
        case ADD_RECOMMEND_CONTACT:
            let recommendList = [...state.recommend_contact_list];
            recommendList.push({name: state.recommend_name, post: state.recommend_post, phone: state.recommend_phone})
            return {
                ...state,
                recommend_contact_list: recommendList
            }
        default:
            return state;
    }
};

export const setRecommendContactsData = (data) => ({type: SET_RECOMMEND_CONTACTS_DATA, data});
export const addRecommendContact = () => ({type: ADD_RECOMMEND_CONTACT});

export const addRecommendContactThunk = () => async (dispatch) => {
    await dispatch(submit('recommend-contacts'));
    await dispatch(addRecommendContact());
    dispatch(reset('recommend-contacts'));
}

export default recommendContactsReducer;