import React from "react";
import {Field, reduxForm} from "redux-form";

const DriverData = ({state, setDriverData}) => {
    return (
        <DriverDataReduxForm state={state} onChange={setDriverData}/>
    );
}

const DriverDataForm = ({state, handleChange}) => {
    return (
        <form onChange={handleChange} className="registration__driver-data driver-data">
            <h2 className="registration__title">Регистрация водителя</h2>
            <div className="driver-data__form">
                <label className="driver-data__field driver-data__name input-wrap">
                    <Field component="input" className="input-wrap__input" name="driver_name" value={state.driver_name} type="text" placeholder="ФИО"/>
                </label>
                <label className="driver-data__field driver-data__phone input-wrap">
                    <Field component="input" className="input-wrap__input" name="driver_phone_1" value={state.driver_phone_1} type="text" placeholder="Номер телефона"/>
                </label>
                <label className="driver-data__field driver-data__phone input-wrap">
                    <Field component="input" className="input-wrap__input" name="driver_phone_2" value={state.driver_phone_2} type="text" placeholder="Номер телефона"/>
                </label>
                <label className="driver-data__field driver-data__email input-wrap">
                    <Field component="input" className="input-wrap__input" name="driver_email" value={state.driver_email} type="text" placeholder="Email"/>
                </label>
            </div>
        </form>
    );
}

const DriverDataReduxForm = reduxForm({form: 'driver-data'})(DriverDataForm);

export default DriverData;