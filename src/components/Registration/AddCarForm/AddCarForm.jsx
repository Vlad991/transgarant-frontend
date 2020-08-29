import React from "react";
import SelectContainer from "../../Elements/SelectContainer";
import {Field, reduxForm} from "redux-form";
import AddressFieldContainer from "../../Elements/AddressFieldContainer";
import FileFieldContainer from "../../Elements/FileFieldContainer";

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
                    <Field name="selected_gidrobort_id" value={state.selected_gidrobort_id} component={({input, meta}) =>
                        <SelectContainer placeholder="Гидроборт"
                                         name={input.name}
                                         elementClass="form-block__field car-form__select"
                                         selected={state.gidrobort_types.find(item => item.id === input.value)}
                                         items={state.gidrobort_types}
                                         setItem={input.onChange}/>}/>
                    <Field name="selected_ramp_id" value={state.selected_ramp_id} component={({input, meta}) =>
                        <SelectContainer placeholder="Под пандус"
                                         name={input.name}
                                         elementClass="form-block__field car-form__select"
                                         selected={state.ramp_types.find(item => item.id === input.value)}
                                         items={state.ramp_types}
                                         setItem={input.onChange}/>}/>
                </div>
                <div className="form-block__fields-line car-form__fields-line">
                    <div className="form-block__field car-form__check-wrap">
                        <div className="car-form__check-title">Согласны ли вы оказывать помощь в погрузке разгрузки</div>
                        <label className="car-form__check check-wrap">
                            Да
                            <Field component="input" name="agree_help" checked={state.agree_help} value={true} normalize={value => value == 'true'} type="radio" className="check-wrap__input"/>
                            <span className="check-wrap__mark"></span>
                        </label>
                        <label className="car-form__check check-wrap">
                            Нет
                            <Field component="input" name="agree_help" checked={!state.agree_help} value={false} normalize={value => value == 'true'} type="radio" className="check-wrap__input"/>
                            <span className="check-wrap__mark"></span>
                        </label>
                    </div>
                    <div className="form-block__field car-form__check-wrap">
                        <div className="car-form__check-title">Водитель-грузчик(оплачиваеться)</div>
                        <label className="car-form__check check-wrap">
                            Да
                            <Field component="input" name="driver_loader" checked={state.driver_loader} value={true} normalize={value => value == 'true'} type="radio" className="check-wrap__input"/>
                            <span className="check-wrap__mark"></span>
                        </label>
                        <label className="car-form__check check-wrap">
                            Нет
                            <Field component="input" name="driver_loader" checked={!state.driver_loader} value={false} normalize={value => value == 'true'} type="radio" className="check-wrap__input"/>
                            <span className="check-wrap__mark"></span>
                        </label>
                    </div>
                    <Field component={AddressFieldContainer}
                           name="garage_address"
                           value={state.garage_address}
                           initialValue={state.garage_address.string}
                           placeholder="Место гаража"
                           count={5}
                           elementClass="form-block__field input-wrap input-wrap_address"/>
                </div>
                <div className="form-block__fields-line car-form__fields-line">
                    <label className="form-block__field input-wrap input-wrap--file">
                        {state.photo_inside ? state.photo_inside.name : 'Фото кузова внутри'}
                        <Field component={FileFieldContainer} name="photo_inside"/>
                    </label>
                    <label className="form-block__field input-wrap input-wrap--file">
                        {state.photo_in_front ? state.photo_in_front.name : 'Фото ТС перед'}
                        <Field component={FileFieldContainer} name="photo_in_front"/>
                    </label>
                    <label className="form-block__field input-wrap input-wrap--file">
                        {state.photo_side ? state.photo_side.name : 'Фото машины бок'}
                        <Field component={FileFieldContainer} name="photo_side"/>
                    </label>
                </div>
            </div>
        </form>
    );
}

const AddCarReduxForm = reduxForm({form: 'driver-data'})(AddCar);

export default AddCarForm;