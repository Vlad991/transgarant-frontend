import React from 'react';
import CarBody from "./CarBody";
import {connect} from "react-redux";
import {setActiveBodyType, setBodyOption, setBodyOptionChBoolVal, setBodyOptionChsThunk, setBodyOptionChVal, setBodyOptionsThunk, setBodyTypesThunk} from "../../redux/carBodyReducer";

class CarBodyContainer extends React.Component {

    componentDidMount() {
        this.props.setBodyTypesThunk(this.props.activeCategory);
        this.props.setBodyOptionsThunk(0, this.props.activeCategory);
        this.props.setBodyOptionChsThunk(this.props.active_body_option, this.props.active_body_type, this.props.activeCategory);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.activeCategory !== this.props.activeCategory) {
            this.props.setBodyTypesThunk(this.props.activeCategory);
            this.props.setBodyOptionsThunk(this.props.active_body_type, this.props.activeCategory);
            this.props.setBodyOptionChsThunk(this.props.active_body_option, this.props.active_body_type, this.props.activeCategory);
        }
        // if (prevProps.body_option_characteristics_values !== this.props.body_option_characteristics_values) {
        //     this.props.body_option_characteristics.forEach(char => {
        //         if (char.type === 'ref') {
        //             this.props.setBodyOptionChVal(char.id);
        //         } else {
        //             this.props.setBodyOptionChBoolVal(char.id);
        //         }
        //     });
        // }
    }

    setActiveBodyType = async (typeId) => {
        await this.props.setBodyOptionsThunk(typeId, this.props.activeCategory);
        this.props.setActiveBodyType(typeId);
        this.props.setBodyOptionChsThunk(this.props.active_body_option, typeId, this.props.activeCategory);
    }

    setBodyOption = (optionId) => {
        this.props.setBodyOption(optionId);
        this.props.setBodyOptionChsThunk(this.props.active_body_option, optionId, this.props.activeCategory);
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
                     setBodyOptionChVal={this.setBodyOptionChVal}
                     markBodyOptionCh={this.markBodyOptionCh}/>
        );
    };
}

let mapStateToProps = (state) => ({
    activeCategory: state.categoryReducer.activeCategory,
    body_types: state.carBodyReducer.body_types,
    active_body_type: state.carBodyReducer.active_body_type,
    body_options: state.carBodyReducer.body_options,
    active_body_option: state.carBodyReducer.active_body_option,
    body_option_characteristics: state.carBodyReducer.body_option_characteristics,
});

export default connect(mapStateToProps,
    {setActiveBodyType, setBodyOption, setBodyOptionChVal, setBodyOptionChBoolVal, setBodyTypesThunk, setBodyOptionsThunk, setBodyOptionChsThunk})(CarBodyContainer);