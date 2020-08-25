import React from 'react';
import {connect} from "react-redux";
import Number from "./Number";

class NumberContainer extends React.Component {
    render() {
        return (
            <Number/>
        );
    };
}

let mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(NumberContainer);