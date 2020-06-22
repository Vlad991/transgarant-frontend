import {cargoAPI} from "../api/api";
import {setCategory} from "./categoryReducer";

const SET_PALLET_TYPES = 'SET-PALLET-TYPES';
const SET_PALLET = 'SET-PALLET';
const SET_PACKAGE_TYPES = 'SET-PACKAGE-TYPES';
const SET_PACKAGE = 'SET-PACKAGE';
const SET_CARGO_STATE = 'SET-CARGO-STATE';
const ADD_PALLET = 'ADD-PALLET';
const ADD_PACKAGE = 'ADD-PACKAGE';
const ADD_PLACE = 'ADD-PLACE';
const SET_PACKED_ITEMS = 'SET-PACKED-ITEMS';
const SET_CARGO_SIZES = 'SET-CARGO-SIZES';
const SET_CARGO_DATA = 'SET-CARGO-DATA';

let initialState = {
    name: '',
    price: 0,
    quantity: 1,
    length: 1.2,
    width: 0.8,
    height: 1,

    pallet_quantity: 1,
    pallet_length: 1,
    pallet_width: 1,
    pallet_height: 1,
    pallet_weight: 1,
    pallet_types: [{name: ''}],
    pallets: [],

    place_length: 1,
    place_width: 1,
    place_height: 1,
    place_weight: 1,
    places: [],

    package_quantity: 1,
    package_length: 1,
    package_width: 1,
    package_height: 1,
    package_weight: 1,
    package_types: [{name: ''}],
    packages: [],

    selected_pallet: '',
    selected_package: '',
    packed_items: [],
    cargoHeight: 3.7,
    cargoWidth: 2.9,
    total_weight: 0,
    total_volume: 0,
    total_area: 0
};

const cargoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PALLET_TYPES:
            return {
                ...state,
                pallet_types: [...action.pallet_types],
                selected_pallet: action.pallet_types[0].id,
                pallet_length: action.pallet_types[0].length,
                pallet_width: action.pallet_types[0].width
            }
        case SET_PACKAGE_TYPES:
            return {
                ...state,
                package_types: [...action.package_types]
            }
        case SET_PALLET:
            let pallet = state.pallet_types.find(pallet => pallet.id === action.selected_pallet);
            return {
                ...state,
                selected_pallet: action.selected_pallet,
                pallet_length: pallet.length,
                pallet_width: pallet.width
            }
        case SET_PACKAGE:
            return {
                ...state,
                selected_package: action.selected_package
            }
        case SET_CARGO_STATE:
            return {
                ...state,
                ...action.object
            }
        case ADD_PALLET:
            return {
                ...state,
                pallets: action.pallets
            }
        case ADD_PLACE:
            return {
                ...state,
                places: action.places
            }
        case ADD_PACKAGE:
            return {
                ...state,
                packages: action.packages
            }
        case SET_PACKED_ITEMS:
            return {
                ...state,
                packed_items: action.packed_items
            }
        case SET_CARGO_SIZES:
            return {
                ...state,
                cargoHeight: action.height,
                cargoWidth: action.width
            }
        case SET_CARGO_DATA:
            return {
                ...state,
                total_weight: action.total_weight,
                total_volume: action.total_volume,
                total_area: action.total_area
            }
        default:
            return state;
    }
};

export const setPalletTypes = (pallet_types) => ({type: SET_PALLET_TYPES, pallet_types});
export const setPallet = (selected_pallet) => ({type: SET_PALLET, selected_pallet});
export const setPackage = (selected_package) => ({type: SET_PACKAGE, selected_package});
export const setPackageTypes = (package_types) => ({type: SET_PACKAGE_TYPES, package_types});
export const setCargoState = (object) => ({type: SET_CARGO_STATE, object});
export const addPallets = (pallets) => ({type: ADD_PALLET, pallets});
export const addPlaces = (places) => ({type: ADD_PLACE, places});
export const addPackages = (packages) => ({type: ADD_PACKAGE, packages});
export const setPackedItems = (packed_items) => ({type: SET_PACKED_ITEMS, packed_items});
export const setCargoSizes = (height, width) => ({type: SET_CARGO_SIZES, height, width});
export const setCargoData = (total_weight, total_volume, total_area) => ({type: SET_CARGO_DATA, total_weight, total_volume, total_area});

export const setPalletTypesThunk = () => async (dispatch) => {
    let response = await cargoAPI.getPalletTypes();
    dispatch(setPalletTypes(response.data));
    dispatch(setPallet(response.data[0].id));
};

export const setPackageTypesThunk = () => async (dispatch) => {
    let response = await cargoAPI.getPackageTypes();
    dispatch(setPackageTypes(response.data));
    dispatch(setPackage(response.data[0].id));
};

export const addPalletThunk = (name, price, places, pallets, packages, body_option_id, body_option_characteristics) => async (dispatch) => {
    let response = await cargoAPI.addCargo(name, price, places, pallets, packages, body_option_id, body_option_characteristics);
    if (response.status === 200) {
        dispatch(addPallets(pallets));
        dispatch(setCategory(response.data.car_type_id));
        dispatch(setPackedItems(response.data.packed_items));
        dispatch(setCargoSizes(response.data.height, response.data.width));
        dispatch(setCargoData(response.data.total_weight, response.data.total_volume, response.data.total_area));
    } else {
        console.error("Add Pallet: failed");
    }
};

export const addPlaceThunk = (name, price, places, pallets, packages, body_option_id, body_option_characteristics) => async (dispatch) => {
    let response = await cargoAPI.addCargo(name, price, places, pallets, packages, body_option_id, body_option_characteristics);
    if (response.status === 200) {
        dispatch(addPlaces(places));
        dispatch(setCategory(response.data.car_type_id));
        dispatch(setPackedItems(response.data.packed_items));
        dispatch(setCargoSizes(response.data.height, response.data.width));
        dispatch(setCargoData(response.data.total_weight, response.data.total_volume, response.data.total_area));
    } else {
        console.error("ADd Place: failed");
    }
};

export const addPackageThunk = (name, price, places, pallets, packages, body_option_id, body_option_characteristics) => async (dispatch) => {
    let response = await cargoAPI.addCargo(name, price, places, pallets, packages, body_option_id, body_option_characteristics);
    if (response.status === 200) {
        dispatch(addPackages(packages));
        dispatch(setCategory(response.data.car_type_id));
        dispatch(setPackedItems(response.data.packed_items));
        dispatch(setCargoSizes(response.data.height, response.data.width));
        dispatch(setCargoData(response.data.total_weight, response.data.total_volume, response.data.total_area));
    } else {
        console.error("Add Package: failed");
    }
};

export default cargoReducer;