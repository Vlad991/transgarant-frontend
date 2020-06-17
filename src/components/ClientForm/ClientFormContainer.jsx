import React from 'react';
import ClientForm from "./ClientForm";
import {connect} from "react-redux";
import {setEmail, setName, setNumber} from "../../redux/clientFormReducer";

class ClientFormContainer extends React.Component {

    setName = (value) => {
        this.props.setName(value);
    }

    setNumber = (value) => {
        this.props.setNumber(value);
    }

    setEmail = (value) => {
        this.props.setEmail(value);
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
                        setEmail={this.setEmail}/>
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
});

export default connect(mapStateToProps, {setName, setNumber, setEmail})(ClientFormContainer);