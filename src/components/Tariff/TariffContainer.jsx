import React from 'react';
import Tariff from "./Tariff";

class TariffContainer extends React.Component {
    state = {}

    componentDidMount() {
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
    };

    render() {
        return (
            <Tariff state={this.props.state}/>
        );
    };
}

export default TariffContainer;