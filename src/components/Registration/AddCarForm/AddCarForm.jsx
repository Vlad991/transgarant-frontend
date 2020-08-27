import React from "react";
import {Field, Form, Formik} from "formik";
import SelectContainer from "../../Elements/SelectContainer";

const AddCarForm = ({
                        state,

                        setNewCarData,
                        setCapacityType
                    }) => {
    return (
        <Formik initialValues={{
            // passport_name: state.passport_name,
            // passport_birthday: state.passport_birthday,
            // passport_number: state.passport_number,
            // passport_series: state.passport_series,
            // passport_issued_by: state.passport_issued_by,
            // passport_department: state.passport_department,
            // passport_issued_date: state.passport_issued_date,
            // passport_registration: state.passport_registration,
            // passport_address: state.passport_address,
            // passport_reversal_photo: state.passport_reversal_photo,
            // passport_registration_photo: state.passport_registration_photo,
        }} validate={setNewCarData} onSubmit={{}}>
            <Form className="registration__car-form car-form form-block">
                <h3 className="form-block__heading">ДОБавить машину</h3>
                <div className="form-block__fields">
                    <div className="form-block__fields-line car-form__fields-line">
                        <SelectContainer placeholder="Грузоподьемность"
                                         elementClass="form-block__field car-form__select"
                                         selected={state.capacity_types.find(item => item.id === state.selected_capacity_id)}
                                         items={state.capacity_types}
                                         setItem={setCapacityType}/>
                        <SelectContainer placeholder="Грузоподьемность"
                                         elementClass="form-block__field car-form__select"
                                         selected={state.capacity_types.find(item => item.id === state.selected_capacity_id)}
                                         items={state.capacity_types}
                                         setItem={setCapacityType}/>
                    </div>
                    <div className="form-block__fields-line car-form__fields-line">
                        <SelectContainer placeholder="Грузоподьемность"
                                         elementClass="form-block__field form-block__field-3 car-form__select"
                                         selected={state.capacity_types.find(item => item.id === state.selected_capacity_id)}
                                         items={state.capacity_types}
                                         setItem={setCapacityType}/>
                        <SelectContainer placeholder="Грузоподьемность"
                                         elementClass="form-block__field form-block__field-3 car-form__select"
                                         selected={state.capacity_types.find(item => item.id === state.selected_capacity_id)}
                                         items={state.capacity_types}
                                         setItem={setCapacityType}/>
                        <SelectContainer placeholder="Грузоподьемность"
                                         elementClass="form-block__field form-block__field-3 car-form__select"
                                         selected={state.capacity_types.find(item => item.id === state.selected_capacity_id)}
                                         items={state.capacity_types}
                                         setItem={setCapacityType}/>
                    </div>
                    <div className="form-block__fields-line car-form__fields-line">
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