import React from 'react';
import CarBody from "./CarBody";
import {connect} from "react-redux";
import {setActiveBodyType, setBodyOption, setBodyOptionChVal} from "../../redux/carBodyReducer";

class CarBodyContainer extends React.Component {

    setActiveBodyType = (typeId, option = this.props.body_options.find(opt => opt.body_type_id === typeId)) => {
        let optionId;
        if (option) {
            optionId = option.id;
        }
        this.props.setActiveBodyType(typeId, optionId);
    }

    setBodyOption = (optionId) => {
        this.props.setBodyOption(optionId)
    }

    setBodyOptionChVal = (optionChValId, bodyOptionChId) => {
        this.props.setBodyOptionChVal(optionChValId, bodyOptionChId);
    }

    render() {
        return (
            <CarBody bodyTypes={this.props.body_types}
                     activeBodyType={this.props.active_body_type}
                     setActiveBodyType={this.setActiveBodyType}
                     bodyOptions={this.props.body_options}
                     activeBodyOption={this.props.active_body_option}
                     setBodyOption={this.setBodyOption}
                     bodyOptionCharacteristics={this.props.body_option_characteristics}
                     bodyOptionCharacteristicValues={this.props.body_option_characteristics_values}
                     activeBodyOptionCharacteristicValues={this.props.active_body_option_characteristics_values}
                     setBodyOptionChVal={this.setBodyOptionChVal}/>
        );
    };
}

let mapStateToProps = (state) => ({
    body_types: state.carBodyReducer.body_types,
    active_body_type: state.carBodyReducer.active_body_type,
    body_options: state.carBodyReducer.body_options,
    active_body_option: state.carBodyReducer.active_body_option,
    body_option_characteristics: state.carBodyReducer.body_option_characteristics,
    body_option_characteristics_values: state.carBodyReducer.body_option_characteristics_values,
    active_body_option_characteristics_values: state.carBodyReducer.active_body_option_characteristics_values,
});

export default connect(mapStateToProps, {setActiveBodyType, setBodyOption, setBodyOptionChVal})(CarBodyContainer);