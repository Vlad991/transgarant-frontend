import React from 'react';
import {connect} from "react-redux";
import AddDriver from "./AddDriver";
import {addNewDriver, submitDriverForms, toggleShowForm, toggleUpdateDriver, updateDriver} from "../../../redux/registration/driversReducer";

class AddDriverContainer extends React.Component {

    updateDriver = async () => {
        await this.props.submitDriverForms();
        this.props.updateDriver();
    }

    addNewDriver = async () => {
        await this.props.submitDriverForms();
        this.props.addNewDriver();
    }

    render() {
        return (
            <AddDriver state={this.props.state}
                       toggleShowForm={this.props.toggleShowForm}
                       addNewDriver={this.addNewDriver}
                       toggleUpdateDriver={this.props.toggleUpdateDriver}
                       updateDriver={this.updateDriver}/>
        );
    };
}

let mapStateToProps = (state) => ({
    state: state.driversReducer
});

export default connect(mapStateToProps, {toggleShowForm, addNewDriver, toggleUpdateDriver, updateDriver, submitDriverForms})(AddDriverContainer);