import React from 'react';
import Cargo from "./Cargo";
import {connect} from "react-redux";
import {addPackageThunk, addPalletThunk, addPlaceThunk, setCargoState, setPackage, setPackageTypesThunk, setPallet, setPalletTypesThunk} from "../../redux/cargoReducer";
import {setCategory} from "../../redux/categoryReducer";

class CargoContainer extends React.Component {
    state = {
        activeTab: 1,
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
        this.setState({
            activeTab: tabNumber
        })
    }

    addPallet = () => {
        let pallets = [...this.props.pallets];
        let pallet = {
            pallet_type_id: this.props.selected_pallet,
            quantity: parseInt(this.props.pallet_quantity),
            size: {
                length: this.props.pallet_length,
                width: this.props.pallet_width,
                height: this.props.pallet_height,
                weight: this.props.pallet_weight
            }
        }
        pallets.push(pallet);
        this.props.addPalletThunk(
            this.props.name,
            this.props.price,
            this.props.places,
            pallets,
            this.props.packages,
            this.props.active_body_option,
            this.props.active_body_option_characteristics_values
        );
    }
    
    addPlace = () => {
        let places = [...this.props.places];
        let place = {
            size: {
                length: this.props.place_length,
                width: this.props.place_width,
                height: this.props.place_height,
                weight: this.props.place_weight
            }
        }
        places.push(place);
        this.props.addPlaceThunk(
            this.props.name,
            this.props.price,
            places,
            this.props.pallets,
            this.props.packages,
            this.props.active_body_option,
            this.props.active_body_option_characteristics_values
        );
    }
    
    addPackage = () => {
        let packages = [...this.props.packages];
        let package1 = {
            package_type_id: this.props.selected_package,
            quantity: parseInt(this.props.package_quantity),
            size: {
                length: this.props.package_length,
                width: this.props.package_width,
                height: this.props.package_height,
                weight: this.props.package_weight
            }
        }
        packages.push(package1);
        this.props.addPackageThunk(
            this.props.name,
            this.props.price,
            this.props.places,
            this.props.pallets,
            packages,
            this.props.active_body_option,
            this.props.active_body_option_characteristics_values
        );
    }

    showCargo = (value) => {
        this.setState({
            showCargoValue: value
        });
    }

    render() {
        return (
            <Cargo activeTab={this.state.activeTab} setActiveTab={this.setActiveTab}
                   name={this.props.name}
                   price={this.props.price}

                   palletQuantity={this.props.pallet_quantity}
                   palletLength={this.props.pallet_length}
                   palletWidth={this.props.pallet_width}
                   palletHeight={this.props.pallet_height}
                   palletWeight={this.props.pallet_weight}
                   addPallet={this.addPallet}
                   palletTypes={this.props.pallet_types}
                   pallets={this.props.pallets}

                   placeLength={this.props.place_length}
                   placeWidth={this.props.place_width}
                   placeHeight={this.props.place_height}
                   placeWeight={this.props.place_weight}
                   addPlace={this.addPlace}
                   places={this.props.places}

                   packageQuantity={this.props.package_quantity}
                   packageLength={this.props.package_length}
                   packageWidth={this.props.package_width}
                   packageHeight={this.props.package_height}
                   packageWeight={this.props.package_weight}
                   addPackage={this.addPackage}
                   packageTypes={this.props.package_types}
                   packages={this.props.packages}

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
            />
        );
    };
}

let mapStateToProps = (state) => ({
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
});

export default connect(mapStateToProps, 
    {setPalletTypesThunk, setPackageTypesThunk, setPallet, setPackage, setCargoState, addPalletThunk, addPlaceThunk, addPackageThunk, setCategory})(CargoContainer);