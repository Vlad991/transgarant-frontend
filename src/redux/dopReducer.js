const DOP_TOGGLE = 'DOP-TOGGLE';

let initialState = {
    active: false,
    additional_requirements: [
        {
            id: "1",
            name: "ППР",
            type: "Boolean"
        },
        {
            id: "2",
            name: "ПРОПУСК ТТК",
            type: "Boolean"
        },
        {
            id: "3",
            name: "СТРАХОВКА ГРУЗА",
            type: "Boolean"
        },
        {
            id: "4",
            name: "ГРУЗЧИК",
            type: "Boolean"
        },
        {
            id: "5",
            name: "ПРОПУСК МКАД",
            type: "Boolean"
        },
        {
            id: "6",
            name: "ДОСТАВКА ДОКУМЕНТОВ",
            type: "Boolean"
        },
        {
            id: "7",
            name: "ГРУЗЧИКИ",
            type: "Boolean"
        },
        {
            id: "8",
            name: "ПРОПУСК СК",
            type: "Boolean"
        },
    ]
};

const dopReducer = (state = initialState, action) => {
    switch (action.type) {
        case DOP_TOGGLE:
            return {
                ...state,
                active: !state.active
            };
        default:
            return state;
    }
};

export const dopToggle = () => ({type: DOP_TOGGLE});

export default dopReducer;