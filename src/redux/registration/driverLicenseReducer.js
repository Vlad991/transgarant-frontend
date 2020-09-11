const SET_DRIVER_LICENSE_DATA = 'SET-DRIVER-LICENSE-DATA';

let initialState = {
    license_name: null,
    license_number: null,
    license_series: null,
    license_issue_date: null,
    license_validity_date: null,
    license_issued_by: null,
    license_countries: [{id: 0, name: 'Россия'}, {id: 1, name: 'Беларусь'}, {id: 2, name: 'Казахстан'}],
    selected_license_country_id: null,
    license_categories: [{id: 0, name: 'Категория 1'}, {id: 1, name: 'Категория 1+'}, {id: 2, name: 'Категория 2'}],
    selected_license_category_id: null,
    license_photo_1: null,
    license_photo_2: null,
    valid: false
};

const driverLicenseReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DRIVER_LICENSE_DATA:
            return {
                ...state,
                ...action.data,
                valid: true
            }
        default:
            return state;
    }
};

export const setDriverLicenseData = (data) => ({type: SET_DRIVER_LICENSE_DATA, data});

export default driverLicenseReducer;