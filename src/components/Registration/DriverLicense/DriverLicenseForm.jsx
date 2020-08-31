import React from 'react';
import {connect} from "react-redux";
import TextField from "../../Elements/TextField";
import {Field, reduxForm} from "redux-form";
import {compose} from "redux";
import {setDriverLicenseData} from "../../../redux/registration/driverLicenseReducer";
import DateField from "../../Elements/DateField";
import SelectContainer from "../../Elements/SelectContainer";
import FileField from "../../Elements/FileField";

const DriverLicenseForm = ({state, handleChange}) => {
    return (
        <form onChange={handleChange} className="form-block__fields">
            <div className="form-block__fields-line passport__fields-line">
                <TextField className="form-block__field" name="license_name" placeholder="ФИО"/>
                <div className="form-block__field passport__number">
                    <TextField className="" name="license_number" placeholder="№"/>
                    <TextField className="" name="license_series" placeholder="0000000"/>
                </div>
                <DateField className="form-block__field" name="license_issue_date" placeholder="Дата выдачи"/>
                <DateField className="form-block__field" name="license_validity_date" placeholder="Срок действия"/>
            </div>
            <div className="form-block__fields-line passport__fields-line">
                <TextField className="form-block__field" name="license_issued_by" placeholder="Кем выдан"/>
                <Field name="selected_license_country_id" component={({input, meta}) =>
                    <SelectContainer placeholder="Страна" name={input.name} elementClass="form-block__field" selected={state.license_countries.find(item => item.id === input.value)} items={state.license_countries} setItem={input.onChange}/>}/>
                <Field name="selected_license_category_id" component={({input, meta}) =>
                    <SelectContainer placeholder="Категория" hidePlaceholder={true} name={input.name} elementClass="form-block__field" selected={state.license_categories.find(item => item.id === input.value)} items={state.license_categories} setItem={input.onChange}/>}/>
                <label className="form-block__field passport__field--files">
                    <FileField className="form-block__field" name="license_photo_1" placeholder="Фото 1"/>
                    <FileField className="form-block__field" name="license_photo_2" placeholder="Фото 2"/>
                </label>
            </div>
        </form>
    );
}

let mapStateToProps = (state) => ({
    state: state.driverLicenseReducer,
    initialValues: state.driverLicenseReducer
});

export default compose(
    connect(mapStateToProps, {onChange: setDriverLicenseData}),
    reduxForm({form: 'driver-license', enableReinitialize: false}))(DriverLicenseForm);