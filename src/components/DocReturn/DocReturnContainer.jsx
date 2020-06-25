import React from 'react';
import DocReturn from "./DocReturn";
import {connect} from "react-redux";
import {toggleReturn, setName} from "../../redux/docReturnReducer";

class DocReturnContainer extends React.Component {

    toggleReturn = (e) => {
        e.preventDefault();
        this.props.toggleReturn();
    }

    setName = (id) => {
        this.props.setName(id);
    }

    render() {
        return (
            <DocReturn show={this.props.show}
                       toggleReturn={this.toggleReturn}
                       names={this.props.names}
                       setName={this.setName}/>
        );
    };
}

let mapStateToProps = (state) => ({
    show: state.docReturnReducer.show,
    names: state.docReturnReducer.names
});

export default connect(mapStateToProps, {toggleReturn, setName})(DocReturnContainer);