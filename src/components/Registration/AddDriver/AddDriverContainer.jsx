import React from 'react';
import {connect} from "react-redux";
import AddDriver from "./AddDriver";
import {submitDriverForms, toggleShowForm, toggleUpdateDriver} from "../../../redux/registration/driversReducer";

class AddDriverContainer extends React.Component {

    updateDriver = () => {
        this.props.submitDriverForms();
    }

    addNewDriver = () => {
        this.props.submitDriverForms();
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

export default connect(mapStateToProps, {toggleShowForm, toggleUpdateDriver, submitDriverForms})(AddDriverContainer);