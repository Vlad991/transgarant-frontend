import React from 'react';
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";
import {compose} from "redux";
import FileField from "../../Elements/FileField";
import AddressField from "../../Elements/AddressField";
import {submitCarForm} from "../../../redux/registration/carsReducer";
import {length17, length5, length6, maxLength9, minLength7, required, requiredAddress, requiredSelect} from "../../../func/validation";
import SelectField from "../../Elements/SelectField";
import TextField from "../../Elements/TextField";
import DateField from "../../Elements/DateField";
import {carPassportNumberMask, carPassportSeriesMask} from "../../../func/mask";

const AddCarForm = ({state, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit} className="registration__car-form-wrap">
            <div className="registration__car-form car-form form-block">
                <h3 className="form-block__heading">ДОБавить машину</h3>
                <div className="form-block__fields">
                    <div className="form-block__fields-line car-form__fields-line">
                        <SelectField name="selected_capacity_id" placeholder="Грузоподьемность" className="form-block__field car-form__select" items={state.capacity_types} validate={[requiredSelect]}/>
                        <SelectField name="selected_body_type_id" placeholder="Вид кузова" className="form-block__field car-form__select" items={state.body_types} validate={[requiredSelect]}/>
                    </div>
                    <div className="form-block__fields-line car-form__fields-line">
                        <SelectField name="selected_pass_type_id" placeholder="Пропуск" className="form-block__field car-form__select" items={state.pass_types} validate={[requiredSelect]}/>
                        <SelectField name="selected_gidrobort_id" placeholder="Гидроборт" className="form-block__field car-form__select" items={state.gidrobort_types} validate={[requiredSelect]}/>
                        <SelectField name="selected_ramp_id" placeholder="Под пандус" className="form-block__field car-form__select" items={state.ramp_types} validate={[requiredSelect]}/>
                    </div>
                    <div className="form-block__fields-line car-form__fields-line">
                        <div className="form-block__field car-form__check-wrap">
                            <div className="car-form__check-title">Согласны ли вы оказывать помощь в погрузке разгрузки</div>
                            <label className="car-form__check check-wrap">
                                Да
                                <Field component="input" name="agree_help" value={true} normalize={value => value == 'true'} type="radio" className="check-wrap__input"/>
                                <span className="check-wrap__mark"></span>
                            </label>
                            <label className="car-form__check check-wrap">
                                Нет
                                <Field component="input" name="agree_help" value={false} normalize={value => value == 'true'} type="radio" className="check-wrap__input"/>
                                <span className="check-wrap__mark"></span>
                            </label>
                        </div>
                        <div className="form-block__field car-form__check-wrap">
                            <div className="car-form__check-title">Водитель-грузчик(оплачиваеться)</div>
                            <label className="car-form__check check-wrap">
                                Да
                                <Field component="input" name="driver_loader" value={true} normalize={value => value == 'true'} type="radio" className="check-wrap__input"/>
                                <span className="check-wrap__mark"></span>
                            </label>
                            <label className="car-form__check check-wrap">
                                Нет
                                <Field component="input" name="driver_loader" value={false} normalize={value => value == 'true'} type="radio" className="check-wrap__input"/>
                                <span className="check-wrap__mark"></span>
                            </label>
                        </div>
                        <AddressField name="garage_address" initialValue={state.garage_address.string} placeholder="Место гаража" count={5} validate={[requiredAddress]} className="form-block__field"/>
                    </div>
                    <div className="form-block__fields-line car-form__fields-line">
                        <FileField className="form-block__field" name="photo_inside" placeholder="Фото кузова внутри" validate={[required]}/>
                        <FileField className="form-block__field" name="photo_in_front" placeholder="Фото ТС перед" validate={[required]}/>
                        <FileField className="form-block__field" name="photo_side" placeholder="Фото машины бок" validate={[required]}/>
                    </div>
                </div>
            </div>
            <div className="registration__car-certificate car-certificate form-block">
                <h3 className="form-block__heading">Свидетельство о регистрации ТС</h3>
                <div className="form-block__fields">
                    <div className="form-block__fields-line car-certificate__fields-line">
                        <TextField className="form-block__field" name="certificate_national_number" placeholder="Регистрационный государственный номер" validate={[required, minLength7, maxLength9]}/>
                        <TextField className="form-block__field" name="certificate_vin" placeholder="Индетефикационный номер VIN" validate={[required, length17]}/>
                        <TextField className="form-block__field" name="certificate_brand" placeholder="Марка транспортного средства" validate={[required]}/>
                        <TextField className="form-block__field" name="certificate_model" placeholder="Модель транспортного средства" validate={[required]}/>
                    </div>
                    <div className="form-block__fields-line car-certificate__fields-line">
                        <TextField className="form-block__field" name="certificate_car_type" placeholder="Тип транспортного средства" validate={[required]}/>
                        <TextField className="form-block__field" name="certificate_car_category" placeholder="Категория транспортного средства" validate={[required]}/>
                        <DateField className="form-block__field" name="certificate_car_issue_date" placeholder="Год выпуска" validate={[required]}/>
                        <TextField className="form-block__field" name="certificate_ecology_class" placeholder="Экологический класс" validate={[required]}/>
                    </div>
                    <div className="form-block__fields-line car-certificate__six-line">
                        <TextField className="form-block__field" name="certificate_ptc_series" normalize={carPassportNumberMask} placeholder="Серия ПТС" validate={[required, length5]}/>
                        <TextField className="form-block__field" name="certificate_ptc_number" normalize={carPassportSeriesMask} placeholder="Номер ПТС" validate={[required, length6]}/>
                        <TextField className="form-block__field" name="certificate_ctc_series" normalize={carPassportNumberMask} placeholder="Серия СТС" validate={[required, length5]}/>
                        <TextField className="form-block__field" name="certificate_ctc_number" normalize={carPassportSeriesMask} placeholder="Номер СТС" validate={[required, length6]}/>
                        <FileField className="form-block__field" name="certificate_photo_1" placeholder="Фото 1" validate={[required]}/>
                        <FileField className="form-block__field" name="certificate_photo_2" placeholder="Фото 2" validate={[required]}/>
                    </div>
                </div>
            </div>
        </form>
    );
}

let mapStateToProps = (state) => ({
    state: {
        capacity_types: state.carsReducer.capacity_types,
        body_types: state.carsReducer.body_types,
        pass_types: state.carsReducer.pass_types,
        gidrobort_types: state.carsReducer.gidrobort_types,
        ramp_types: state.carsReducer.ramp_types,
        garage_address: state.carsReducer.garage_address,
    },
    initialValues: {
        // Car
        selected_capacity_id: state.carsReducer.selected_capacity_id,
        selected_body_type_id: state.carsReducer.selected_body_type_id,

        selected_pass_type_id: state.carsReducer.selected_pass_type_id,
        selected_gidrobort_id: state.carsReducer.selected_gidrobort_id,
        selected_ramp_id: state.carsReducer.selected_ramp_id,

        agree_help: state.carsReducer.agree_help,
        driver_loader: state.carsReducer.driver_loader,
        garage_address: state.carsReducer.garage_address,

        photo_inside: state.carsReducer.photo_inside,
        photo_in_front: state.carsReducer.photo_in_front,
        photo_side: state.carsReducer.photo_side,

        // Car Certificate
        certificate_national_number: state.carsReducer.certificate_national_number,
        certificate_vin: state.carsReducer.certificate_vin,
        certificate_brand: state.carsReducer.certificate_brand,
        certificate_model: state.carsReducer.certificate_model,

        certificate_car_type: state.carsReducer.certificate_car_type,
        certificate_car_category: state.carsReducer.certificate_car_category,
        certificate_car_issue_date: state.carsReducer.certificate_car_issue_date,
        certificate_ecology_class: state.carsReducer.certificate_ecology_class,

        certificate_ptc_series: state.carsReducer.certificate_ptc_series,
        certificate_ptc_number: state.carsReducer.certificate_ptc_number,
        certificate_ctc_series: state.carsReducer.certificate_ctc_series,
        certificate_ctc_number: state.carsReducer.certificate_ctc_number,
        certificate_photo_1: state.carsReducer.certificate_photo_1,
        certificate_photo_2: state.carsReducer.certificate_photo_2,
    }
});

export default compose(
    connect(mapStateToProps, {onSubmit: submitCarForm}),
    reduxForm({form: 'car-data', enableReinitialize: false}))(AddCarForm);