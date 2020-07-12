const TOGGLE_RETURN = 'TOGGLE-RETURN';
const SET_RETURN_NAME = 'SET-RETURN-NAME';
const SET_RETURN_DATA = 'SET-RETURN-DATA';

let initialState = {
    show: false,
    names: [
        {id: 1, selected: true, name: 'Название 1'},
        {id: 2, selected: false, name: 'Название 2'},
        {id: 3, selected: false, name: 'Название 3'},
        {id: 4, selected: false, name: 'Название 4'},
    ],
    address: '',
    address_longitude: null,
    address_latitude: null,
    full_name: '',
    phone: '',
    price: null
};

const docReturnReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_RETURN:
            return {
                ...state,
                show: !state.show
            };
        case SET_RETURN_NAME:
            let names = [...state.names];
            names = names.map(name => {
                if (name.id === action.id) {
                    name.selected = true;
                } else {
                    name.selected = false;
                }
                return name;
            })
            return {
                ...state,
                names: names
            };
        case SET_RETURN_DATA:
            return {
                ...state,
                ...action.object
            }
        default:
            return state;
    }
};

export const toggleReturn = () => ({type: TOGGLE_RETURN});
export const setName = (id) => ({type: SET_RETURN_NAME, id});
export const setData = (object) => ({type: SET_RETURN_DATA, object});

export default docReturnReducer;