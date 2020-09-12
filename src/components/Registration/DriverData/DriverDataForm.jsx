import React from 'react';
import {connect} from "react-redux";
import TextField from "../../Elements/TextField";
import {reduxForm} from "redux-form";
import {compose} from "redux";
import {setDriverData} from "../../../redux/registration/driverDataReducer";
import {email, minLength3, required, name} from "../../../func/validation";
import PhoneFieldArray from "./PhoneFieldArray";

const DriverDataForm = ({state, title, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit} className="registration__driver-data driver-data">
            <h2 className="registration__title">{title}</h2>
            <div className="driver-data__form">
                <TextField className="driver-data__field driver-data__name" name="driver_name" placeholder="ФИО" validate={[required, minLength3, name]}/>
                <PhoneFieldArray/>
                <TextField className="driver-data__field driver-data__email" name="driver_email" placeholder="Email" validate={[required, email]}/>
            </div>
        </form>
    );
}

let mapStateToProps = (state) => ({
    state: {
        driver_phones: state.driverDataReducer.driver_phones
    },
    initialValues: state.driverDataReducer
});

export default compose(
    connect(mapStateToProps, {onSubmit: setDriverData}),
    reduxForm({form: 'driver-data', enableReinitialize: false}))(DriverDataForm);