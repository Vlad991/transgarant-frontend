import React from 'react';
import {Field} from "redux-form";
import SelectContainer from "./SelectContainer";

class SelectField extends React.Component {
    state = {
        touched: false
    }

    renderComponent = ({input, customTouched, meta: {touched, error, warning}}) => {
        return <SelectContainer
            placeholder={this.props.placeholder}
            hidePlaceholder={this.props.hidePlaceholder}
            setTouched={() => this.setState({touched: true})}
            name={input.name}
            elementClass={"form-block__field car-form__select" + (customTouched || touched ? ((error ? ' select--error' : '') || (warning ? ' select--warning' : '')) : '')}
            selected={this.props.items.find(item => item.id === input.value)}
            items={this.props.items}
            setItem={input.onChange}/>
    }

    render() {
        return (
            <Field name={this.props.name} validate={this.props.validate} customTouched={this.state.touched} component={this.renderComponent}/>
        );
    };
}

export default SelectField;