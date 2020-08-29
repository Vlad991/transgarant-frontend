import React from 'react';
import {connect} from "react-redux";
import DriverLicense from "./DriverLicense";
import {setDriverLicenseData} from "../../../redux/registration/driverLicenseReducer";

class DriverLicenseContainer extends React.Component {
    render() {
        return (
            <DriverLicense state={this.props.state}
                           setDriverLicenseData={this.props.setDriverLicenseData}/>
        );
    };
}

let mapStateToProps = (state) => ({
    state: state.driverLicenseReducer
});

export default connect(mapStateToProps, {setDriverLicenseData})(DriverLicenseContainer);