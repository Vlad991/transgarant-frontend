import {categoryAPI} from "../api/api";

const SET_CATEGORY = 'SET-CATEGORY';
const SET_CATEGORIES = 'SET-CATEGORIES';

let initialState = {
    categories: [
        {
            id: '52b30be1-49d5-11e7-9696-e41f13c2b942',
            img: '../img/checkout/category/vc-4-01 2 1.svg',
            name: 'Категория 1',
        },
        {
            id: 'bb0df94d-7dde-11e8-81b0-e41f13c2b942',
            img: '../img/checkout/category/vc-4-01 2 2.svg',
            name: 'Категория 1 +',
        },
        {
            id: '52b30bdd-49d5-11e7-9696-e41f13c2b942',
            img: '../img/checkout/category/vc-4-01 2 3.svg',
            name: 'Категория 2',
        },
        {
            id: '52b30bde-49d5-11e7-9696-e41f13c2b942',
            img: '../img/checkout/category/vc-4-01 2 4.svg',
            name: 'Категория 2 +',
        },
        {
            id: '52b30bdc-49d5-11e7-9696-e41f13c2b942',
            img: '../img/checkout/category/vc-4-01 3.svg',
            name: 'Категория 3',
        },
        {
            id: '52b30bdf-49d5-11e7-9696-e41f13c2b942',
            img: '../img/checkout/category/vc-4-04 3.svg',
            name: 'Категория 4',
        },
        {
            id: '52b30be0-49d5-11e7-9696-e41f13c2b942',
            img: '../img/checkout/category/vc-4-04 7.svg',
            name: 'Категория 5',
        },
        {
            id: '52b30be2-49d5-11e7-9696-e41f13c2b942',
            img: '../img/checkout/category/vc-4-04 8.svg',
            name: 'Категория 6',
        },
        {
            id: '52b30be4-49d5-11e7-9696-e41f13c2b942',
            img: '../img/checkout/category/vc-4-04 1.svg',
            name: 'Категория 7',
        },
    ],
    activeCategory: '52b30be1-49d5-11e7-9696-e41f13c2b942'
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
                activeCategory: action.id
            };
        default:
            return state;
    }
};

export const setCategory = (id) => ({type: SET_CATEGORY, id});
export const setCategories = (categories) => ({type: SET_CATEGORIES, categories});

export const setCategoriesThunk = () => async (dispatch) => {
    let response = await categoryAPI.getCategories();
    dispatch(setCategories(response.data));
};

export default categoryReducer;