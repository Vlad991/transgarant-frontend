import React from 'react';
import {connect} from "react-redux";
import {reduxForm} from "redux-form";
import {compose} from "redux";
import FileField from "../../Elements/FileField";
import {setNewCarData} from "../../../redux/registration/carsReducer";
import DateField from "../../Elements/DateField";
import TextField from "../../Elements/TextField";

const CarCertificateForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit} className="registration__car-certificate car-certificate form-block">
            <h3 className="form-block__heading">Свидетельство о регистрации ТС</h3>
            <div className="form-block__fields">
                <div className="form-block__fields-line car-certificate__fields-line">
                    <TextField className="form-block__field" name="certificate_national_number" placeholder="Регистрационный государственный номер"/>
                    <TextField className="form-block__field" name="certificate_vin" placeholder="Индетефикационный номер VIN"/>
                    <TextField className="form-block__field" name="certificate_brand" placeholder="Марка транспортного средства"/>
                    <TextField className="form-block__field" name="certificate_model" placeholder="Модель транспортного средства"/>
                </div>
                <div className="form-block__fields-line car-certificate__fields-line">
                    <TextField className="form-block__field" name="certificate_car_type" placeholder="Тип транспортного средства"/>
                    <TextField className="form-block__field" name="certificate_car_category" placeholder="Категория транспортного средства"/>
                    <DateField className="form-block__field" name="certificate_car_issue_date" placeholder="Год выпуска"/>
                    <TextField className="form-block__field" name="certificate_ecology_class" placeholder="Экологический класс"/>
                </div>
                <div className="form-block__fields-line car-certificate__six-line">
                    <TextField className="form-block__field" name="certificate_ptc_series" placeholder="Серия ПТС"/>
                    <TextField className="form-block__field" name="certificate_ptc_number" placeholder="Номер ПТС"/>
                    <TextField className="form-block__field" name="certificate_ctc_series" placeholder="Серия СТС"/>
                    <TextField className="form-block__field" name="certificate_ctc_number" placeholder="Номер СТС"/>
                    <FileField className="form-block__field" name="certificate_photo_1" placeholder="Фото 1"/>
                    <FileField className="form-block__field" name="certificate_photo_2" placeholder="Фото 2"/>
                </div>
            </div>
        </form>
    );
}

let mapStateToProps = (state) => ({
    initialValues: {
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
    connect(mapStateToProps, {onSubmit: setNewCarData}),
    reduxForm({form: 'car-certificate', enableReinitialize: true}))(CarCertificateForm);