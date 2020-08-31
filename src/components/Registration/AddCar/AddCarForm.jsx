import React from 'react';
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";
import {compose} from "redux";
import SelectContainer from "../../Elements/SelectContainer";
import FileField from "../../Elements/FileField";
import AddressFieldContainer from "../../Elements/AddressFieldContainer";
import {setNewCarData} from "../../../redux/registration/carsReducer";

const AddCarForm = ({state, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit} className="registration__car-form car-form form-block">
            <h3 className="form-block__heading">ДОБавить машину</h3>
            <div className="form-block__fields">
                <div className="form-block__fields-line car-form__fields-line">
                    <Field name="selected_capacity_id" component={({input, meta}) =>
                        <SelectContainer placeholder="Грузоподьемность" name={input.name} elementClass="form-block__field car-form__select" selected={state.capacity_types.find(item => item.id === input.value)} items={state.capacity_types} setItem={input.onChange}/>}/>
                    <Field name="selected_body_type_id" component={({input, meta}) =>
                        <SelectContainer placeholder="Вид кузова" name={input.name} elementClass="form-block__field car-form__select" selected={state.body_types.find(item => item.id === input.value)} items={state.body_types} setItem={input.onChange}/>}/>
                </div>
                <div className="form-block__fields-line car-form__fields-line">
                    <Field name="selected_pass_type_id" component={({input, meta}) =>
                        <SelectContainer placeholder="Пропуск" name={input.name} elementClass="form-block__field car-form__select" selected={state.pass_types.find(item => item.id === input.value)} items={state.pass_types} setItem={input.onChange}/>}/>
                    <Field name="selected_gidrobort_id" component={({input, meta}) =>
                        <SelectContainer placeholder="Гидроборт" name={input.name} elementClass="form-block__field car-form__select" selected={state.gidrobort_types.find(item => item.id === input.value)} items={state.gidrobort_types} setItem={input.onChange}/>}/>
                    <Field name="selected_ramp_id" component={({input, meta}) =>
                        <SelectContainer placeholder="Под пандус" name={input.name} elementClass="form-block__field car-form__select" selected={state.ramp_types.find(item => item.id === input.value)} items={state.ramp_types} setItem={input.onChange}/>}/>
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
                    <Field component={AddressFieldContainer} name="garage_address" initialValue={state.garage_address.string} placeholder="Место гаража" count={5} elementClass="form-block__field input-wrap input-wrap_address"/>
                </div>
                <div className="form-block__fields-line car-form__fields-line">
                    <FileField className="form-block__field" name="photo_inside" placeholder="Фото кузова внутри"/>
                    <FileField className="form-block__field" name="photo_in_front" placeholder="Фото ТС перед"/>
                    <FileField className="form-block__field" name="photo_side" placeholder="Фото машины бок"/>
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
    }
});

export default compose(
    connect(mapStateToProps, {onSubmit: setNewCarData}),
    reduxForm({form: 'car-data', enableReinitialize: true}))(AddCarForm);