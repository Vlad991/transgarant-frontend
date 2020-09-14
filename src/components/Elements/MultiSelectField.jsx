import React from 'react';
import {Field} from "redux-form";
import MultiSelectContainer from "./MultiSelectContainer";

class MultiSelectField extends React.Component {
    state = {
        touched: false
    }

    renderComponent = ({input, customTouched, meta: {touched, error, warning}}) => {
        return <MultiSelectContainer
            placeholder={this.props.placeholder}
            hidePlaceholder={this.props.hidePlaceholder}
            setTouched={() => this.setState({touched: true})}
            name={input.name}
            elementClass={"form-block__field car-form__select" + (customTouched || touched ? ((error ? ' select--error' : '') || (warning ? ' select--warning' : '')) : '')}
            items={input.value}
            addItem={value => input.onChange(value)}/>
    }

    render() {
        return (
            <Field name={this.props.name} validate={this.props.validate} customTouched={this.state.touched} component={this.renderComponent}/>
        );
    };
}

export default MultiSelectField;