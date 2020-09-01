import React from 'react';
import {connect} from "react-redux";
import {autofill, Field, formValueSelector, reduxForm} from "redux-form";
import {compose} from "redux";
import FileField from "../../Elements/FileField";
import TextField from "../../Elements/TextField";
import DateField from "../../Elements/DateField";
import {setNewDriverData} from "../../../redux/registration/driversReducer";

const DriverPassportForm = ({state, handleSubmit, setRegistrationEqualsAddress}) => {
    return (
        <form onSubmit={handleSubmit} className="registration__passport passport form-block">
            <h3 className="form-block__heading">Паспорт</h3>
            <div className="form-block__fields">
                <div className="form-block__fields-line passport__fields-line">
                    <TextField className="form-block__field" name="passport_name" placeholder="Иван Иван Иванов"/>
                    <DateField className="form-block__field" name="passport_birthday" placeholder="Дата рождения"/>
                    <div className="form-block__field passport__number">
                        <TextField className="" name="passport_number" placeholder="№"/>
                        <TextField className="" name="passport_series" placeholder="0000000"/>
                    </div>
                    <TextField className="form-block__field" name="passport_issued_by" placeholder="Кем выдан"/>
                </div>
                <div className="form-block__fields-line passport__fields-line">
                    <TextField className="form-block__field" name="passport_department" placeholder="Код подразденения"/>
                    <DateField className="form-block__field" name="passport_issued_date" placeholder="Дата выдачи"/>
                    <TextField className="form-block__field" name="passport_registration" placeholder="Данные прописки"/>
                    <TextField className="form-block__field input-wrap--check-inside" name="passport_address" placeholder="Адрес проживание">
                        <label className="check-wrap">
                            <Field name="registration_equals_address" component={({input, meta}) =>
                                <input type="checkbox" className="check-wrap__input" checked={input.value} name={input.name} onChange={e => {
                                    if (!input.value) setRegistrationEqualsAddress(meta.form, 'passport_address', state.passport_registration);
                                    input.onChange(!input.value);
                                }}/>
                            }/>
                            <span className="check-wrap__mark"></span>
                        </label>
                    </TextField>
                </div>
                <div className="form-block__fields-line passport__photo-line">
                    <FileField className="form-block__field" name="passport_reversal_photo" placeholder="Фото разворота"/>
                    <FileField className="form-block__field" name="passport_registration_photo" placeholder="Фото прописки"/>
                </div>
            </div>
        </form>
    );
}

let mapStateToProps = (state) => ({
    state: {
        registration_equals_address: state.driversReducer.registration_equals_address,
        passport_registration: formValueSelector('driver-passport-add')(state, 'passport_registration')
    },
    initialValues: {
        passport_name: state.driversReducer.passport_name,
        passport_birthday: state.driversReducer.passport_birthday,
        passport_number: state.driversReducer.passport_number,
        passport_series: state.driversReducer.passport_series,
        passport_issued_by: state.driversReducer.passport_issued_by,
        passport_department: state.driversReducer.passport_department,
        passport_issued_date: state.driversReducer.passport_issued_date,
        passport_registration: state.driversReducer.passport_registration,
        passport_address: state.driversReducer.passport_address,
        passport_reversal_photo: state.driversReducer.passport_reversal_photo,
        passport_registration_photo: state.driversReducer.passport_registration_photo,
        registration_equals_address: state.driversReducer.registration_equals_address,
    }
});

export default compose(
    connect(mapStateToProps, {onSubmit: setNewDriverData, setRegistrationEqualsAddress: autofill}),
    reduxForm({form: 'driver-passport-add', enableReinitialize: false}))(DriverPassportForm);