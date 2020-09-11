import React from 'react';
import {connect} from "react-redux";
import Number from "./Number";
import {sendSmsThunk, setAgreeTerms, setPhoneNumber, setRecaptcha, setSmsCodeThunk} from "../../../redux/registration/numberReducer";

class NumberContainer extends React.Component {
    render() {
        return (
            <Number state={this.props.state}
                    setPhoneNumber={this.props.setPhoneNumber}
                    setRecaptcha={this.props.setRecaptcha}
                    sendSms={this.props.sendSmsThunk}
                    setSmsCode={this.props.setSmsCodeThunk}
                    setAgreeTerms={this.props.setAgreeTerms}/>
        );
    };
}

let mapStateToProps = (state) => ({
    state: state.numberReducer
});

export default connect(mapStateToProps, {setPhoneNumber, setRecaptcha, sendSmsThunk, setSmsCodeThunk, setAgreeTerms})(NumberContainer);