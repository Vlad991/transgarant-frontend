import React from 'react';
import {connect} from "react-redux";
import TextField from "../../Elements/TextField";
import {reduxForm} from "redux-form";
import {compose} from "redux";
import {setDriverLicenseData} from "../../../redux/registration/driverLicenseReducer";
import DateField from "../../Elements/DateField";
import FileField from "../../Elements/FileField";
import {minLength3, required, requiredSelect, name, cyrillicAndNumbers, length5} from "../../../func/validation";
import SelectField from "../../Elements/SelectField";
import {passportNumberMask, passportSeriesMask} from "../../../func/mask";
import MultiSelectField from "../../Elements/MultiSelectField";

const DriverLicenseForm = ({state, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit} className="registration__passport registration__passport--license passport passport--license form-block">
            <h3 className="form-block__heading">Водительское удостоверение</h3>
            <div className="form-block__fields">
                <div className="form-block__fields-line passport__fields-line">
                    <TextField className="form-block__field" name="license_name" placeholder="ФИО" validate={[required, minLength3, name]}/>
                    <div className="form-block__field passport__number">
                        <TextField className="" name="license_number" normalize={passportNumberMask} placeholder="№" validate={[required, length5]}/>
                        <TextField className="" name="license_series" normalize={passportSeriesMask} placeholder="0000000" validate={[required]}/>
                    </div>
                    <DateField className="form-block__field" name="license_issue_date" placeholder="Дата выдачи" validate={[required]}/>
                    <DateField className="form-block__field" name="license_validity_date" placeholder="Срок действия" validate={[required]}/>
                </div>
                <div className="form-block__fields-line passport__fields-line">
                    <TextField className="form-block__field" name="license_issued_by" placeholder="Кем выдан" validate={[required, minLength3, cyrillicAndNumbers]}/>
                    <SelectField name="selected_license_country_id" placeholder="Страна" className="form-block__field" items={state.license_countries} validate={[requiredSelect]}/>
                    <MultiSelectField name="license_categories" placeholder="Категория" hidePlaceholder={true} className="form-block__field" validate={[requiredSelect]}/>
                    <label className="form-block__field passport__field--files">
                        <FileField className="form-block__field" name="license_photo_1" placeholder="Фото 1" validate={[required]}/>
                        <FileField className="form-block__field" name="license_photo_2" placeholder="Фото 2" validate={[required]}/>
                    </label>
                </div>
            </div>
        </form>
    );
}

let mapStateToProps = (state) => ({
    state: {
        license_countries: state.driverLicenseReducer.license_countries,
    },
    initialValues: {
        license_name: state.driverLicenseReducer.license_name,
        license_number: state.driverLicenseReducer.license_number,
        license_series: state.driverLicenseReducer.license_series,
        license_issue_date: state.driverLicenseReducer.license_issue_date,
        license_validity_date: state.driverLicenseReducer.license_validity_date,
        license_issued_by: state.driverLicenseReducer.license_issued_by,
        selected_license_country_id: state.driverLicenseReducer.selected_license_country_id,
        license_categories: state.driverLicenseReducer.license_categories,
        license_photo_1: state.driverLicenseReducer.license_photo_1,
        license_photo_2: state.driverLicenseReducer.license_photo_2,
    }
});

export default compose(
    connect(mapStateToProps, {onSubmit: setDriverLicenseData}),
    reduxForm({form: 'driver-license', enableReinitialize: false}))(DriverLicenseForm);