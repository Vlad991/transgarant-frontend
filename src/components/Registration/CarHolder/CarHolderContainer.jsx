import React from 'react';
import {connect} from "react-redux";
import CarHolder from "./CarHolder";
import {setHolderType} from "../../../redux/registration/carHolderReducer";

class CarHolderContainer extends React.Component {
    render() {
        return (
            <CarHolder state={this.props.state} setHolderType={this.props.setHolderType}/>
        );
    };
}

let mapStateToProps = (state) => ({
    state: state.carHolderReducer
});

export default connect(mapStateToProps, {setHolderType})(CarHolderContainer);