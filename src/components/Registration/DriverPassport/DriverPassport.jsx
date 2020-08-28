import React from "react";
import {Field, reduxForm} from "redux-form";

const DriverPassport = ({state, setPassportData}) => {
    return (
        <>
            <DriverPassportReduxForm state={state} onChange={setPassportData}/>
            <button className="passport__photo-btn button button--inverse">Фото контроль</button>
        </>
    );
}

const DriverPassportForm = ({state, handleChange}) => {
    return (
        <form onChange={handleChange} className="registration__passport passport form-block">
            <h3 className="form-block__heading">Паспорт</h3>
            <div className="form-block__fields">
                <div className="form-block__fields-line passport__fields-line">
                    <label className="form-block__field input-wrap">
                        <Field component="input" className="input-wrap__input" name="passport_name" value={state.passport_name} type="text" placeholder="Иван Иван Иванов"/>
                    </label>
                    <label className="form-block__field input-wrap">
                        <Field component="input" className="input-wrap__input" name="passport_birthday" value={state.passport_birthday} type="text" placeholder="Дата рождения"/>
                    </label>
                    <div className="form-block__field passport__number">
                        <label className="input-wrap">
                            <Field component="input" className="input-wrap__input" name="passport_number" value={state.passport_number} type="text" placeholder="№"/>
                        </label>
                        <label className="input-wrap">
                            <Field component="input" className="input-wrap__input" name="passport_series" value={state.passport_series} type="text" placeholder="0000000"/>
                        </label>
                    </div>
                    <label className="form-block__field input-wrap">
                        <Field component="input" className="input-wrap__input" name="passport_issued_by" value={state.passport_issued_by} type="text" placeholder="Кем выдан"/>
                    </label>
                </div>
                <div className="form-block__fields-line passport__fields-line">
                    <label className="form-block__field input-wrap">
                        <Field component="input" className="input-wrap__input" name="passport_department" value={state.passport_department} type="text" placeholder="Код подразденения"/>
                    </label>
                    <label className="form-block__field input-wrap">
                        <Field component="input" className="input-wrap__input" name="passport_issued_date" value={state.passport_issued_date} type="text" placeholder="Дата выдачи"/>
                    </label>
                    <label className="form-block__field input-wrap">
                        <Field component="input" className="input-wrap__input" name="passport_registration" value={state.passport_registration} type="text" placeholder="Данные прописки"/>
                    </label>
                    <label className="form-block__field input-wrap">
                        <Field component="input" className="input-wrap__input" name="passport_address" value={state.passport_address} type="text" placeholder="Адрес проживание"/>
                    </label>
                </div>
                <div className="form-block__fields-line passport__photo-line">
                    <label className="form-block__field input-wrap input-wrap--file">
                        Фото разворота
                        <Field component="input" className="input-wrap__input" name="passport_reversal_photo" value={state.passport_reversal_photo} type="file"/>
                    </label>
                    <label className="form-block__field input-wrap input-wrap--file">
                        Фото прописки
                        <Field component="input" className="input-wrap__input" name="passport_registration_photo" value={state.passport_registration_photo} type="file"/>
                    </label>
                </div>
            </div>
        </form>
    );
}

const DriverPassportReduxForm = reduxForm({form: 'driver-passport'})(DriverPassportForm);

export default DriverPassport;