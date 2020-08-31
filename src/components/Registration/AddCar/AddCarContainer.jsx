import React from 'react';
import {connect} from "react-redux";
import AddCar from "./AddCar";
import {addNewCar, submitCarForms, toggleShowForm, toggleUpdateCar, updateCar} from "../../../redux/registration/carsReducer";

class AddCarContainer extends React.Component {

    updateCar = async () => {
        await this.props.submitCarForms();
        this.props.updateCar();
    }

    addNewCar = async () => {
        await this.props.submitCarForms();
        this.props.addNewCar();
    }

    render() {
        return (
            <AddCar state={this.props.state}
                    toggleShowForm={this.props.toggleShowForm}
                    addNewCar={this.addNewCar}
                    toggleUpdateCar={this.props.toggleUpdateCar}
                    updateCar={this.updateCar}/>
        );
    };
}

let mapStateToProps = (state) => ({
    state: state.carsReducer
});

export default connect(mapStateToProps, {toggleShowForm, addNewCar, toggleUpdateCar, updateCar, submitCarForms})(AddCarContainer);