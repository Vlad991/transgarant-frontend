import {bbox, booleanContains, lineString, point, polygon} from "@turf/turf";
import data from "./data";
import RoutesApi from "./core/routesApi";
import RouteToMkad from "./core/routeToMkad";

const SET_MAP_STATE = 'SET-MAP-STATE';

let initialState = {
    waypoints: [],
    segments: [],
    mkadRoutes: {},
    bounds: [[38.05389404296876, 55.93958683374666], [37.179794311523445, 55.5616508394963]],
    bkPoly: polygon([data.bkPoly]),
    skPoly: polygon([data.skPoly]),
    ttkPoly: polygon([data.ttkPoly]),
    mkad: polygon([data.poly]),
    mkadOut: polygon([data.outPoly]),
    exclude: ''
};

const leafletMapReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MAP_STATE:
            return {
                ...state,
                ...action.object
            }
        default:
            return state;
    }
};

export const setMapState = (object) => ({type: SET_MAP_STATE, object});

export const setWaypointsThunk = (coords, exclude) => async (dispatch, getState) => {
    let state = getState().mapReducer;
    dispatch(setMapState({segments: []}));
    dispatch(setMapState({mkadRoutes: {}}));
    dispatch(setMapState({exclude: exclude}));
    dispatch(setMapState({waypoints: coords}));

    if (coords.length <= 1) {
        return;
    }

    const box = bbox(lineString(coords));
    dispatch(setMapState({bounds: [[box[0], box[1]], [box[2], box[3]]]}));

    await getRoutes(coords, exclude, state, dispatch);
}

const getRoutes = async (coords, exclude, state, dispatch) => {
    const segments = [];
    const mkadRoutes = {...state.mkadRoutes};
    for (let i = 0; i < coords.length - 1; i++) {
        const route = await RoutesApi.getRoute(coords[i], coords[i + 1], exclude);
        if (route) {
            segments.push(route);
        }
    }

    if (!isInMkad(coords[0], state.mkad)) {
        mkadRoutes.start = await RouteToMkad.getRouteTo(coords[0]);
    }

    if (!isInMkad(coords[coords.length - 1], state.mkad)) {
        mkadRoutes.end = await RouteToMkad.getRouteFrom(coords[coords.length - 1]);
    }

    dispatch(setMapState({mkadRoutes}))
    dispatch(setMapState({segments}));
}

const isInMkad = (waypoint, mkad, poly) => {
    if (!poly) {
        poly = mkad;
    }
    return booleanContains(poly, point(waypoint));
}

export default leafletMapReducer;