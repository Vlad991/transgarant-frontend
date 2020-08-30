import React from 'react';
import {token} from "../../api/dadata-api";
import {AddressSuggestions} from "react-dadata";
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

    render() {
        return (
            <label className={this.props.className + " input-wrap input-wrap--file"}>
                <Field name={this.props.name} component={({input, meta}) =>
                    <>
                        {input.value ? input.value.name : this.props.placeholder}
                        <input onChange={(e) => this.addFile(e, input)} name={input.name} type="file" className="input-wrap__input"/>
                    </>}/>
            </label>
        )
    }
}

export default FileField;