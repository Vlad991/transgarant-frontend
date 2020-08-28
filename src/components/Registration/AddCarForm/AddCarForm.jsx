import React from "react";
import SelectContainer from "../../Elements/SelectContainer";
import {Field, reduxForm} from "redux-form";

const AddCarForm = ({state, setNewCarData,}) => {
    return (
        <AddCarReduxForm state={state} onChange={setNewCarData}/>
    );
}

const AddCar = ({state, handleChange}) => {
    return (
        <form onChange={handleChange} className="registration__car-form car-form form-block">
            <h3 className="form-block__heading">ДОБавить машину</h3>
            <div className="form-block__fields">
                <div className="form-block__fields-line car-form__fields-line">
                    <Field name="selected_capacity_id" value={state.selected_capacity_id} component={({input, meta}) =>
                        <SelectContainer placeholder="Грузоподьемность"
                                         name={input.name}
                                         elementClass="form-block__field car-form__select"
                                         selected={state.capacity_types.find(item => item.id === input.value)}
                                         items={state.capacity_types}
                                         setItem={input.onChange}/>}/>
                    <Field name="selected_body_type_id" value={state.selected_body_type_id} component={({input, meta}) =>
                        <SelectContainer placeholder="Вид кузова"
                                         name={input.name}
                                         elementClass="form-block__field car-form__select"
                                         selected={state.body_types.find(item => item.id === input.value)}
                                         items={state.body_types}
                                         setItem={input.onChange}/>}/>
                </div>
                <div className="form-block__fields-line car-form__fields-line">
                    <Field name="selected_pass_type_id" value={state.selected_pass_type_id} component={({input, meta}) =>
                        <SelectContainer placeholder="Пропуск"
                                         name={input.name}
                                         elementClass="form-block__field car-form__select"
                                         selected={state.pass_types.find(item => item.id === input.value)}
                                         items={state.pass_types}
                                         setItem={input.onChange}/>}/>
                    <Field name="selected_pass_type_id" value={state.selected_pass_type_id} component={({input, meta}) =>
                        <SelectContainer placeholder="Пропуск"
                                         name={input.name}
                                         elementClass="form-block__field car-form__select"
                                         selected={state.pass_types.find(item => item.id === input.value)}
                                         items={state.pass_types}
                                         setItem={input.onChange}/>}/>
                    <Field name="selected_pass_type_id" value={state.selected_pass_type_id} component={({input, meta}) =>
                        <SelectContainer placeholder="Пропуск"
                                         name={input.name}
                                         elementClass="form-block__field car-form__select"
                                         selected={state.pass_types.find(item => item.id === input.value)}
                                         items={state.pass_types}
                                         setItem={input.onChange}/>}/>
                </div>
                <div className="form-block__fields-line car-form__fields-line">
                    <label className="form-block__field input-wrap input-wrap--file">
                        Фото кузова внутри
                        <Field component="input" className="input-wrap__input" name="photo_inside" value={state.photo_inside} type="file"/>
                    </label>
                    <label className="form-block__field input-wrap input-wrap--file">
                        Фото кузова внутри
                        <Field component="input" className="input-wrap__input" name="photo_inside" value={state.photo_inside} type="file"/>
                    </label>
                    <label className="form-block__field input-wrap input-wrap--file">
                        Фото кузова внутри
                        <Field component="input" className="input-wrap__input" name="photo_inside" value={state.photo_inside} type="file"/>
                    </label>
                </div>
            </div>
        </form>
    );
}

const AddCarReduxForm = reduxForm({form: 'driver-data'})(AddCar);

export default AddCarForm;