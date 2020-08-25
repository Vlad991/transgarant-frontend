import React from 'react';
import {connect} from "react-redux";

class AlertContainer extends React.Component {
    render() {
        return (
            <div className="checkout__error" style={{
                zIndex: 1001 + (20 - this.props.index)
            }}>{this.props.text}</div>
        );
    };
}

let mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(AlertContainer);