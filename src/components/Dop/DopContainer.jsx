import React from 'react';
import Dop from "./Dop";
import {connect} from "react-redux";
import {dopToggle, setDopThunk, toggleAdditional} from "../../redux/dopReducer";

class DopContainer extends React.Component {
    componentDidMount() {
        this.props.setDopThunk();
    }

    toggle = (e) => {
        e.stopPropagation();
        this.props.dopToggle(!this.props.active);
    }

    toggleAdditional = (e, id) => {
        e.preventDefault();
        this.props.toggleAdditional(id);
    }

    render() {
        return (
            <Dop active={this.props.active}
                 toggle={this.toggle}
                 additionalRequirements={this.props.additional_requirements}
                 toggleAdditional={this.toggleAdditional}/>
        );
    };
}

let mapStateToProps = (state) => ({
    active: state.dopReducer.active,
    additional_requirements: state.dopReducer.additional_requirements
});

export default connect(mapStateToProps, {dopToggle, setDopThunk, toggleAdditional})(DopContainer);