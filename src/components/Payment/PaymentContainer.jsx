import React from 'react';
import Payment from "./Payment";

class PaymentContainer extends React.Component {
    state = {}

    componentDidMount() {
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
    };

    render() {
        return (
            <Payment state={this.props.state}/>
        );
    };
}

export default PaymentContainer;