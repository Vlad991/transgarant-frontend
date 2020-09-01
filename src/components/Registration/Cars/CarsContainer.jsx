import React from 'react';
import {connect} from "react-redux";
import Cars from "./Cars";
import {deleteCar, toggleUpdateCar} from "../../../redux/registration/carsReducer";

class CarsContainer extends React.Component {

    deleteCar = (e, index) => {
        e.stopPropagation();
        this.props.deleteCar(index);
    }

    render() {
        return (
            <Cars state={this.props.state}
                  toggleUpdateCar={this.props.toggleUpdateCar}
                  deleteCar={this.deleteCar}/>
        );
    };
}

let mapStateToProps = (state) => ({
    state: state.carsReducer
});

export default connect(mapStateToProps, {toggleUpdateCar, deleteCar})(CarsContainer);