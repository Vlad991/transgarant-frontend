import React from "react";
import {Formik, Field, Form} from "formik";

const IndividualEntrepreneur = ({state, setIEDetailsData}) => {
    return (
        <Formik initialValues={{}} validate={setIEDetailsData} onSubmit={{}}>
            <Form className="registration__indiv-entrep indiv-entrep form-block">
                <h3 className="form-block__heading">Вввод реквизитов ИП</h3>
                <div className="form-block__fields">
                    <div className="form-block__fields-line">
                        <label className="form-block__field input-wrap">
                            <Field className="input-wrap__input" name="bank_account" type="text" placeholder="Расчетный счет в банке"/>
                        </label>
                        <label className="form-block__field input-wrap">
                            <Field className="input-wrap__input" name="bank_name" type="text" placeholder="Наименование банка"/>
                        </label>
                        <label className="form-block__field input-wrap">
                            <Field className="input-wrap__input" name="bank_id" type="text" placeholder="БИК банка"/>
                        </label>
                        <label className="form-block__field input-wrap">
                            <Field className="input-wrap__input" name="bank_corr_account" type="text" placeholder="Корр. счет банка"/>
                        </label>
                    </div>
                    <div className="form-block__fields-line">
                        <label className="form-block__field input-wrap">
                            <Field className="input-wrap__input" name="bank_tax" type="text" placeholder="ИНН банка"/>
                        </label>
                        <label className="form-block__field input-wrap">
                            <Field className="input-wrap__input" name="bank_registration_reason_code" type="text" placeholder="КПП банка"/>
                        </label>
                        <label className="form-block__field input-wrap">
                            <Field className="input-wrap__input" name="bank_national_registration_number" type="text" placeholder="ОГРН банка"/>
                        </label>
                        <label className="form-block__field input-wrap">
                            <Field className="input-wrap__input" name="bank_law_address" type="text" placeholder="Юридический адрес банка"/>
                        </label>
                    </div>
                </div>
            </Form>
        </Formik>
    );
}

export default IndividualEntrepreneur;