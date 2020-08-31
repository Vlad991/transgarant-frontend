import React from 'react';
import {connect} from "react-redux";
import Drivers from "./Drivers";
import {setDriverCar, toggleUpdateDriver} from "../../../redux/registration/driversReducer";

class DriversContainer extends React.Component {
    render() {
        return (
            <Drivers state={this.props.state}
                     cars={this.props.cars}
                     toggleUpdateDriver={this.props.toggleUpdateDriver}
                     setDriverCar={this.props.setDriverCar}/>
        );
    };
}

let mapStateToProps = (state) => ({
    state: state.driversReducer,
    cars: state.carsReducer.cars
});

export default connect(mapStateToProps, {toggleUpdateDriver, setDriverCar})(DriversContainer);