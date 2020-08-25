import React from 'react';
import {connect} from "react-redux";

class Registration extends React.Component {
    render() {
        return (
            <div className="registration">
                <h1 className="registration__heading">Регистрация водителя</h1>
            </div>
        );
    };
}

let mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Registration);