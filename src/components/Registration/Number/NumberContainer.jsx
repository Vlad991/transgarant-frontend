import React from 'react';
import {connect} from "react-redux";
import Number from "./Number";
import {setPhoneNumber, setPhoneNumberThunk} from "../../../redux/registration/numberReducer";

class NumberContainer extends React.Component {
    render() {
        return (
            <Number state={this.props.state} setPhoneNumber={this.props.setPhoneNumber}/>
        );
    };
}

let mapStateToProps = (state) => ({
    state: state.numberReducer
});

export default connect(mapStateToProps, {setPhoneNumber, setPhoneNumberThunk})(NumberContainer);