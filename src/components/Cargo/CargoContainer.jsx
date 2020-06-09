import React from 'react';
import Cargo from "./Cargo";

class CargoContainer extends React.Component {
    state = {}

    componentDidMount() {
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
    };

    render() {
        return (
            <Cargo state={this.props.state}/>
        );
    };
}

export default CargoContainer;