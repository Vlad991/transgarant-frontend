import React from 'react';
import ClientForm from "./ClientForm";
import {connect} from "react-redux";
import {doOrderThunk, setEmail, setName, setNumberThunk, setRecaptchaThunk} from "../../redux/clientFormReducer";

class ClientFormContainer extends React.Component {

    setName = (value) => {
        this.props.setName(value);
    }

    setNumber = (value) => {
        console.log(value);
        this.props.setNumberThunk(value);
    }

    setEmail = (value) => {
        this.props.setEmail(value);
    }

    doOrder = () => {
        this.props.doOrderThunk();
    }

    render() {
        return (
            <ClientForm clientName={this.props.client_name}
                        nameError={this.props.name_error}
                        clientNumber={this.props.client_number}
                        numberError={this.props.number_error}
                        clientEmail={this.props.client_email}
                        emailError={this.props.email_error}
                        setNumber={this.setNumber}
                        setName={this.setName}
                        setEmail={this.setEmail}
                        doOrder={this.doOrder}
                        orderIsProcessed={this.props.orderIsProcessed}
                        orderId={this.props.orderId}
                        numberIsEntered={this.props.number_is_entered}
                        recaptchaIsEntered={this.props.recaptcha_is_entered}
                        setRecaptcha={this.props.setRecaptchaThunk}/>
        );
    };
}

let mapStateToProps = (state) => ({
    client_name: state.clientFormReducer.client_name,
    name_error: state.clientFormReducer.name_error,
    client_number: state.clientFormReducer.client_number,
    number_error: state.clientFormReducer.number_error,
    client_email: state.clientFormReducer.client_email,
    email_error: state.clientFormReducer.email_error,
    orderIsProcessed: state.clientFormReducer.orderIsProcessed,
    orderId: state.clientFormReducer.orderId,
    number_is_entered: state.clientFormReducer.number_is_entered,
    recaptcha_is_entered: state.clientFormReducer.recaptcha_is_entered
});

export default connect(mapStateToProps, {setName, setNumberThunk, setEmail, doOrderThunk, setRecaptchaThunk})(ClientFormContainer);