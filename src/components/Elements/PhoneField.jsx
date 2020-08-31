import React from 'react';
import {Field} from "redux-form";
import InputMask from "react-input-mask";

class PhoneField extends React.Component {
    render() {
        return (
            <label className={this.props.className + " input-wrap"}>
                <Field name={this.props.name} component={({input, meta}) => {
                    return (
                        <InputMask mask="+7 (999) 999 99 99" value={input.value} onChange={e => input.onChange(e.target.value)}>
                            {(inputProps) => <input {...inputProps} name={input.name} className="input-wrap__input" placeholder={this.props.placeholder} type="text"/>}
                        </InputMask>
                    )
                }}/>
                {this.props.isLast ? <button type="button" onClick={this.props.addPhone} className="input-wrap__add-phone">+</button> : null}
            </label>
        )
    }
}

export default PhoneField;