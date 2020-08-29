import React from "react";
import SelectContainer from "../../Elements/SelectContainer";
import {Field, reduxForm} from "redux-form";
import AddressFieldContainer from "../../Elements/AddressFieldContainer";
import FileFieldContainer from "../../Elements/FileFieldContainer";
import DateFieldContainer from "../../Elements/DateFieldContainer";

const AddCarForm = ({state, setNewCarData,}) => {
    return (
        <>
            <AddCarReduxForm state={state} onChange={setNewCarData}/>
            <AddCarCertificateReduxForm state={state} onChange={setNewCarData}/>
        </>
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

const AddCarCertificateForm = ({state, handleChange}) => {
    return (
        <form onChange={handleChange} className="registration__car-certificate car-certificate form-block">
            <h3 className="form-block__heading">Свидетельство о регистрации ТС</h3>
            <div className="form-block__fields">
                <div className="form-block__fields-line car-certificate__fields-line">
                    <label className="form-block__field input-wrap">
                        <Field component="input" className="input-wrap__input" name="certificate_national_number" value={state.certificate_national_number} type="text" placeholder="Регистрационный государственный номер"/>
                    </label>
                    <label className="form-block__field input-wrap">
                        <Field component="input" className="input-wrap__input" name="certificate_vin" value={state.certificate_vin} type="text" placeholder="Индетефикационный номер VIN"/>
                    </label>
                    <label className="form-block__field input-wrap">
                        <Field component="input" className="input-wrap__input" name="certificate_brand" value={state.certificate_brand} type="text" placeholder="Марка транспортного средства"/>
                    </label>
                    <label className="form-block__field input-wrap">
                        <Field component="input" className="input-wrap__input" name="certificate_model" value={state.certificate_model} type="text" placeholder="Модель транспортного средства"/>
                    </label>
                </div>
                <div className="form-block__fields-line car-certificate__fields-line">
                    <label className="form-block__field input-wrap">
                        <Field component="input" className="input-wrap__input" name="certificate_car_type" value={state.certificate_car_type} type="text" placeholder="Тип транспортного средства"/>
                    </label>
                    <label className="form-block__field input-wrap">
                        <Field component="input" className="input-wrap__input" name="certificate_car_category" value={state.certificate_car_category} type="text" placeholder="Категория транспортного средства"/>
                    </label>
                    <label className="form-block__field input-wrap input-wrap--date">
                        <Field component={DateFieldContainer} name="certificate_car_issue_date" value={state.certificate_car_issue_date} type="text" placeholder="Год выпуска"/>
                    </label>
                    <label className="form-block__field input-wrap">
                        <Field component="input" className="input-wrap__input" name="certificate_ecology_class" value={state.certificate_ecology_class} type="text" placeholder="Экологический класс"/>
                    </label>
                </div>
                <div className="form-block__fields-line car-certificate__six-line">
                    <label className="form-block__field input-wrap">
                        <Field component="input" className="input-wrap__input" name="certificate_ptc_series" value={state.certificate_ptc_series} type="text" placeholder="Серия ПТС"/>
                    </label>
                    <label className="form-block__field input-wrap">
                        <Field component="input" className="input-wrap__input" name="certificate_ptc_number" value={state.certificate_ptc_number} type="text" placeholder="Номер ПТС"/>
                    </label>
                    <label className="form-block__field input-wrap">
                        <Field component="input" className="input-wrap__input" name="certificate_ctc_series" value={state.certificate_ctc_series} type="text" placeholder="Серия СТС"/>
                    </label>
                    <label className="form-block__field input-wrap">
                        <Field component="input" className="input-wrap__input" name="certificate_ctc_number" value={state.certificate_ctc_number} type="text" placeholder="Номер СТС"/>
                    </label>
                    <label className="form-block__field input-wrap input-wrap--file">
                        {state.certificate_photo_1 ? state.certificate_photo_1.name : 'Фото 1'}
                        <Field component={FileFieldContainer} name="certificate_photo_1"/>
                    </label>
                    <label className="form-block__field input-wrap input-wrap--file">
                        {state.certificate_photo_2 ? state.certificate_photo_2.name : 'Фото 2'}
                        <Field component={FileFieldContainer} name="certificate_photo_2"/>
                    </label>
                </div>
            </div>
        </form>
    );
}

const AddCarReduxForm = reduxForm({form: 'car-data'})(AddCar);
const AddCarCertificateReduxForm = reduxForm({form: 'car-certificate-data'})(AddCarCertificateForm);

export default AddCarForm;