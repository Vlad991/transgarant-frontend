import React from 'react';
import Cargo from "./Cargo";
import {connect} from "react-redux";
import {addPackageThunk, addPalletThunk, addPlaceThunk, setActiveTab, setCargoState, setPackage, setPackageTypesThunk, setPallet, setPalletTypesThunk, togglePackageCollapse, togglePalletCollapse} from "../../../redux/checkout/cargoReducer";
import {setCategory} from "../../../redux/checkout/categoryReducer";
import AlertContainer from "../Allert/AlertContainer";

class CargoContainer extends React.Component {
    state = {
        categoryChanged: false,
        showCargoValue: false
    }

    componentDidMount() {
        this.props.setPalletTypesThunk();
        this.props.setPackageTypesThunk();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.active_category !== this.props.active_category) {
            this.setState({
                categoryChanged: true
            });
        }
    }

    showCargo = (value) => {
        this.setState({
            showCargoValue: value
        });
    }

    render() {
        let hasError = this.props.error_mode && (this.props.state.packed_items.length === 0);
        return (
            <>
                <Cargo state={this.props.state}
                       categories={this.props.categories}
                       activeCategory={this.props.active_category}
                       bodyOptions={this.props.body_options}
                       activeBodyOption={this.props.active_body_option}
                       bodyOptionCh={this.props.body_option_characteristics}
                       categoryChanged={this.state.categoryChanged}
                       showCargoValue={this.state.showCargoValue}

                       setActiveTab={this.props.setActiveTab}
                       addPallet={this.props.addPalletThunk}
                       addPlace={this.props.addPlaceThunk}
                       addPackage={this.props.addPackageThunk}
                       setPallet={this.props.setPallet}
                       setPackage={this.props.setPackage}
                       setCargoState={this.props.setCargoState}
                       showCargo={this.showCargo}
                       togglePalletCollapse={this.props.togglePalletCollapse}
                       togglePackageCollapse={this.props.togglePackageCollapse}
                       hasError={hasError}
                />
                {hasError ? <AlertContainer index={2} text="Ошибка: не добавлен груз для перевозки"/> : null}
            </>
        );
    };
}

let mapStateToProps = (state) => ({
    state: state.cargoReducer,
    categories: state.categoryReducer.categories,
    active_category: state.categoryReducer.active_category,
    body_options: state.carBodyReducer.body_options,
    active_body_option: state.carBodyReducer.active_body_option,
    body_option_characteristics: state.carBodyReducer.body_option_characteristics,
    error_mode: state.clientFormReducer.error_mode
});

export default connect(mapStateToProps,
    {setActiveTab, setPalletTypesThunk, setPackageTypesThunk, setPallet, setPackage, setCargoState, addPalletThunk, addPlaceThunk, addPackageThunk, setCategory, togglePalletCollapse, togglePackageCollapse})(CargoContainer);