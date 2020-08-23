import {categoryAPI} from "../api/api";
import cat1 from '../img/category/vc-4-01 2 1.svg';
import cat1p from '../img/category/vc-4-01 2 2.svg';
import cat2 from '../img/category/vc-4-01 2 3.svg';
import cat2p from '../img/category/vc-4-01 2 4.svg';
import cat3 from '../img/category/vc-4-01 3.svg';
import cat4 from '../img/category/vc-4-04 3.svg';
import cat5 from '../img/category/vc-4-04 7.svg';
import cat6 from '../img/category/vc-4-04 8.svg';
import cat7 from '../img/category/vc-4-04 1.svg';

const SET_CATEGORY = 'SET-CATEGORY';
const SET_CATEGORIES = 'SET-CATEGORIES';

let initialState = {
    categories: [
        {
            id: '52b30be1-49d5-11e7-9696-e41f13c2b942',
            img: cat1,
            name: 'Категория №1',
        },
        {
            id: 'bb0df94d-7dde-11e8-81b0-e41f13c2b942',
            img: cat1p,
            name: 'Категория №1+',
        },
        {
            id: '52b30bdd-49d5-11e7-9696-e41f13c2b942',
            img: cat2,
            name: 'Категория №2',
        },
        {
            id: '52b30bde-49d5-11e7-9696-e41f13c2b942',
            img: cat2p,
            name: 'Категория №2+',
        },
        {
            id: '52b30bdc-49d5-11e7-9696-e41f13c2b942',
            img: cat3,
            name: 'Категория №3',
        },
        {
            id: '52b30bdf-49d5-11e7-9696-e41f13c2b942',
            img: cat4,
            name: 'Категория №4',
        },
        {
            id: '52b30be0-49d5-11e7-9696-e41f13c2b942',
            img: cat5,
            name: 'Категория №5',
        },
        {
            id: '52b30be2-49d5-11e7-9696-e41f13c2b942',
            img: cat6,
            name: 'Категория №6',
        },
        {
            id: '52b30be4-49d5-11e7-9696-e41f13c2b942',
            img: cat7,
            name: 'Категория №7',
        },
    ],
    active_category: '52b30be1-49d5-11e7-9696-e41f13c2b942'
};

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORIES:
            let categories = action.categories.map(category => {
                let stateCategory = state.categories.find(stateCat => stateCat.id === category.id);
                return {
                    ...category,
                    img: stateCategory.img
                }
            })
            return {
                ...state,
                categories: categories
            };
        case SET_CATEGORY:
            return {
                ...state,
                active_category: action.id
            };
        default:
            return state;
    }
};

export const setCategory = (id) => ({type: SET_CATEGORY, id});
export const setCategories = (categories) => ({type: SET_CATEGORIES, categories});

export const setCategoriesThunk = () => async (dispatch) => {
    let response = await categoryAPI.getCategories();
    if (response.status === 200 && response.data) {
        dispatch(setCategories(response.data));
    } else {
        console.error("Load Categories: failed");
    }
};

export default categoryReducer;