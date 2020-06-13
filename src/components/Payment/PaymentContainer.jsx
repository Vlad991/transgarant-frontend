import React from 'react';
import Payment from "./Payment";
import {connect} from "react-redux";
import {setPayment} from "../../redux/paymentReducer";

class PaymentContainer extends React.Component {
    render() {
        return (
            <Payment selectedPayment={this.props.selected_payment}
                     setPayment={this.props.setPayment}/>
        );
    };
}

let mapStateToProps = (state) => ({
    selected_payment: state.paymentReducer.selected_payment
});

export default connect(mapStateToProps, {setPayment})(PaymentContainer);