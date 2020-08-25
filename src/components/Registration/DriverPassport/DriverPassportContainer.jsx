import React from 'react';
import {connect} from "react-redux";
import DriverPassport from "./DriverPassport";
import {setPassportData} from "../../../redux/registration/driverPassportReducer";

class DriverPassportContainer extends React.Component {
    render() {
        return (
            <DriverPassport state={this.props.state} setPassportData={this.props.setPassportData}/>
        );
    };
}

let mapStateToProps = (state) => ({
    state: state.individualEntrepreneurReducer
});

export default connect(mapStateToProps, {setPassportData})(DriverPassportContainer);