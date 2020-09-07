import React from 'react';
import {token} from "../../api/dadata-api";
import {AddressSuggestions} from "react-dadata";
import {Field} from "redux-form";

class AddressField extends React.Component {
    state = {
        touched: false
    }

    componentDidMount() {
        this.addressRef.setInputValue(this.props.initialValue ? this.props.initialValue : this.props.value);
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

    renderComponent = ({input, customTouched, meta: {touched, error, warning}}) => {
        return <AddressSuggestions
            ref={ref => this.addressRef = ref}
            token={token}
            onChange={value => input.onChange({
                region_type: value.data.region_type,
                region: value.data.region,
                street_type: value.data.street_type,
                street: value.data.street,
                house: value.data.house,
                longitude: value.data.geo_lon,
                latitude: value.data.geo_lat,
                string: value.value
            })}
            containerClassName={this.props.className + ' input-wrap input-wrap_address' + (customTouched || touched ? ((error ? ' input-wrap--error' : '') || (warning ? ' input-wrap--warning' : '')) : '')}
            renderOption={this.addressRenderOption}
            filterLocations={[{region: 'Москва'}, {region: 'Московская'}]}
            count={this.props.count}
            inputProps={{className: 'input-wrap__input', placeholder: this.props.placeholder, onBlur: this.onBlur, name: input.name}}>
            {this.props.children}
        </AddressSuggestions>
    }

    render() {
        return (
            <Field name={this.props.name} validate={this.props.validate} customTouched={this.state.touched} component={this.renderComponent}/>
        )
    }
}

export default AddressField;