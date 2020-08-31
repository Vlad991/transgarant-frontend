import React from 'react';
import {connect} from "react-redux";
import {setPassportData, setRegistrationEqualsAddress} from "../../../redux/registration/driverPassportReducer";
import TextField from "../../Elements/TextField";
import {reduxForm} from "redux-form";
import DateField from "../../Elements/DateField";
import FileField from "../../Elements/FileField";
import {compose} from "redux";

const DriverPassportForm = ({registration_equals_address, handleChange, load, setRegistrationEqualsAddress}) => {
    return (
        <form onChange={handleChange} className="registration__passport passport form-block">
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
                            <input type="checkbox" checked={registration_equals_address} onChange={e => {
                                setRegistrationEqualsAddress(!registration_equals_address);
                                load({registration_equals_address: !registration_equals_address});
                            }} className="check-wrap__input"/>
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
    registration_equals_address: state.driverPassportReducer.registration_equals_address,
    initialValues: state.driverPassportReducer
});

export default compose(
    connect(mapStateToProps, {onChange: setPassportData, load: setPassportData, setRegistrationEqualsAddress}),
    reduxForm({form: 'driver-passport', enableReinitialize: false}))(DriverPassportForm);