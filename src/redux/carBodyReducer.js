const SET_ACTIVE_BODY_TYPE = 'SET-ACTIVE-BODY-TYPE';
const SET_BODY_OPTION = 'SET-BODY-OPTION';
const SET_BODY_OPTION_CH_VAL = 'SET-BODY-OPTION-CH-VAL';

let initialState = {
    body_types: [
        {
            id: 0,
            img: '../img/car-body/vc-4-04 6.svg',
            name: 'Кузов закрытый'
        },
        {
            id: 1,
            img: '../img/car-body/Group.svg',
            name: 'Кузов откытый'
        },
    ],
    active_body_type: 0,
    body_options: [
        {
            id: '0',
            body_type_id: 0,
            name: 'Любой закрытый'
        },
        {
            id: '1',
            body_type_id: 0,
            name: 'ТЕНТ'
        },
        {
            id: '2',
            body_type_id: 0,
            name: 'ФУРГОН'
        },
        {
            id: '3',
            body_type_id: 0,
            name: 'ЦМ'
        },
        {
            id: '4',
            body_type_id: 0,
            name: 'ИЗОТ'
        },
        {
            id: '5',
            body_type_id: 0,
            name: 'РЕФ'
        },
        {
            id: '6',
            body_type_id: 1,
            name: 'БОРТ'
        }
    ],
    active_body_option: '0',
    body_option_characteristics: [
        {
            id: '1',
            body_type_id: 0,
            body_option_id: "0",
            name: "РАСТЕНТОВКА - БОК"
        },
        {
            id: '2',
            body_type_id: 0,
            body_option_id: "0",
            name: "РАСТЕНТОВКА-ПОЛНАЯ"
        },
        {
            id: '3',
            body_type_id: 0,
            body_option_id: "0",
            name: "РАСТЕНТОВКА-ВЕРХ"
        },
        {
            id: '4',
            body_type_id: 0,
            body_option_id: "0",
            name: "ПАНДУС 90",
            type: "ref"
        },
        {
            id: '5',
            body_type_id: 0,
            body_option_id: "0",
            name: "Гидроборт",
            type: "ref"
        },
        {
            id: '6',
            body_type_id: 0,
            body_option_id: "0",
            name: "СТАНДАРТ"
        },
        {
            id: '7',
            body_type_id: 0,
            body_option_id: "0",
            name: "МЕДКНИЖКА"
        },
        {
            id: '8',
            body_type_id: 0,
            body_option_id: "1",
            name: "Гидроборт",
            type: "ref"
        },
        {
            id: '9',
            body_type_id: 0,
            body_option_id: "1",
            name: "СТАНДАРТ"
        },
        {
            id: '10',
            body_type_id: 0,
            body_option_id: "1",
            name: "МЕДКНИЖКА"
        },
        {
            id: '11',
            body_type_id: 1,
            body_option_id: "6",
            name: "Пандус",
            type: "ref"
        },
        {
            id: '12',
            body_type_id: 1,
            body_option_id: "6",
            name: "Ремни"
        },
        {
            id: '13',
            body_type_id: 1,
            body_option_id: "6",
            name: "Конники"
        },
    ],
    body_option_characteristics_values: [
        {
            id: "1",
            body_option_characteristics_id: '5',
            name: "Гидроборт 400"
        },
        {
            id: "2",
            body_option_characteristics_id: '5',
            name: "Гидроборт 100"
        },
        {
            id: "3",
            body_option_characteristics_id: '5',
            name: "Гидроборт 300"
        },
        {
            id: "14",
            body_option_characteristics_id: '8',
            name: "Гидроборт 300"
        },
        {
            id: "4",
            body_option_characteristics_id: '4',
            name: "ПАНДУС 90"
        },
        {
            id: "5",
            body_option_characteristics_id: '4',
            name: "ПАНДУС 80"
        },
        {
            id: "6",
            body_option_characteristics_id: '11',
            name: "ПАНДУС 90"
        },
        {
            id: "7",
            body_option_characteristics_id: '11',
            name: "ПАНДУС 100"
        },
        {
            id: "8",
            body_option_characteristics_id: '11',
            name: "ПАНДУС 110"
        },
        {
            id: "9",
            body_option_characteristics_id: '11',
            name: "ПАНДУС 120"
        }
    ],
    active_body_option_characteristics_values: [
        {
            id: "1",
            body_option_characteristics_id: '5',
            name: "Гидроборт 400"
        },{
            id: "2",
            body_option_characteristics_id: '8',
            name: "Гидроборт 400"
        },
        {
            id: "4",
            body_option_characteristics_id: '4',
            name: "ПАНДУС 90"
        },
        {
            id: "6",
            body_option_characteristics_id: '11',
            name: "ПАНДУС 90"
        },
    ]
};

const carBodyReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ACTIVE_BODY_TYPE:
            return {
                ...state,
                active_body_type: action.typeId,
                active_body_option: action.optionId,
            };
        case SET_BODY_OPTION:
            return {
                ...state,
                active_body_option: action.optionId,
            };
        case SET_BODY_OPTION_CH_VAL:
            let valuesCopy = [...state.active_body_option_characteristics_values];
            valuesCopy = valuesCopy.map(value => {
                if (value.body_option_characteristics_id === action.bodyOptionChId) {
                    let valueCopy = {...value};
                    let findValue = state.body_option_characteristics_values.find(value => value.id === action.optionChValId);
                    valueCopy.name = findValue.name;
                    valueCopy.id = findValue.id;
                    return valueCopy;
                } else {
                    return value;
                }
            });
            return {
                ...state,
                active_body_option_characteristics_values: valuesCopy
            };
        default:
            return state;
    }
};

export const setActiveBodyType = (typeId, optionId) => ({type: SET_ACTIVE_BODY_TYPE, typeId, optionId});
export const setBodyOption = (optionId) => ({type: SET_BODY_OPTION, optionId});
export const setBodyOptionChVal = (optionChValId, bodyOptionChId) => ({type: SET_BODY_OPTION_CH_VAL, optionChValId, bodyOptionChId});

export default carBodyReducer;