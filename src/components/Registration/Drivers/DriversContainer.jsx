import React from 'react';
import {connect} from "react-redux";
import Drivers from "./Drivers";
import {deleteDriver, setDriverCar, toggleUpdateDriver} from "../../../redux/registration/driversReducer";

class DriversContainer extends React.Component {

    deleteDriver = (e, index) => {
        e.stopPropagation();
        this.props.deleteDriver(index);
    }

    render() {
        return (
            <Drivers state={this.props.state}
                     cars={this.props.cars}
                     toggleUpdateDriver={this.props.toggleUpdateDriver}
                     setDriverCar={this.props.setDriverCar}
                     deleteDriver={this.deleteDriver}/>
        );
    };
}

let mapStateToProps = (state) => ({
    state: state.driversReducer,
    cars: state.carsReducer.cars
});

export default connect(mapStateToProps, {toggleUpdateDriver, setDriverCar, deleteDriver})(DriversContainer);