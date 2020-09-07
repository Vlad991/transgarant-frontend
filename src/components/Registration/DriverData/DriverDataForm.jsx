import React from 'react';
import {connect} from "react-redux";
import TextField from "../../Elements/TextField";
import {FieldArray, reduxForm} from "redux-form";
import {compose} from "redux";
import {setDriverData} from "../../../redux/registration/driverDataReducer";
import PhoneField from "../../Elements/PhoneField";
import {email, minLength3, required} from "../../../func/validation";

const DriverDataForm = ({state, title, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit} className="registration__driver-data driver-data">
            <h2 className="registration__title">{title}</h2>
            <div className="driver-data__form">
                <TextField className="driver-data__field driver-data__name" name="driver_name" placeholder="ФИО" validate={[required, minLength3]}/>
                <FieldArray name="driver_phones" component={({fields, meta}) => {
                    return fields.map((field, index, fields) => {
                        return <PhoneField key={`phone${index}`} className="driver-data__field driver-data__phone" addPhone={() => fields.length < 3 ? fields.push('') : null} isLast={fields.length === (index + 1)} name={field} placeholder="Номер телефона"/>
                    });
                }}/>
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