import React from 'react';
import {connect} from "react-redux";
import AddCarForm from "./AddCarForm";
import {setNewCarData} from "../../../redux/registration/carsReducer";

class AddCarFormContainer extends React.Component {
    render() {
        return (
            <AddCarForm state={this.props.state} setNewCarData={this.props.setNewCarData}/>
        );
    };
}

let mapStateToProps = (state) => ({
    state: state.carsReducer
});

export default connect(mapStateToProps, {setNewCarData})(AddCarFormContainer);