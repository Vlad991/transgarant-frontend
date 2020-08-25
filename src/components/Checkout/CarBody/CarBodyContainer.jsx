import React from 'react';
import CarBody from "./CarBody";
import {connect} from "react-redux";
import {setActiveBodyType, setBodyOption, setBodyOptionChBoolVal, setBodyOptionChsThunk, setBodyOptionChVal, setBodyOptionsThunk, setBodyTypesThunk, toggleChCollapse, toggleOptionCollapse} from "../../../redux/carBodyReducer";

class CarBodyContainer extends React.Component {

    componentDidMount() {
        this.props.setBodyTypesThunk(this.props.active_category);
        this.props.setBodyOptionsThunk(0, this.props.active_category);
        this.props.setBodyOptionChsThunk(this.props.state.active_body_option, this.props.state.active_body_type, this.props.active_category);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.active_category !== this.props.active_category) {
            this.props.setBodyTypesThunk(this.props.active_category);
            this.props.setBodyOptionsThunk(this.props.state.active_body_type, this.props.active_category);
            this.props.setBodyOptionChsThunk(this.props.state.active_body_option, this.props.state.active_body_type, this.props.active_category);
        }
    }

    setActiveBodyType = async (typeId) => {
        await this.props.setBodyOptionsThunk(typeId, this.props.active_category);
        this.props.setActiveBodyType(typeId);
        this.props.setBodyOptionChsThunk(this.props.state.active_body_option, typeId, this.props.active_category);
    }

    setBodyOption = (optionId) => {
        this.props.setBodyOption(optionId);
        this.props.setBodyOptionChsThunk(optionId, this.props.state.active_body_type, this.props.active_category);
    }

    render() {
        return (
            <CarBody state={this.props.state}

                     setActiveBodyType={this.setActiveBodyType}
                     setBodyOption={this.setBodyOption}
                     setBodyOptionChVal={this.props.setBodyOptionChVal}
                     markBodyOptionCh={this.props.setBodyOptionChBoolVal}
                     toggleOptionCollapse={this.props.toggleOptionCollapse}
                     toggleChCollapse={this.props.toggleChCollapse}/>
        );
    };
}

let mapStateToProps = (state) => ({
    state: state.carBodyReducer,
    active_category: state.categoryReducer.active_category
});

export default connect(mapStateToProps,
    {setActiveBodyType, setBodyOption, setBodyOptionChVal, setBodyOptionChBoolVal, setBodyTypesThunk, setBodyOptionsThunk, setBodyOptionChsThunk, toggleOptionCollapse, toggleChCollapse})(CarBodyContainer);