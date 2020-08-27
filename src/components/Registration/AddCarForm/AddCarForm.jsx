import React from "react";
import {Field, Form, Formik} from "formik";

const AddCarForm = ({state, setNewCarData}) => {
    return (
        <Formik initialValues={{
            passport_name: state.passport_name,
            passport_birthday: state.passport_birthday,
            passport_number: state.passport_number,
            passport_series: state.passport_series,
            passport_issued_by: state.passport_issued_by,
            passport_department: state.passport_department,
            passport_issued_date: state.passport_issued_date,
            passport_registration: state.passport_registration,
            passport_address: state.passport_address,
            passport_reversal_photo: state.passport_reversal_photo,
            passport_registration_photo: state.passport_registration_photo,
        }} validate={setNewCarData} onSubmit={{}}>
            <Form className="registration__car-form car-form form-block">
                <h3 className="form-block__heading">ДОБавить машину</h3>
                <div className="form-block__fields">
                    <div className="form-block__fields-line passport__fields-line">
                        <label className="form-block__field input-wrap">
                            <Field className="input-wrap__input" name="passport_name" type="text" placeholder="Иван Иван Иванов"/>
                        </label>
                        <label className="form-block__field input-wrap">
                            <Field className="input-wrap__input" name="passport_birthday" type="text" placeholder="Дата рождения"/>
                        </label>
                        <div className="form-block__field passport__number">
                            <label className="input-wrap">
                                <Field className="input-wrap__input" name="passport_number" type="text" placeholder="№"/>
                            </label>
                            <label className="input-wrap">
                                <Field className="input-wrap__input" name="passport_series" type="text" placeholder="0000000"/>
                            </label>
                        </div>
                        <label className="form-block__field input-wrap">
                            <Field className="input-wrap__input" name="passport_issued_by" type="text" placeholder="Кем выдан"/>
                        </label>
                    </div>
                    <div className="form-block__fields-line passport__fields-line">
                        <label className="form-block__field input-wrap">
                            <Field className="input-wrap__input" name="passport_department" type="text" placeholder="Код подразденения"/>
                        </label>
                        <label className="form-block__field input-wrap">
                            <Field className="input-wrap__input" name="passport_issued_date" type="text" placeholder="Дата выдачи"/>
                        </label>
                        <label className="form-block__field input-wrap">
                            <Field className="input-wrap__input" name="passport_registration" type="text" placeholder="Данные прописки"/>
                        </label>
                        <label className="form-block__field input-wrap">
                            <Field className="input-wrap__input" name="passport_address" type="text" placeholder="Адрес проживание"/>
                        </label>
                    </div>
                    <div className="form-block__fields-line passport__photo-line">
                        <label className="form-block__field input-wrap input-wrap--file">
                            Фото разворота
                            <Field className="input-wrap__input" name="passport_reversal_photo" type="file"/>
                        </label>
                        <label className="form-block__field input-wrap input-wrap--file">
                            Фото прописки
                            <Field className="input-wrap__input" name="passport_registration_photo" type="file" placeholder="Фото прописки"/>
                        </label>
                    </div>
                </div>
            </Form>
        </Formik>
    );
}

export default AddCarForm;