import React from 'react';
import {connect} from "react-redux";
import DriverData from "./DriverData";
import {setDriverData} from "../../../redux/registration/driverDataReducer";

class DriverDataContainer extends React.Component {
    render() {
        return (
            <DriverData state={this.props.state} setDriverData={this.props.setDriverData}/>
        );
    };
}

let mapStateToProps = (state) => ({
    state: state.driverDataReducer
});

export default connect(mapStateToProps, {setDriverData})(DriverDataContainer);