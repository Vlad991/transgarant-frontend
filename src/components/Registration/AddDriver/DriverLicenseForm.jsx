import React from 'react';
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";
import {compose} from "redux";
import FileField from "../../Elements/FileField";
import DateField from "../../Elements/DateField";
import TextField from "../../Elements/TextField";
import SelectContainer from "../../Elements/SelectContainer";
import {setNewDriverData} from "../../../redux/registration/driversReducer";
import handleSubmit from "redux-form/lib/handleSubmit";

const DriverLicenseForm = ({state, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit} className="registration__passport registration__passport--license passport passport--license form-block">
            <h3 className="form-block__heading">Водительское удостоверение</h3>
            <div className="form-block__fields">
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
            </div>
        </form>
    );
}

let mapStateToProps = (state) => ({
    state: {
        license_countries: state.driversReducer.license_countries,
        license_categories: state.driversReducer.license_categories,
    },
    initialValues: {
        license_name: state.driversReducer.license_name,
        license_number: state.driversReducer.license_number,
        license_series: state.driversReducer.license_series,
        license_issue_date: state.driversReducer.license_issue_date,
        license_validity_date: state.driversReducer.license_validity_date,
        license_issued_by: state.driversReducer.license_issued_by,
        selected_license_country_id: state.driversReducer.selected_license_country_id,
        selected_license_category_id: state.driversReducer.selected_license_category_id,
        license_photo_1: state.driversReducer.license_photo_1,
        license_photo_2: state.driversReducer.license_photo_2,
    }
});

export default compose(
    connect(mapStateToProps, {onSubmit: setNewDriverData}),
    reduxForm({form: 'driver-license-add', enableReinitialize: false}))(DriverLicenseForm);