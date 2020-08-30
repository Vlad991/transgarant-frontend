import React from 'react';
import {token} from "../../api/dadata-api";
import {AddressSuggestions} from "react-dadata";
import {Field} from "redux-form";
import InputMask from "react-input-mask";

class PhoneField extends React.Component {

    renderInput = (inputProps) => <input {...inputProps} className="input-wrap__input" placeholder={this.props.placeholder} type="text"/>

    renderInputMask = ({input, meta}) => {
        return (
            <InputMask mask="+7 (999) 999 99 99" value={input.value} onChange={e => input.onChange(e.target.value)}>
                {(inputProps) => this.renderInput(inputProps)}
            </InputMask>
        )
    }

    render() {
        return (
            <label className={this.props.className + " input-wrap"}>
                <Field name={this.props.name} component={this.renderInputMask}/>
            </label>
        )
    }
}

export default PhoneField;