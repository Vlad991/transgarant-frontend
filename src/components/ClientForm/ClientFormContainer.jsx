import React from 'react';
import ClientForm from "./ClientForm";

class ClientFormContainer extends React.Component {
    state = {}

    componentDidMount() {
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
    };

    render() {
        return (
            <ClientForm state={this.props.state}/>
        );
    };
}

export default ClientFormContainer;