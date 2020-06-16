import React from 'react';
import CarBody from "./CarBody";
import {connect} from "react-redux";
import {clearBodyOptionChValues, setActiveBodyType, setBodyOption, setBodyOptionChBoolVal, setBodyOptionChsThunk, setBodyOptionChVal, setBodyOptionChValuesThunk, setBodyOptionsThunk, setBodyTypesThunk} from "../../redux/carBodyReducer";

class CarBodyContainer extends React.Component {

    componentDidMount() {
        this.props.setBodyTypesThunk();
        this.props.setBodyOptionsThunk();
        this.props.setBodyOptionChsThunk(this.props.active_body_option, this.props.active_body_type);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.body_option_characteristics !== this.props.body_option_characteristics) {
            this.props.clearBodyOptionChValues();
            this.props.body_option_characteristics.forEach(char => {
                if (char.type === 'ref') {
                    this.props.setBodyOptionChValuesThunk(char.id);
                }
            });
        }
        if (prevProps.body_option_characteristics_values !== this.props.body_option_characteristics_values) {
            this.props.body_option_characteristics.forEach(char => {
                if (char.type === 'ref') {
                    this.props.setBodyOptionChVal(char.id);
                } else {
                    this.props.setBodyOptionChBoolVal(char.id);
                }
            });
        }
    }

    setActiveBodyType = (typeId, option = this.props.body_options.find(opt => opt.body_type_id === typeId)) => {
        let optionId;
        if (option) {
            optionId = option.id;
        }
        this.props.setActiveBodyType(typeId, optionId);
        this.props.setBodyOptionChsThunk(optionId, typeId);
    }

    setBodyOption = (optionId) => {
        this.props.setBodyOption(optionId);
        this.props.setBodyOptionChsThunk(optionId, this.props.active_body_type);
    }

    setBodyOptionChVal = (bodyOptionChId, optionChValId) => {
        this.props.setBodyOptionChVal(bodyOptionChId, optionChValId);
    }

    markBodyOptionCh = (bodyOptionChId, value) => {
        this.props.setBodyOptionChBoolVal(bodyOptionChId, value);
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
                     setBodyOptionChVal={this.setBodyOptionChVal}
                     markBodyOptionCh={this.markBodyOptionCh}/>
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

export default connect(mapStateToProps,
    {setActiveBodyType, setBodyOption, setBodyOptionChVal, setBodyOptionChBoolVal, setBodyTypesThunk, setBodyOptionsThunk, setBodyOptionChsThunk, setBodyOptionChValuesThunk, clearBodyOptionChValues})(CarBodyContainer);