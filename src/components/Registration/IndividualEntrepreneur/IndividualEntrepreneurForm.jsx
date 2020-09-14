import React from 'react';
import {connect} from "react-redux";
import TextField from "../../Elements/TextField";
import {reduxForm} from "redux-form";
import {compose} from "redux";
import {minLength3, required, requiredAddress} from "../../../func/validation";
import {setIEDetailsData} from "../../../redux/registration/individualEntrepreneurReducer";
import AddressField from "../../Elements/AddressField";

const IndividualEntrepreneurForm = ({state, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit} className="registration__indiv-entrep indiv-entrep form-block">
            <h3 className="form-block__heading">Вввод реквизитов ИП</h3>
            <div className="form-block__fields">
                <div className="form-block__fields-line">
                    <TextField className="form-block__field" name="bank_account" placeholder="Расчетный счет в банке" validate={[required, minLength3]}/>
                    <TextField className="form-block__field" name="bank_name" placeholder="Наименование банка" validate={[required, minLength3]}/>
                    <TextField className="form-block__field" name="bank_id" placeholder="БИК банка" validate={[required, minLength3]}/>
                    <TextField className="form-block__field" name="bank_corr_account" placeholder="Корр. счет банка" validate={[required, minLength3]}/>
                </div>
                <div className="form-block__fields-line">
                    <TextField className="form-block__field" name="bank_tax" placeholder="ИНН банка" validate={[required, minLength3]}/>
                    <TextField className="form-block__field" name="bank_registration_reason_code" placeholder="КПП банка" validate={[required, minLength3]}/>
                    <TextField className="form-block__field" name="bank_national_registration_number" placeholder="ОГРН банка" validate={[required, minLength3]}/>
                    <AddressField className="form-block__field" name="bank_law_address" placeholder="Юридический адрес банка" count={5} validate={[requiredAddress]}/>
                </div>
            </div>
        </form>
    );
}

let mapStateToProps = (state) => ({
    initialValues: {
        bank_account: state.individualEntrepreneurReducer.bank_account,
        bank_name: state.individualEntrepreneurReducer.bank_name,
        bank_id: state.individualEntrepreneurReducer.bank_id,
        bank_corr_account: state.individualEntrepreneurReducer.bank_corr_account,
        bank_tax: state.individualEntrepreneurReducer.bank_tax,
        bank_registration_reason_code: state.individualEntrepreneurReducer.bank_registration_reason_code,
        bank_national_registration_number: state.individualEntrepreneurReducer.bank_national_registration_number,
        bank_law_address: state.individualEntrepreneurReducer.bank_law_address,
    }
});

export default compose(
    connect(mapStateToProps, {onSubmit: setIEDetailsData}),
    reduxForm({form: 'individual-entrepreneur', enableReinitialize: false}))(IndividualEntrepreneurForm);