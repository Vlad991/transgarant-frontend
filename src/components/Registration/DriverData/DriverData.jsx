import React from "react";
import {Field, Form, Formik} from "formik";

const DriverData = ({state, setDriverData}) => {
    return (
        <section className="registration__driver-data driver-data">
            <h2 className="registration__title">Регистрация водителя</h2>
            <Formik initialValues={{}} validate={setDriverData} onSubmit={{}}>
                <Form className="driver-data__form">
                    <label className="driver-data__field driver-data__name input-wrap">
                        <Field className="input-wrap__input" name="driver_name" type="text" placeholder="ФИО"/>
                    </label>
                    <label className="driver-data__field driver-data__phone input-wrap">
                        <Field className="input-wrap__input" name="driver_phone_1" type="tel" placeholder="Номер телефона"/>
                    </label>
                    <label className="driver-data__field driver-data__phone input-wrap">
                        <Field className="input-wrap__input" name="driver_phone_2" type="tel" placeholder="Номер телефона"/>
                    </label>
                    <label className="driver-data__field driver-data__email input-wrap">
                        <Field className="input-wrap__input" name="driver_email" type="email" placeholder="Email"/>
                    </label>
                </Form>
            </Formik>
        </section>
    );
}

export default DriverData;