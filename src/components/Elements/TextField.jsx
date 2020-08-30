import React from 'react';
import {Field} from "redux-form";

class TextField extends React.Component {
    render() {
        return (
            <label className={this.props.className + " input-wrap"}>
                <Field component="input"
                       type="text"
                       className="input-wrap__input"
                       name={this.props.name}
                       placeholder={this.props.placeholder}/>
                {this.props.children}
            </label>
        )
    }
}

export default TextField;