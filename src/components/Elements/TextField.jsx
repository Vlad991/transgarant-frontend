import React from 'react';
import {Field} from "redux-form";

class TextField extends React.Component {

    renderComponent = ({input, meta: {touched, error, warning}}) =>
        <label className={this.props.className + " input-wrap" + (touched ? ((error ? ' input-wrap--error' : '') || (warning ? ' input-wrap--warning' : '')) : '')}>
            <input {...input} type="text" placeholder={this.props.placeholder} className="input-wrap__input"/>
            {this.props.children}
        </label>

    render() {
        return <Field type="text" name={this.props.name} validate={this.props.validate} normalize={this.props.normalize} component={this.renderComponent}/>
    }
}

export default TextField;