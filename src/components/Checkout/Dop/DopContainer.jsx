import React from 'react';
import Dop from "./Dop";
import {connect} from "react-redux";
import {dopToggle, setDopThunk, toggleAdditional} from "../../../redux/dopReducer";

class DopContainer extends React.Component {
    componentDidMount() {
        this.props.setDopThunk();
    }

    toggle = (e) => {
        e.stopPropagation();
        this.props.dopToggle(!this.props.state.active);
    }

    toggleAdditional = (e, id) => {
        e.preventDefault();
        this.props.toggleAdditional(id);
    }

    render() {
        return (
            <Dop state={this.props.state}
                 toggle={this.toggle}
                 toggleAdditional={this.toggleAdditional}/>
        );
    };
}

let mapStateToProps = (state) => ({
    state: state.dopReducer
});

export default connect(mapStateToProps, {dopToggle, setDopThunk, toggleAdditional})(DopContainer);