import React from 'react';
import ClientForm from "./ClientForm";
import {connect} from "react-redux";
import {doOrderThunk, sendCodeThunk, setAgree, setCodeThunk, setEmail, setName, setNumberThunk, setRecaptchaThunk} from "../../../redux/clientFormReducer";
import AlertContainer from "../Allert/AlertContainer";

class ClientFormContainer extends React.Component {
    render() {
        let hasNameError = this.props.error_mode && !this.props.state.client_name;
        let hasNumberError = this.props.error_mode && !this.props.state.client_number;
        let hasCodeError = this.props.error_mode && !this.props.state.code_is_verified;
        let hasEmailError = this.props.error_mode && !this.props.state.client_email;
        let hasAgreeError = this.props.error_mode && !this.props.state.agree;
        return (
            <>
                <ClientForm state={this.props.state}
                            setName={this.props.setName}
                            setNumber={this.props.setNumberThunk}
                            setEmail={this.props.setEmail}
                            doOrder={this.props.doOrderThunk}
                            setRecaptcha={this.props.setRecaptchaThunk}
                            sendCode={this.props.sendCodeThunk}
                            setCode={this.props.setCodeThunk}
                            setAgree={this.props.setAgree}
                            hasNameError={hasNameError}
                            hasNumberError={hasNumberError}
                            hasCodeError={hasCodeError}
                            hasEmailError={hasEmailError}
                            hasAgreeError={hasAgreeError}/>
                {hasNameError ? <AlertContainer index={4} text="Ошибка: не указаны ФИО"/> : null}
                {hasNumberError ? <AlertContainer index={5} text="Ошибка: не указан мобильный телефон"/> : null}
                {hasCodeError ? <AlertContainer index={6} text="Ошибка: мобильный телефон не верифицирован"/> : null}
                {hasEmailError ? <AlertContainer index={7} text="Ошибка: не указана почта"/> : null}
                {hasAgreeError ? <AlertContainer index={7} text="Ошибка: не подтверждено пользовательское соглашение"/> : null}
            </>
        );
    };
}

let mapStateToProps = (state) => ({
    state: state.clientFormReducer,
    error_mode: state.clientFormReducer.error_mode
});

export default connect(mapStateToProps, {setName, setNumberThunk, setEmail, doOrderThunk, setRecaptchaThunk, sendCodeThunk, setCodeThunk, setAgree})(ClientFormContainer);