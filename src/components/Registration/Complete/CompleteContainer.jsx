import React from 'react';
import {connect} from "react-redux";
import Complete from "./Complete";
import {setAgreeTerms} from "../../../redux/registration/completeReducer";

class CompleteContainer extends React.Component {
    render() {
        return (
            <Complete state={this.props.state}
                      setAgreeTerms={this.props.setAgreeTerms}/>
        );
    };
}

let mapStateToProps = (state) => ({
    state: state.completeReducer
});

export default connect(mapStateToProps, {setAgreeTerms})(CompleteContainer);