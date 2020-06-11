import React from 'react';
import Dop from "./Dop";
import {connect} from "react-redux";
import {dopToggle} from "../../redux/dopReducer";

class DopContainer extends React.Component {

    toggle = (e) => {
        e.stopPropagation();
        this.props.dopToggle();
    }

    render() {
        return (
            <Dop active={this.props.active}
                 toggle={this.toggle}
                additionalRequirements={this.props.additional_requirements}/>
        );
    };
}

let mapStateToProps = (state) => ({
    active: state.dopReducer.active,
    additional_requirements: state.dopReducer.additional_requirements
});

export default connect(mapStateToProps, {dopToggle})(DopContainer);