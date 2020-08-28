import React from 'react';
import {token} from "../../api/dadata-api";
import {AddressSuggestions} from "react-dadata";
import {Field} from "redux-form";

class AddressFieldContainer extends React.Component {
    addressRenderOption = (value) => {
        if (value.data.street) {
            return (
                <span>{value.value}</span>
            )
        }
    }

    render() {
        return (
            <Field name={this.props.name} value={this.props.value} component={({input, meta}) =>
                <AddressSuggestions
                    token={token}
                    value={input.value}
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
                    containerClassName={this.props.elementClass}
                    renderOption={this.addressRenderOption}
                    filterLocations={[{region: 'Москва'}, {region: 'Московская'}]}
                    count={this.props.count}
                    inputProps={{className: 'input-wrap__input', placeholder: this.props.placeholder, name: input.name, value: input.value}}/>}/>
        );
    };
}

export default AddressFieldContainer;