import React from 'react';
import Cargo from "./Cargo";
import {connect} from "react-redux";
import {addPackageThunk, addPalletThunk, addPlaceThunk, doEditPackageThunk, doEditPalletThunk, doEditPlaceThunk, setActiveTab, setCargoState, setPackage, setPackageTypesThunk, setPallet, setPalletTypesThunk, togglePackageCollapse, togglePalletCollapse} from "../../redux/cargoReducer";
import {setCategory} from "../../redux/categoryReducer";

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
        if (prevProps.activeCategory !== this.props.activeCategory) {
            this.setState({
                categoryChanged: true
            });
        }
    }

    setActiveTab = (tabNumber) => {
        this.props.setActiveTab(tabNumber);
    }

    addPallet = () => {
        this.props.addPalletThunk();
    }

    doEditPallet = () => {
        this.props.doEditPalletThunk();
    }
    
    addPlace = () => {
        this.props.addPlaceThunk();
    }

    doEditPlace = () => {
        this.props.doEditPlaceThunk();
    }
    
    addPackage = () => {
        this.props.addPackageThunk();
    }

    doEditPackage = () => {
        this.props.doEditPackageThunk();
    }

    showCargo = (value) => {
        this.setState({
            showCargoValue: value
        });
    }

    render() {
        return (
            <Cargo activeTab={this.props.activeTab}
                   setActiveTab={this.setActiveTab}
                   name={this.props.name}
                   price={this.props.price}

                   palletQuantity={this.props.pallet_quantity}
                   palletLength={this.props.pallet_length}
                   palletWidth={this.props.pallet_width}
                   palletHeight={this.props.pallet_height}
                   palletWeight={this.props.pallet_weight}
                   addPallet={this.addPallet}
                   palletTypes={this.props.pallet_types}
                   doEditPallet={this.doEditPallet}

                   placeLength={this.props.place_length}
                   placeWidth={this.props.place_width}
                   placeHeight={this.props.place_height}
                   placeWeight={this.props.place_weight}
                   addPlace={this.addPlace}
                   doEditPlace={this.doEditPlace}

                   packageQuantity={this.props.package_quantity}
                   packageLength={this.props.package_length}
                   packageWidth={this.props.package_width}
                   packageHeight={this.props.package_height}
                   packageWeight={this.props.package_weight}
                   addPackage={this.addPackage}
                   packageTypes={this.props.package_types}
                   doEditPackage={this.doEditPackage}

                   selectedPallet={this.props.selected_pallet}
                   selectedPackage={this.props.selected_package}
                   setPallet={this.props.setPallet}
                   setPackage={this.props.setPackage}
                   setCargoState={this.props.setCargoState}

                   categoryChanged={this.state.categoryChanged}
                   activeCategory={this.props.activeCategory}
                   categories={this.props.categories}
                   bodyOptions={this.props.body_options}
                   activeBodyOption={this.props.active_body_option}

                   packedItems={this.props.packed_items}
                   cargoHeight={this.props.cargoHeight}
                   cargoWidth={this.props.cargoWidth}
                   totalWeight={this.props.total_weight}
                   totalVolume={this.props.total_volume}
                   totalArea={this.props.total_area}
                   showCargo={this.showCargo}
                   showCargoValue={this.state.showCargoValue}
                   showPalletCollapse={this.props.showPalletCollapse}
                   showPackageCollapse={this.props.showPackageCollapse}
                   togglePalletCollapse={this.props.togglePalletCollapse}
                   togglePackageCollapse={this.props.togglePackageCollapse}
            />
        );
    };
}

let mapStateToProps = (state) => ({
    activeTab: state.cargoReducer.activeTab,
    name: state.cargoReducer.name,
    price: state.cargoReducer.price,
    cargo: state.cargoReducer.cargo,
    quantity: state.cargoReducer.quantity,
    length: state.cargoReducer.length,
    width: state.cargoReducer.width,
    height: state.cargoReducer.height,

    pallet_quantity: state.cargoReducer.pallet_quantity,
    pallet_length: state.cargoReducer.pallet_length,
    pallet_width: state.cargoReducer.pallet_width,
    pallet_height: state.cargoReducer.pallet_height,
    pallet_weight: state.cargoReducer.pallet_weight,
    pallets: state.cargoReducer.pallets,
    pallet_types: state.cargoReducer.pallet_types,

    place_length: state.cargoReducer.place_length,
    place_width: state.cargoReducer.place_width,
    place_height: state.cargoReducer.place_height,
    place_weight: state.cargoReducer.place_weight,
    places: state.cargoReducer.places,

    package_quantity: state.cargoReducer.package_quantity,
    package_length: state.cargoReducer.package_length,
    package_width: state.cargoReducer.package_width,
    package_height: state.cargoReducer.package_height,
    package_weight: state.cargoReducer.package_weight,
    packages: state.cargoReducer.packages,
    package_types: state.cargoReducer.package_types,

    selected_pallet: state.cargoReducer.selected_pallet,
    selected_package: state.cargoReducer.selected_package,

    active_body_option: state.carBodyReducer.active_body_option,
    body_options: state.carBodyReducer.body_options,
    active_body_option_characteristics_values: state.carBodyReducer.active_body_option_characteristics_values,
    activeCategory: state.categoryReducer.activeCategory,
    categories: state.categoryReducer.categories,

    packed_items: state.cargoReducer.packed_items,
    cargoHeight: state.cargoReducer.cargoHeight,
    cargoWidth: state.cargoReducer.cargoWidth,
    total_weight: state.cargoReducer.total_weight,
    total_volume: state.cargoReducer.total_volume,
    total_area: state.cargoReducer.total_area,
    showPalletCollapse: state.cargoReducer.showPalletCollapse,
    showPackageCollapse: state.cargoReducer.showPackageCollapse
});

export default connect(mapStateToProps, 
    {setActiveTab, setPalletTypesThunk, setPackageTypesThunk, setPallet, setPackage, setCargoState, addPalletThunk, doEditPalletThunk, addPlaceThunk, doEditPlaceThunk, addPackageThunk, doEditPackageThunk, setCategory, togglePalletCollapse, togglePackageCollapse})(CargoContainer);