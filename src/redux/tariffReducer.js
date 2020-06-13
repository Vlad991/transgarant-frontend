const SET_TARIFF = 'SET-TARIFF';

let initialState = {
    tariff_types: [
        {
            id: '1',
            name: 'Часовая аренда - 3000 р',
            text: 'Планир. 3000 р (437р - час 4 часа работы + час подачи + + )',
        },
        {
            id: '2',
            name: 'Ставка',
            text: '2000 р',
        },
        {
            id: '3',
            name: 'Ставка PM -',
            text: '3000 р',
        },
        {
            id: '4',
            name: 'Доставка - 3000 р',
            text: 'доставка 2000 р (условия) (для тарифа доставка нужно внести данные по грузу)',
        }
    ],
    selected_tariff: ''
};

const tariffReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TARIFF:
            return {
                ...state,
                selected_tariff: action.selected_tariff
            }
        default:
            return state;
    }
};

export const setTariff = (selected_tariff) => ({type: SET_TARIFF, selected_tariff});

export default tariffReducer;