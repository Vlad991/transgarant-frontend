import React from 'react';
import Payment from "./Payment";
import {connect} from "react-redux";
import {setCompany, setPayment} from "../../../redux/paymentReducer";
import AlertContainer from "../Allert/AlertContainer";

class PaymentContainer extends React.Component {
    render() {
        let hasError = this.props.error_mode && !this.props.state.selected_payment;
        return (
            <>
                <Payment state={this.props.state}
                         setPayment={this.props.setPayment}
                         setCompany={this.props.setCompany}
                         hasError={hasError}/>
                {hasError ? <AlertContainer index={3} text="Ошибка: не выбран способ оплаты"/> : null}
            </>
        );
    };
}

let mapStateToProps = (state) => ({
    state: state.paymentReducer,
    error_mode: state.clientFormReducer.error_mode
});

export default connect(mapStateToProps, {setPayment, setCompany})(PaymentContainer);