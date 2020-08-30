import React from 'react';
import {connect} from "react-redux";
import TextField from "../../Elements/TextField";
import {FieldArray, reduxForm} from "redux-form";
import {compose} from "redux";
import {setDriverData} from "../../../redux/registration/driverDataReducer";
import PhoneField from "../../Elements/PhoneField";

const DriverDataForm = ({title, handleChange}) => {
    return (
        <form onChange={handleChange} className="registration__driver-data driver-data">
            <h2 className="registration__title">{title}</h2>
            <div className="driver-data__form">
                <TextField className="driver-data__field driver-data__name" name="driver_name" placeholder="ФИО"/>
                <FieldArray name="driver_phones" component={({fields, meta}) =>
                    fields.map(field => {
                        return <PhoneField className="driver-data__field driver-data__phone" name={field} placeholder="Номер телефона"/>
                    })}/>
                <TextField className="driver-data__field driver-data__email" name="driver_email" placeholder="Email"/>
            </div>
        </form>
    );
}

let mapStateToProps = (state) => ({
    initialValues: state.driverDataReducer
});

export default compose(
    connect(mapStateToProps, {onChange: setDriverData}),
    reduxForm({form: 'driver-data', enableReinitialize: true}))(DriverDataForm);