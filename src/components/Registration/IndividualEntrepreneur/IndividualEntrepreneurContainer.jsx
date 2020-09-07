import React from 'react';
import {connect} from "react-redux";
import IndividualEntrepreneur from "./IndividualEntrepreneur";

class IndividualEntrepreneurContainer extends React.Component {
    render() {
        return (
            <IndividualEntrepreneur state={this.props.state}/>
        );
    };
}

let mapStateToProps = (state) => ({
    state: state.individualEntrepreneurReducer
});

export default connect(mapStateToProps, {})(IndividualEntrepreneurContainer);