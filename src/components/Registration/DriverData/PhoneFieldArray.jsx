import React from 'react';
import {FieldArray} from "redux-form";
import PhoneField from "../../Elements/PhoneField";

class PhoneFieldArray extends React.Component {
    addPhone = (fields) => {
        if (fields.length < 3) fields.push('');
        this.setState({fields});
    }

    removePhone = (fields, index) => {
        fields.splice(index, 1);
        this.setState({fields});
    }

    render() {
        return <FieldArray name="driver_phones" component={({fields, meta}) => {
            return fields.map((field, index, fields) => {
                return <PhoneField key={index}
                                   className="driver-data__field driver-data__phone"
                                   name={field}
                                   placeholder="Номер телефона">
                    {index > 0 && <button onClick={() => this.removePhone(fields, index)} className="input-wrap__remove-phone">+</button>}
                    {fields.length === (index + 1) && fields.length !== 3 && <button type="button" onClick={() => this.addPhone(fields)} className="input-wrap__add-phone">+</button>}
                </PhoneField>
            });
        }}/>
    }
}

export default PhoneFieldArray;