import React from "react";
import SelectContainer from "../../Elements/SelectContainer";
import {Field, reduxForm} from "redux-form";
import FileFieldContainer from "../../Elements/FileFieldContainer";
import DateFieldContainer from "../../Elements/DateFieldContainer";

const DriverLicense = ({state, setDriverLicenseData}) => {
    return (
        <DriverLicenseReduxForm state={state} onChange={setDriverLicenseData}/>
    );
}

const DriverLicenseForm = ({state, handleChange}) => {
    return (
        <form onChange={handleChange} className="registration__passport registration__passport--license passport passport--license form-block">
            <h3 className="form-block__heading">Водительское удостоверение</h3>
            <div className="form-block__fields">
                <div className="form-block__fields-line passport__fields-line">
                    <label className="form-block__field input-wrap">
                        <Field component="input" className="input-wrap__input" name="license_name" value={state.license_name} type="text" placeholder="ФИО"/>
                    </label>
                    <div className="form-block__field passport__number">
                        <label className="input-wrap">
                            <Field component="input" className="input-wrap__input" name="license_number" value={state.license_number} type="text" placeholder="№"/>
                        </label>
                        <label className="input-wrap">
                            <Field component="input" className="input-wrap__input" name="license_series" value={state.license_series} type="text" placeholder="0000000"/>
                        </label>
                    </div>
                    <label className="form-block__field input-wrap input-wrap--date">
                        <Field component={DateFieldContainer} name="license_issue_date" value={state.license_issue_date} type="text" placeholder="Дата выдачи"/>
                    </label>
                    <label className="form-block__field input-wrap input-wrap--date">
                        <Field component={DateFieldContainer} className="input-wrap__input" name="license_validity_date" value={state.license_validity_date} type="text" placeholder="Срок действия"/>
                    </label>
                </div>
                <div className="form-block__fields-line passport__fields-line">
                    <label className="form-block__field input-wrap">
                        <Field component="input" className="input-wrap__input" name="license_issued_by" value={state.license_issued_by} type="text" placeholder="Кем выдан"/>
                    </label>
                    <Field name="selected_license_country_id" value={state.selected_license_country_id} component={({input, meta}) =>
                        <SelectContainer placeholder="Страна"
                                         name={input.name}
                                         elementClass="form-block__field"
                                         selected={state.license_countries.find(item => item.id === input.value)}
                                         items={state.license_countries}
                                         setItem={input.onChange}/>}/>
                    <Field name="selected_license_category_id" value={state.selected_license_category_id} component={({input, meta}) =>
                        <SelectContainer placeholder="Категория"
                                         hidePlaceholder={true}
                                         name={input.name}
                                         elementClass="form-block__field"
                                         selected={state.license_categories.find(item => item.id === input.value)}
                                         items={state.license_categories}
                                         setItem={input.onChange}/>}/>
                    <label className="form-block__field passport__field--files">
                        <label className="form-block__field input-wrap input-wrap--file">
                            {state.license_photo_1 ? state.license_photo_1.name : 'Фото 1'}
                            <Field component={FileFieldContainer} name="license_photo_1"/>
                        </label>
                        <label className="form-block__field input-wrap input-wrap--file">
                            {state.license_photo_2 ? state.license_photo_2.name : 'Фото 2'}
                            <Field component={FileFieldContainer} name="license_photo_2"/>
                        </label>
                    </label>
                </div>
            </div>
        </form>
    );
}

const DriverLicenseReduxForm = reduxForm({form: 'driver-license'})(DriverLicenseForm);

export default DriverLicense;