const SET_CATEGORY = 'SET-CATEGORY';

let initialState = {
    categories: [
        {
            id: 1,
            img: '../img/checkout/category/vc-4-01 2 1.svg',
            name: 'Категория 1',
            text: 'от 0 кг до 500 кг от 1 м3 до 2.7м3',
            info: [
                {id: '', name: 'Тоннаж', value: 'от 0 до 500 кг'},
                {id: '', name: 'Длина', value: 'от 1 до 1.8'},
                {id: '', name: 'Ширина', value: 'от 1 ДО 1.3'},
                {id: '', name: 'Высота', value: 'от 1 ДО 1'},
                {id: '', name: 'Объем', value: 'от 1 ДО 2.7'},
                {id: '', name: 'Площадь', value: 'от 1 ДО 2.3'},
                {id: '', name: 'Паштеты', value: 'от 1 ДО 5'},
                {id: '', name: 'Пандус', value: 'нет'},
                {id: '', name: 'ГидроЛифт', value: 'нет'},
                {id: '', name: 'БОРТ', value: 'нет'},
                {id: '', name: 'РЕФ', value: 'нет'},
                {id: '', name: 'ПРОПУСК', value: 'СК ТТК МКАД'},
            ]
        },
        {
            id: 2,
            img: '../img/checkout/category/vc-4-01 2 2.svg',
            name: 'Категория 1 +',
            text: 'от 501 кг до 1000 кг от 3.2м3 до 7м3',
            info: [
                {id: '', name: 'Тоннаж', value: 'от 0 до 500 кг'},
                {id: '', name: 'Длина', value: 'от 1 до 1.8'},
                {id: '', name: 'Ширина', value: 'от 1 ДО 1.3'},
                {id: '', name: 'Высота', value: 'от 1 ДО 1'},
                {id: '', name: 'Объем', value: 'от 1 ДО 2.7'},
                {id: '', name: 'Площадь', value: 'от 1 ДО 2.3'},
                {id: '', name: 'Паштеты', value: 'от 1 ДО 5'},
                {id: '', name: 'Пандус', value: 'нет'},
                {id: '', name: 'ГидроЛифт', value: 'нет'},
                {id: '', name: 'БОРТ', value: 'нет'},
                {id: '', name: 'РЕФ', value: 'нет'},
                {id: '', name: 'ПРОПУСК', value: 'СК ТТК МКАД'},
            ]
        },
        {
            id: 3,
            img: '../img/checkout/category/vc-4-01 2 3.svg',
            name: 'Категория 2',
            text: 'от 1001 кг до 1500 кг от 7.1 м3 до 12м3',
            info: [
                {id: '', name: 'Тоннаж', value: 'от 0 до 500 кг'},
                {id: '', name: 'Длина', value: 'от 1 до 1.8'},
                {id: '', name: 'Ширина', value: 'от 1 ДО 1.3'},
                {id: '', name: 'Высота', value: 'от 1 ДО 1'},
                {id: '', name: 'Объем', value: 'от 1 ДО 2.7'},
                {id: '', name: 'Площадь', value: 'от 1 ДО 2.3'},
                {id: '', name: 'Паштеты', value: 'от 1 ДО 5'},
                {id: '', name: 'Пандус', value: 'нет'},
                {id: '', name: 'ГидроЛифт', value: 'нет'},
                {id: '', name: 'БОРТ', value: 'нет'},
                {id: '', name: 'РЕФ', value: 'нет'},
                {id: '', name: 'ПРОПУСК', value: 'СК ТТК МКАД'},
            ]
        },
        {
            id: 4,
            img: '../img/checkout/category/vc-4-01 2 4.svg',
            name: 'Категория 2 +',
            text: 'от 1001 кг до 1500 кг от 9.5м3 до 16м3',
            info: [
                {id: '', name: 'Тоннаж', value: 'от 0 до 500 кг'},
                {id: '', name: 'Длина', value: 'от 1 до 1.8'},
                {id: '', name: 'Ширина', value: 'от 1 ДО 1.3'},
                {id: '', name: 'Высота', value: 'от 1 ДО 1'},
                {id: '', name: 'Объем', value: 'от 1 ДО 2.7'},
                {id: '', name: 'Площадь', value: 'от 1 ДО 2.3'},
                {id: '', name: 'Паштеты', value: 'от 1 ДО 5'},
                {id: '', name: 'Пандус', value: 'нет'},
                {id: '', name: 'ГидроЛифт', value: 'нет'},
                {id: '', name: 'БОРТ', value: 'нет'},
                {id: '', name: 'РЕФ', value: 'нет'},
                {id: '', name: 'ПРОПУСК', value: 'СК ТТК МКАД'},
            ]
        },
        {
            id: 5,
            img: '../img/checkout/category/vc-4-01 3.svg',
            name: 'Категория 3',
            text: 'от 1501 кг до 3000 кг от 12м3 до 20м3',
            info: [
                {id: '', name: 'Тоннаж', value: 'от 0 до 500 кг'},
                {id: '', name: 'Длина', value: 'от 1 до 1.8'},
                {id: '', name: 'Ширина', value: 'от 1 ДО 1.3'},
                {id: '', name: 'Высота', value: 'от 1 ДО 1'},
                {id: '', name: 'Объем', value: 'от 1 ДО 2.7'},
                {id: '', name: 'Площадь', value: 'от 1 ДО 2.3'},
                {id: '', name: 'Паштеты', value: 'от 1 ДО 5'},
                {id: '', name: 'Пандус', value: 'нет'},
                {id: '', name: 'ГидроЛифт', value: 'нет'},
                {id: '', name: 'БОРТ', value: 'нет'},
                {id: '', name: 'РЕФ', value: 'нет'},
                {id: '', name: 'ПРОПУСК', value: 'СК ТТК МКАД'},
            ]
        },
        {
            id: 6,
            img: '../img/checkout/category/vc-4-04 3.svg',
            name: 'Категория 4',
            text: 'от 3001 кг до 5000 кг от 14м3 до 32м3',
            info: [
                {id: '', name: 'Тоннаж', value: 'от 0 до 500 кг'},
                {id: '', name: 'Длина', value: 'от 1 до 1.8'},
                {id: '', name: 'Ширина', value: 'от 1 ДО 1.3'},
                {id: '', name: 'Высота', value: 'от 1 ДО 1'},
                {id: '', name: 'Объем', value: 'от 1 ДО 2.7'},
                {id: '', name: 'Площадь', value: 'от 1 ДО 2.3'},
                {id: '', name: 'Паштеты', value: 'от 1 ДО 5'},
                {id: '', name: 'Пандус', value: 'нет'},
                {id: '', name: 'ГидроЛифт', value: 'нет'},
                {id: '', name: 'БОРТ', value: 'нет'},
                {id: '', name: 'РЕФ', value: 'нет'},
                {id: '', name: 'ПРОПУСК', value: 'СК ТТК МКАД'},
            ]
        },
        {
            id: 7,
            img: '../img/checkout/category/vc-4-04 7.svg',
            name: 'Категория 5',
            text: 'от 5001 кг до 10000 кг от 26м3 до 35м3',
            info: [
                {id: '', name: 'Тоннаж', value: 'от 0 до 500 кг'},
                {id: '', name: 'Длина', value: 'от 1 до 1.8'},
                {id: '', name: 'Ширина', value: 'от 1 ДО 1.3'},
                {id: '', name: 'Высота', value: 'от 1 ДО 1'},
                {id: '', name: 'Объем', value: 'от 1 ДО 2.7'},
                {id: '', name: 'Площадь', value: 'от 1 ДО 2.3'},
                {id: '', name: 'Паштеты', value: 'от 1 ДО 5'},
                {id: '', name: 'Пандус', value: 'нет'},
                {id: '', name: 'ГидроЛифт', value: 'нет'},
                {id: '', name: 'БОРТ', value: 'нет'},
                {id: '', name: 'РЕФ', value: 'нет'},
                {id: '', name: 'ПРОПУСК', value: 'СК ТТК МКАД'},
            ]
        },
        {
            id: 8,
            img: '../img/checkout/category/vc-4-04 8.svg',
            name: 'Категория 6',
            text: 'от 5001 кг до 10000 кг от З6 м3 до 45 м3',
            info: [
                {id: '', name: 'Тоннаж', value: 'от 0 до 500 кг'},
                {id: '', name: 'Длина', value: 'от 1 до 1.8'},
                {id: '', name: 'Ширина', value: 'от 1 ДО 1.3'},
                {id: '', name: 'Высота', value: 'от 1 ДО 1'},
                {id: '', name: 'Объем', value: 'от 1 ДО 2.7'},
                {id: '', name: 'Площадь', value: 'от 1 ДО 2.3'},
                {id: '', name: 'Паштеты', value: 'от 1 ДО 5'},
                {id: '', name: 'Пандус', value: 'нет'},
                {id: '', name: 'ГидроЛифт', value: 'нет'},
                {id: '', name: 'БОРТ', value: 'нет'},
                {id: '', name: 'РЕФ', value: 'нет'},
                {id: '', name: 'ПРОПУСК', value: 'СК ТТК МКАД'},
            ]
        },
        {
            id: 9,
            img: '../img/checkout/category/vc-4-04 1.svg',
            name: 'Категория 7',
            text: 'от 10001 кг до 20000 кг от 43м3 до 82м3',
            info: [
                {id: '', name: 'Тоннаж', value: 'от 0 до 500 кг'},
                {id: '', name: 'Длина', value: 'от 1 до 1.8'},
                {id: '', name: 'Ширина', value: 'от 1 ДО 1.3'},
                {id: '', name: 'Высота', value: 'от 1 ДО 1'},
                {id: '', name: 'Объем', value: 'от 1 ДО 2.7'},
                {id: '', name: 'Площадь', value: 'от 1 ДО 2.3'},
                {id: '', name: 'Паштеты', value: 'от 1 ДО 5'},
                {id: '', name: 'Пандус', value: 'нет'},
                {id: '', name: 'ГидроЛифт', value: 'нет'},
                {id: '', name: 'БОРТ', value: 'нет'},
                {id: '', name: 'РЕФ', value: 'нет'},
                {id: '', name: 'ПРОПУСК', value: 'СК ТТК МКАД'},
            ]
        },
    ],
    activeCategory: 5
};

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
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

export default categoryReducer;