import React from 'react';
import DocReturn from "./DocReturn";
import {connect} from "react-redux";
import {toggleReturn, setName, setData} from "../../redux/docReturnReducer";

class DocReturnContainer extends React.Component {

    toggleReturn = (e) => {
        e.preventDefault();
        this.props.toggleReturn();
    }

    setName = (id) => {
        this.props.setName(id);
    }

    setData = (object) => {
        this.props.setData(object);
    }

    render() {
        return (
            <DocReturn show={this.props.show}
                       toggleReturn={this.toggleReturn}
                       names={this.props.names}
                       address={this.props.address}
                       fullName={this.props.fullName}
                       phone={this.props.phone}
                       setName={this.setName}
                       setData={this.setData}/>
        );
    };
}

let mapStateToProps = (state) => ({
    show: state.docReturnReducer.show,
    names: state.docReturnReducer.names,
    address: state.docReturnReducer.address,
    address_longitude: state.docReturnReducer.address_longitude,
    address_latitude: state.docReturnReducer.address_latitude,
    fullName: state.docReturnReducer.fullName,
    phone: state.docReturnReducer.phone,
});

export default connect(mapStateToProps, {toggleReturn, setName, setData})(DocReturnContainer);