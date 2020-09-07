import React from 'react';
import {token} from "../../api/dadata-api";
import {AddressSuggestions} from "react-dadata";
import {Field} from "redux-form";

class AddressField extends React.Component {
    render() {
        return (
            <Field name={this.props.name}
                   className={this.props.className}
                   count={this.props.count}
                   placeholder={this.props.placeholder}
                   initialValue={this.props.initialValue}
                   validate={this.props.validate}
                   component={RenderComponent}>{this.props.children}</Field>
        )
    }
}

class RenderComponent extends React.Component {
    state = {
        touched: false
    }

    componentDidMount() {
        this.addressRef.setInputValue(this.props.initialValue);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.input.value !== this.props.input.value) {
            this.addressRef.setInputValue(this.props.input.value.string);
        }
    }

    onBlur = e => {
        if (!this.state.touched) this.setState({touched: true});
    }

    addressRenderOption = (value) => {
        if (value.data.street) {
            return (
                <span>{value.value}</span>
            )
        }
    }

    render() {
        return <AddressSuggestions
            ref={ref => this.addressRef = ref}
            token={token}
            onChange={value => this.props.input.onChange({
                region_type: value.data.region_type,
                region: value.data.region,
                street_type: value.data.street_type,
                street: value.data.street,
                house: value.data.house,
                longitude: value.data.geo_lon,
                latitude: value.data.geo_lat,
                string: value.value
            })}
            containerClassName={this.props.className + ' input-wrap input-wrap_address' + (this.state.touched || this.props.meta.touched ? ((this.props.meta.error ? ' input-wrap--error' : '') || (this.props.meta.warning ? ' input-wrap--warning' : '')) : '')}
            renderOption={this.addressRenderOption}
            filterLocations={[{region: 'Москва'}, {region: 'Московская'}]}
            count={this.props.count}
            inputProps={{className: 'input-wrap__input', placeholder: this.props.placeholder, onBlur: this.onBlur, name: this.props.input.name}}>
            {this.props.children}
        </AddressSuggestions>
    }
}

export default AddressField;