import React from 'react';
import DocReturn from "./DocReturn";
import {connect} from "react-redux";
import {toggleReturn, setName, setData, toggleNamesCollapse} from "../../../redux/docReturnReducer";

class DocReturnContainer extends React.Component {

    toggleReturn = (e) => {
        e.preventDefault();
        this.props.toggleReturn();
    }

    render() {
        return (
            <DocReturn state={this.props.state}
                       toggleReturn={this.toggleReturn}
                       toggleNames={this.props.toggleNamesCollapse}
                       setName={this.props.setName}
                       setData={this.props.setData}/>
        );
    };
}

let mapStateToProps = (state) => ({
    state: state.docReturnReducer
});

export default connect(mapStateToProps, {toggleReturn, setName, setData, toggleNamesCollapse})(DocReturnContainer);