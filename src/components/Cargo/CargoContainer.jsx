import React from 'react';
import Cargo from "./Cargo";
import {connect} from "react-redux";
import {setPalletTypesThunk} from "../../redux/cargoReducer";

class CargoContainer extends React.Component {
    state = {
        activeTab: 1
    }

    componentDidMount() {
        this.props.setPalletTypesThunk();
    }

    setActiveTab = (tabNumber) => {
        this.setState({
            activeTab: tabNumber
        })
    }

    render() {
        return (
            <Cargo activeTab={this.state.activeTab} setActiveTab={this.setActiveTab}
                   quantity={this.props.quantity}
                   length={this.props.length}
                   width={this.props.width}
                   height={this.props.height}
                   palletTypes={this.props.pallet_types}
            />
        );
    };
}

let mapStateToProps = (state) => ({
    cargo: state.cargoReducer.cargo,
    quantity: state.cargoReducer.quantity,
    length: state.cargoReducer.length,
    width: state.cargoReducer.width,
    height: state.cargoReducer.height,
    pallet_types: state.cargoReducer.pallet_types
});

export default connect(mapStateToProps, {setPalletTypesThunk})(CargoContainer);