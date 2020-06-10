import React from 'react';
import Cargo from "./Cargo";

class CargoContainer extends React.Component {
    state = {
        activeTab: 1,
        cargo: [],
        quantity: 1,
        length: 1.2,
        width: 0.8,
        height: 1,
    }

    setActiveTab = (tabNumber) => {
        this.setState({
            activeTab: tabNumber
        })
    }

    render() {
        return (
            <Cargo activeTab={this.state.activeTab} setActiveTab={this.setActiveTab}
                   quantity={this.state.quantity}
                   length={this.state.length}
                   width={this.state.width}
                   height={this.state.height}
            />
        );
    };
}

export default CargoContainer;