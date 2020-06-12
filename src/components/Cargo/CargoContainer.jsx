import React from 'react';
import Cargo from "./Cargo";
import {connect} from "react-redux";
import {addPackageThunk, addPalletThunk, addPlaceThunk, setCargoState, setPackage, setPackageTypesThunk, setPallet, setPalletTypesThunk} from "../../redux/cargoReducer";

class CargoContainer extends React.Component {
    state = {
        activeTab: 1
    }

    componentDidMount() {
        this.props.setPalletTypesThunk();
        this.props.setPackageTypesThunk();
    }

    setActiveTab = (tabNumber) => {
        this.setState({
            activeTab: tabNumber
        })
    }

    addPallet = () => {
        let pallets = this.props.pallets;
        let pallet = {
            pallet_type_id: this.props.selected_pallet.id,
            quantity: this.props.pallet_quantity,
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
        let places = this.props.places;
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
        let packages = this.props.packages;
        let package1 = {
            package_type_id: this.props.selected_package.id,
            quantity: this.props.package_quantity,
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

    render() {
        return (
            <Cargo activeTab={this.state.activeTab} setActiveTab={this.setActiveTab}
                   name={this.props.name}
                   price={this.props.price}
                   quantity={this.props.quantity}
                   length={this.props.length}
                   width={this.props.width}
                   height={this.props.height}

                   palletQuantity={this.props.pallet_quantity}
                   palletLength={this.props.pallet_length}
                   palletWidth={this.props.pallet_width}
                   palletHeight={this.props.pallet_height}
                   palletWeight={this.props.pallet_weight}
                   addPallet={this.addPallet}
                   palletTypes={this.props.pallet_types}

                   placeLength={this.props.place_length}
                   placeWidth={this.props.place_width}
                   placeHeight={this.props.place_height}
                   placeWeight={this.props.place_weight}
                   addPlace={this.addPlace}

                   packageQuantity={this.props.package_quantity}
                   packageLength={this.props.package_length}
                   packageWidth={this.props.package_width}
                   packageHeight={this.props.package_height}
                   packageWeight={this.props.package_weight}
                   addPackage={this.addPackage}
                   packageTypes={this.props.package_types}

                   selectedPallet={this.props.selected_pallet}
                   selectedPackage={this.props.selected_package}
                   setPallet={this.props.setPallet}
                   setPackage={this.props.setPackage}
                   setCargoState={this.props.setCargoState}
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
    active_body_option_characteristics_values: state.carBodyReducer.active_body_option_characteristics_values
});

export default connect(mapStateToProps, 
    {setPalletTypesThunk, setPackageTypesThunk, setPallet, setPackage, setCargoState, addPalletThunk, addPlaceThunk, addPackageThunk})(CargoContainer);