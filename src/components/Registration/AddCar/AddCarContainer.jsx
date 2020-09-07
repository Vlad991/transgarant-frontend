import React from 'react';
import {connect} from "react-redux";
import AddCar from "./AddCar";
import {submitCarForms, toggleShowForm} from "../../../redux/registration/carsReducer";

class AddCarContainer extends React.Component {

    updateCar = () => {
        this.props.submitCarForms();
    }

    addNewCar = () => {
        this.props.submitCarForms();
    }

    render() {
        return (
            <AddCar state={this.props.state}
                    toggleShowForm={this.props.toggleShowForm}
                    addNewCar={this.addNewCar}
                    updateCar={this.updateCar}/>
        );
    };
}

let mapStateToProps = (state) => ({
    state: state.carsReducer
});

export default connect(mapStateToProps, {toggleShowForm, submitCarForms})(AddCarContainer);