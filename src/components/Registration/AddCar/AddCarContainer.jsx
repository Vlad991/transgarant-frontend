import React from 'react';
import {connect} from "react-redux";
import AddCar from "./AddCar";

class AddCarContainer extends React.Component {
    render() {
        return (
            <AddCar state={this.props.state}/>
        );
    };
}

let mapStateToProps = (state) => ({
    state: state.carsReducer
});

export default connect(mapStateToProps, {})(AddCarContainer);