import React from 'react';
import {token} from "../../api/dadata-api";
import {AddressSuggestions} from "react-dadata";

class FileFieldContainer extends React.Component {
    addFile = (e) => {
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        let data;
        reader.onload = e => {
            data = e.target.result;
            file.data = data;
            this.props.input.onChange(file);
        }
    }

    render() {
        return (
            <input onChange={(e) => this.addFile(e)} name={this.props.input.name} type="file" className="input-wrap__input"/>
        )
    }
}

export default FileFieldContainer;