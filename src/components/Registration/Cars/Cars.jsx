import React from "react";
import {Formik, Field, Form} from "formik";

const Cars = ({state, setNewCarData}) => {
    return (
        <Formik initialValues={{}} validate={setNewCarData} onSubmit={{}}>
            <Form className="registration__passport passport form-block">
                <h3 className="form-block__heading">Паспорт</h3>
                <div className="form-block__fields">
                    <div className="form-block__fields-line">
                        <label className="form-block__field input-wrap">
                            <Field className="input-wrap__input" name="passport_name" type="text" placeholder="Иван Иван Иванов"/>
                        </label>
                        <label className="form-block__field input-wrap">
                            <Field className="input-wrap__input" name="passport_birthday" type="text" placeholder="Дата рождения"/>
                        </label>
                        <div className="form-block__field">
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
                    <div className="form-block__fields-line">
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
                    <div className="form-block__fields-line">
                        <label className="form-block__field input-wrap">
                            <Field className="input-wrap__input" name="passport_reversal_photo" type="file" placeholder="Фото разворота"/>
                        </label>
                        <label className="form-block__field input-wrap">
                            <Field className="input-wrap__input" name="passport_registration_photo" type="file" placeholder="Фото прописки"/>
                        </label>
                    </div>
                </div>
            </Form>
        </Formik>
    );
}

export default Cars;