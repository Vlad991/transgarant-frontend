import React from 'react';
import {Field} from "redux-form";
import InputMask from "react-input-mask";
import {phoneNumber, required} from "../../func/validation";

class PhoneField extends React.Component {
    state = {
        touched: false
    }

    onChange = (e, input) => {
        input.onChange(e.target.value);
    }

    onBlur = (e) => {
        if (!this.state.touched) this.setState({touched: true});
    }

    renderComponent = ({input, customTouched, meta: {touched, error, warning}}) => {
        return (
            <label className={this.props.className + " input-wrap" + (customTouched || touched ? ((error ? ' input-wrap--error' : '') || (warning ? ' input-wrap--warning' : '')) : '')}>
                <InputMask mask="+7 (999) 999 99 99" value={input.value} onBlur={this.onBlur} onChange={e => this.onChange(e, input)}>
                    {(inputProps) => <input {...inputProps} name={input.name} className="input-wrap__input" placeholder={this.props.placeholder} type="text"/>}
                </InputMask>
                {this.props.isLast ? <button type="button" onClick={this.props.addPhone} className="input-wrap__add-phone">+</button> : null}
            </label>
        )
    }

    render() {
        return (
            <Field type="text" name={this.props.name} customTouched={this.state.touched} validate={[required, phoneNumber]} component={this.renderComponent}/>
        )
    }
}

export default PhoneField;