import React from 'react';
import {connect} from "react-redux";
import IndividualEntrepreneur from "./IndividualEntrepreneur";
import {setIEDetailsData} from "../../../redux/registration/individualEntrepreneurReducer";

class IndividualEntrepreneurContainer extends React.Component {
    render() {
        return (
            <IndividualEntrepreneur state={this.props.state} setIEDetailsData={this.props.setIEDetailsData}/>
        );
    };
}

let mapStateToProps = (state) => ({
    state: state.individualEntrepreneurReducer
});

export default connect(mapStateToProps, {setIEDetailsData})(IndividualEntrepreneurContainer);