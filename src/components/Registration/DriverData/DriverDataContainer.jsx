import React from 'react';
import {connect} from "react-redux";
import DriverData from "./DriverData";

class DriverDataContainer extends React.Component {
    render() {
        return (
            <DriverData title={this.props.title} state={this.props.state}/>
        );
    };
}

let mapStateToProps = (state) => ({
    state: state.driverDataReducer
});

export default connect(mapStateToProps, {})(DriverDataContainer);