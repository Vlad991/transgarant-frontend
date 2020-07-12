import React from 'react';
import Payment from "./Payment";
import {connect} from "react-redux";
import {setCompany, setPayment} from "../../redux/paymentReducer";

class PaymentContainer extends React.Component {
    render() {
        return (
            <Payment state={this.props.state}
                     setPayment={this.props.setPayment}
                     setCompany={this.props.setCompany}/>
        );
    };
}

let mapStateToProps = (state) => ({
    state: state.paymentReducer
});

export default connect(mapStateToProps, {setPayment, setCompany})(PaymentContainer);