import React from 'react';
import ClientForm from "./ClientForm";
import {connect} from "react-redux";
import {doOrderThunk, sendCodeThunk, setCodeThunk, setEmail, setName, setNumberThunk, setRecaptchaThunk} from "../../redux/clientFormReducer";

class ClientFormContainer extends React.Component {
    render() {
        return (
            <ClientForm state={this.props.state}
                        setName={this.props.setName}
                        setNumber={this.props.setNumberThunk}
                        setEmail={this.props.setEmail}
                        doOrder={this.props.doOrderThunk}
                        setRecaptcha={this.props.setRecaptchaThunk}
                        sendCode={this.props.sendCodeThunk}
                        setCode={this.props.setCodeThunk}/>
        );
    };
}

let mapStateToProps = (state) => ({
    state: state.clientFormReducer
});

export default connect(mapStateToProps, {setName, setNumberThunk, setEmail, doOrderThunk, setRecaptchaThunk, sendCodeThunk, setCodeThunk})(ClientFormContainer);