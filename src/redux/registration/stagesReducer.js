import {submit} from "redux-form";
import {submitCarForms} from "./carsReducer";
import {submitDriverForms} from "./driversReducer";

const SET_STAGE = 'SET-STAGE';

let initialState = {
    stage: 0
};

const stagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STAGE:
            return {
                ...state,
                stage: action.stage
            };
        default:
            return state;
    }
};

export const setStage = (stage) => ({type: SET_STAGE, stage});

export const submitStage = (nextStage) => async (dispatch, getState) => {
    const stage = getState().stagesReducer.stage;
    if (getState().carHolderReducer.car_holder_type === 0) {
        if (stage === 0) {
            await dispatch(submit('driver-data'));
            await dispatch(submit('driver-passport'));
            if (getState().driverDataReducer.valid && getState().driverPassportReducer.valid) {
                dispatch(setStage(nextStage));
            }
            return null;
        }
        if (stage === 1) {
            if (getState().carsReducer.show_add_form) {
                dispatch(submitCarForms());
            } else {
                dispatch(setStage(nextStage));
            }
            return null;
        }
        if (stage === 2) {
            if (getState().driversReducer.show_add_form) {
                dispatch(submitDriverForms());
            } else {
                dispatch(setStage(nextStage));
            }
            return null;
        }
    } else {
        if (stage === 0) {
            await dispatch(submit('individual-entrepreneur'));
            if (getState().individualEntrepreneurReducer.valid) {
                dispatch(setStage(nextStage));
            }
            return null;
        }
        if (stage === 1) {
            await dispatch(submit('driver-data'));
            await dispatch(submit('driver-passport'));
            await dispatch(submit('driver-license'));
            if (getState().driverDataReducer.valid && getState().driverPassportReducer.valid && getState().driverLicenseReducer.valid) {
                dispatch(setStage(nextStage));
            }
            return null;
        }
        if (stage === 2) {
            if (getState().carsReducer.show_add_form) {
                dispatch(submitCarForms());
            } else {
                dispatch(setStage(nextStage));
            }
            return null;
        }
    }
}

export default stagesReducer;