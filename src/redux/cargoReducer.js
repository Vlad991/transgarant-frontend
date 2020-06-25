import {cargoAPI} from "../api/api";
import {setCategory} from "./categoryReducer";

const SET_ACTIVE_TAB = 'SET-ACTIVE-TAB';
const SET_EDIT_MODE = 'SET-EDIT-MODE';
const SET_PALLET_TYPES = 'SET-PALLET-TYPES';
const SET_PALLET = 'SET-PALLET';
const SET_PACKAGE_TYPES = 'SET-PACKAGE-TYPES';
const SET_PACKAGE = 'SET-PACKAGE';
const SET_CARGO_STATE = 'SET-CARGO-STATE';
const ADD_PALLET = 'ADD-PALLET';
const EDIT_PALLET = 'EDIT-PALLET';
const ADD_PACKAGE = 'ADD-PACKAGE';
const EDIT_PACKAGE = 'EDIT-PACKAGE';
const ADD_PLACE = 'ADD-PLACE';
const EDIT_PLACE = 'EDIT-PLACE';
const SET_PACKED_ITEMS = 'SET-PACKED-ITEMS';
const SET_CARGO_SIZES = 'SET-CARGO-SIZES';
const SET_CARGO_DATA = 'SET-CARGO-DATA';

let initialState = {
    activeTab: 1,
    editMode: false,
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
    editPallet: null,

    place_length: 1,
    place_width: 1,
    place_height: 1,
    place_weight: 1,
    places: [],
    editPlace: null,

    package_quantity: 1,
    package_length: 1,
    package_width: 1,
    package_height: 1,
    package_weight: 1,
    package_types: [{name: ''}],
    packages: [],
    editPackage: null,

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
        case SET_ACTIVE_TAB:
            return {
                ...state,
                activeTab: action.tab
            }
        case SET_EDIT_MODE:
            return {
                ...state,
                editMode: action.value
            }
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
            let palletType = state.pallet_types.find(pallet => pallet.id === action.selected_pallet);
            return {
                ...state,
                selected_pallet: action.selected_pallet,
                pallet_length: palletType.length,
                pallet_width: palletType.width
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
                editMode: false,
                pallets: action.pallets
            }
        case EDIT_PALLET:
            let pallet = state.pallets[action.index];
            return {
                ...state,
                editMode: true,
                activeTab: 2,
                editPallet: action.index,
                selected_pallet: pallet.pallet_type_id,
                pallet_quantity: pallet.quantity,
                pallet_length: pallet.size.length,
                pallet_width: pallet.size.width,
                pallet_height: pallet.size.height,
                pallet_weight: pallet.size.weight
            }
        case ADD_PLACE:
            return {
                ...state,
                editMode: false,
                places: action.places
            }
        case EDIT_PLACE:
            let place = state.places[action.index];
            return {
                ...state,
                editMode: true,
                activeTab: 3,
                editPlace: action.index,
                place_length: place.size.length,
                place_width: place.size.width,
                place_height: place.size.height,
                place_weight: place.size.weight
            }
        case ADD_PACKAGE:
            return {
                ...state,
                editMode: false,
                packages: action.packages
            }
        case EDIT_PACKAGE:
            let packag = state.packages[action.index];
            return {
                ...state,
                editMode: true,
                activeTab: 3,
                editPackage: action.index,
                selected_package: packag.package_type_id,
                package_quantity: packag.quantity,
                package_length: packag.size.length,
                package_width: packag.size.width,
                package_height: packag.size.height,
                package_weight: packag.size.weight
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

export const setActiveTab = (tab) => ({type: SET_ACTIVE_TAB, tab});
export const setEditMode = (value) => ({type: SET_EDIT_MODE, value});
export const setPalletTypes = (pallet_types) => ({type: SET_PALLET_TYPES, pallet_types});
export const setPallet = (selected_pallet) => ({type: SET_PALLET, selected_pallet});
export const setPackage = (selected_package) => ({type: SET_PACKAGE, selected_package});
export const setPackageTypes = (package_types) => ({type: SET_PACKAGE_TYPES, package_types});
export const setCargoState = (object) => ({type: SET_CARGO_STATE, object});
export const addPallets = (pallets) => ({type: ADD_PALLET, pallets});
export const editPallet = (index) => ({type: EDIT_PALLET, index});
export const addPlaces = (places) => ({type: ADD_PLACE, places});
export const editPlace = (index) => ({type: EDIT_PLACE, index});
export const addPackages = (packages) => ({type: ADD_PACKAGE, packages});
export const editPackage = (index) => ({type: EDIT_PACKAGE, index});
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

export const addPlaceThunk = () => async (dispatch, getState) => {
    let state = getState().cargoReducer;
    let places = [...state.places];
    let place = {
        size: {
            length: state.place_length,
            width: state.place_width,
            height: state.place_height,
            weight: state.place_weight
        }
    }
    places.push(place);
    let response = await cargoAPI.addCargo(state.name, state.price, places, state.pallets, state.packages, state.body_option_id, state.body_option_characteristics);
    if (response.status === 200) {
        dispatch(addPlaces(places));
        dispatch(setCategory(response.data.car_type_id));
        dispatch(setPackedItems(response.data.packed_items));
        dispatch(setCargoSizes(response.data.height, response.data.width));
        dispatch(setCargoData(response.data.total_weight, response.data.total_volume, response.data.total_area));
    } else {
        console.error("Add Place: failed");
    }
};

export const removePlaceThunk = (index) => async (dispatch, getState) => {
    let state = getState().cargoReducer;
    let places = [...state.places];
    places.splice(index, 1);
    if (places.length > 0 || state.pallets.length > 0 || state.packages.length > 0) {
        let response = await cargoAPI.addCargo(state.name, state.price, places, state.pallets, state.packages, state.body_option_id, state.body_option_characteristics);
        if (response.status === 200) {
            dispatch(addPlaces(places));
            dispatch(setCategory(response.data.car_type_id));
            dispatch(setPackedItems(response.data.packed_items));
            dispatch(setCargoSizes(response.data.height, response.data.width));
            dispatch(setCargoData(response.data.total_weight, response.data.total_volume, response.data.total_area));
        } else {
            console.error("Add Place: failed");
        }
    } else {
        dispatch(addPlaces(places));
        dispatch(setPackedItems([]));
        dispatch(setCargoSizes(0, 0));
        dispatch(setCargoData(0, 0, 0));
    }
};

export const doEditPlaceThunk = () => async (dispatch, getState) => {
    let state = getState().cargoReducer;
    let places = [...state.places];
    let place = places[state.editPlace];
    place.size.length = state.place_length;
    place.size.width = state.place_width;
    place.size.height = state.place_height;
    place.size.weight = state.place_weight;
    let response = await cargoAPI.addCargo(state.name, state.price, places, state.pallets, state.packages, state.body_option_id, state.body_option_characteristics);
    if (response.status === 200) {
        dispatch(addPlaces(places));
        dispatch(setCategory(response.data.car_type_id));
        dispatch(setPackedItems(response.data.packed_items));
        dispatch(setCargoSizes(response.data.height, response.data.width));
        dispatch(setCargoData(response.data.total_weight, response.data.total_volume, response.data.total_area));
    } else {
        console.error("Edit Place: failed");
    }
};

export const addPalletThunk = () => async (dispatch, getState) => {
    let state = getState().cargoReducer;
    let pallets = [...state.pallets];
    let pallet = {
        quantity: state.pallet_quantity,
        pallet_type_id: state.selected_pallet,
        size: {
            length: state.pallet_length,
            width: state.pallet_width,
            height: state.pallet_height,
            weight: state.pallet_weight
        }
    }
    pallets.push(pallet);
    let response = await cargoAPI.addCargo(state.name, state.price, state.places, pallets, state.packages, state.body_option_id, state.body_option_characteristics);
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

export const removePalletThunk = (index) => async (dispatch, getState) => {
    let state = getState().cargoReducer;
    let pallets = [...state.pallets];
    pallets.splice(index, 1);
    if (state.places.length > 0 || pallets.length > 0 || state.packages.length > 0) {
        let response = await cargoAPI.addCargo(state.name, state.price, state.places, pallets, state.packages, state.body_option_id, state.body_option_characteristics);
        if (response.status === 200) {
            dispatch(addPallets(pallets));
            dispatch(setCategory(response.data.car_type_id));
            dispatch(setPackedItems(response.data.packed_items));
            dispatch(setCargoSizes(response.data.height, response.data.width));
            dispatch(setCargoData(response.data.total_weight, response.data.total_volume, response.data.total_area));
        } else {
            console.error("Remove Pallet: failed");
        }
    } else {
        dispatch(addPallets(pallets));
        dispatch(setPackedItems([]));
        dispatch(setCargoSizes(0, 0));
        dispatch(setCargoData(0, 0, 0));
    }
};

export const doEditPalletThunk = () => async (dispatch, getState) => {
    let state = getState().cargoReducer;
    let pallets = [...state.pallets];
    let pallet = pallets[state.editPallet];
    pallet.quantity = state.pallet_quantity;
    pallet.pallet_type_id = state.selected_pallet;
    pallet.size.length = state.pallet_length;
    pallet.size.width = state.pallet_width;
    pallet.size.height = state.pallet_height;
    pallet.size.weight = state.pallet_weight;
    let response = await cargoAPI.addCargo(state.name, state.price, state.places, pallets, state.packages, state.body_option_id, state.body_option_characteristics);
    if (response.status === 200) {
        dispatch(addPallets(pallets));
        dispatch(setCategory(response.data.car_type_id));
        dispatch(setPackedItems(response.data.packed_items));
        dispatch(setCargoSizes(response.data.height, response.data.width));
        dispatch(setCargoData(response.data.total_weight, response.data.total_volume, response.data.total_area));
    } else {
        console.error("Edit Pallet: failed");
    }
};

export const addPackageThunk = () => async (dispatch, getState) => {
    let state = getState().cargoReducer;
    let packages = [...state.packages];
    let packag = {
        package_type_id: state.selected_package,
        quantity: state.package_quantity,
        size: {
            length: state.package_length,
            width: state.package_width,
            height: state.package_height,
            weight: state.package_weight
        }
    }
    packages.push(packag);
    let response = await cargoAPI.addCargo(state.name, state.price, state.places, state.pallets, packages, state.body_option_id, state.body_option_characteristics);
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

export const removePackageThunk = (index) => async (dispatch, getState) => {
    let state = getState().cargoReducer;
    let packages = [...state.packages];
    packages.splice(index, 1);
    if (state.places.length > 0 || state.pallets.length > 0 || packages.length > 0) {
        let response = await cargoAPI.addCargo(state.name, state.price, state.places, state.pallets, packages, state.body_option_id, state.body_option_characteristics);
        if (response.status === 200) {
            dispatch(addPackages(packages));
            dispatch(setCategory(response.data.car_type_id));
            dispatch(setPackedItems(response.data.packed_items));
            dispatch(setCargoSizes(response.data.height, response.data.width));
            dispatch(setCargoData(response.data.total_weight, response.data.total_volume, response.data.total_area));
        } else {
            console.error("Remove Package: failed");
        }
    } else {
        dispatch(addPackages(packages));
        dispatch(setPackedItems([]));
        dispatch(setCargoSizes(0, 0));
        dispatch(setCargoData(0, 0, 0));
    }
};

export const doEditPackageThunk = () => async (dispatch, getState) => {
    let state = getState().cargoReducer;
    let packages = [...state.packages];
    let packag = packages[state.editPackage];
    packag.quantity = state.package_quantity;
    packag.package_type_id = state.selected_package;
    packag.size.length = state.package_length;
    packag.size.width = state.package_width;
    packag.size.height = state.package_height;
    packag.size.weight = state.package_weight;
    let response = await cargoAPI.addCargo(state.name, state.price, state.places, state.pallets, packages, state.body_option_id, state.body_option_characteristics);
    if (response.status === 200) {
        dispatch(addPackages(packages));
        dispatch(setCategory(response.data.car_type_id));
        dispatch(setPackedItems(response.data.packed_items));
        dispatch(setCargoSizes(response.data.height, response.data.width));
        dispatch(setCargoData(response.data.total_weight, response.data.total_volume, response.data.total_area));
    } else {
        console.error("Edit Package: failed");
    }
};

export default cargoReducer;