import React from 'react';
import {connect} from "react-redux";
import Cars from "./Cars";
import {setNewCarData, toggleUpdateCar} from "../../../redux/registration/carsReducer";

class CarsContainer extends React.Component {
    render() {
        return (
            <Cars state={this.props.state}
                  toggleUpdateCar={this.props.toggleUpdateCar}/>
        );
    };
}

let mapStateToProps = (state) => ({
    state: state.carsReducer
});

export default connect(mapStateToProps, {toggleUpdateCar})(CarsContainer);