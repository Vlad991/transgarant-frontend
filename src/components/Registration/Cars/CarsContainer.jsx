import React from 'react';
import {connect} from "react-redux";
import Cars from "./Cars";
import {setNewCarData} from "../../../redux/registration/carsReducer";

class CarsContainer extends React.Component {
    render() {
        return (
            <Cars state={this.props.state} setNewCarData={this.props.setNewCarData}/>
        );
    };
}

let mapStateToProps = (state) => ({
    state: state.carsReducer
});

export default connect(mapStateToProps, {setNewCarData})(CarsContainer);