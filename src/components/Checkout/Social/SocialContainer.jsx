import React from 'react';
import Social from "./Social";
import {connect} from "react-redux";

class SocialContainer extends React.Component {
    render() {
        return (
            <Social selectedPayment={this.props.selected_payment}/>
        );
    };
}

let mapStateToProps = (state) => ({
    selected_payment: state.paymentReducer.selected_payment
});

export default connect(mapStateToProps)(SocialContainer);