import React from 'react';
import {Field} from "redux-form";

class FileField extends React.Component {
    addFile = (e, input) => {
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        let data;
        reader.onload = e => {
            data = e.target.result;
            file.data = data;
            input.onChange(file);
        }
    }

    renderComponent = ({input, meta: {touched, error, warning}}) => {
        return <label className={this.props.className + " input-wrap input-wrap--file" + (touched ? ((error ? ' input-wrap--error' : '') || (warning ? ' input-wrap--warning' : '')) : '')}>
            {input.value ? input.value.name : this.props.placeholder}
            <input onChange={(e) => this.addFile(e, input)} name={input.name} type="file" className="input-wrap__input"/>
        </label>
    }

    render() {
        return (
            <Field name={this.props.name} validate={this.props.validate} component={this.renderComponent}/>
        )
    }
}

export default FileField;