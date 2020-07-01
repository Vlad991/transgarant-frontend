import React from 'react';
import Payment from "./Payment";
import {connect} from "react-redux";
import {setCompany, setPayment} from "../../redux/paymentReducer";

class PaymentContainer extends React.Component {
    render() {
        return (
            <Payment selectedPayment={this.props.selected_payment}
                     payments={this.props.payments}
                     setPayment={this.props.setPayment}
                     company={this.props.company}
                     setCompany={this.props.setCompany}/>
        );
    };
}

let mapStateToProps = (state) => ({
    selected_payment: state.paymentReducer.selected_payment,
    payments: state.paymentReducer.payments,
    company: state.paymentReducer.company
});

export default connect(mapStateToProps, {setPayment, setCompany})(PaymentContainer);