import React from 'react';
import {connect} from "react-redux";
import DriverLicense from "./DriverLicense";

class DriverLicenseContainer extends React.Component {
    render() {
        return (
            <DriverLicense state={this.props.state}/>
        );
    };
}

let mapStateToProps = (state) => ({
    state: state.driverLicenseReducer
});

export default connect(mapStateToProps, {})(DriverLicenseContainer);