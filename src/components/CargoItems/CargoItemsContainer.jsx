import React from 'react';
import CargoItems from "./CargoItems";
import {connect} from "react-redux";
import {editPackage, editPallet, editPlace, removePackageThunk, removePalletThunk, removePlaceThunk, setActiveTab, updateCargoThunk} from "../../redux/cargoReducer";

class CargoItemsContainer extends React.Component {
    state = {
        listActive: false
    }

    toggleList = () => {
        this.setState({
            listActive: !this.state.listActive
        })
    }

    editPlace = (index, object) => {
        this.props.editPlace(index, object);
    }

    removePlace = (index) => {
        this.props.removePlaceThunk(index);
    }

    editPallet = (index, object) => {
        this.props.editPallet(index, object);
    }

    removePallet = (index) => {
        this.props.removePalletThunk(index);
    }

    editPackage = (index, object) => {
        this.props.editPackage(index, object);
    }

    removePackage = (index) => {
        this.props.removePackageThunk(index);
    }

    render() {
        return (
            <CargoItems pallets={this.props.pallets}
                        places={this.props.places}
                        packages={this.props.packages}
                        palletTypes={this.props.pallet_types}
                        packageTypes={this.props.package_types}
                        listActive={this.state.listActive}
                        toggleList={this.toggleList}
                        editPlace={this.editPlace}
                        removePlace={this.removePlace}
                        editPallet={this.editPallet}
                        removePallet={this.removePallet}
                        editPackage={this.editPackage}
                        removePackage={this.removePackage}
                        editPlaceBool={this.props.editPlaceBool}
                        editPalletBool={this.props.editPalletBool}
                        editPackageBool={this.props.editPackageBool}
                        updateCargo={this.props.updateCargoThunk}
            />
        );
    };
}

let mapStateToProps = (state) => ({
    pallets: state.cargoReducer.pallets,
    places: state.cargoReducer.places,
    packages: state.cargoReducer.packages,
    pallet_types: state.cargoReducer.pallet_types,
    package_types: state.cargoReducer.package_types,
    editPlaceBool: state.cargoReducer.editPlace,
    editPalletBool: state.cargoReducer.editPallet,
    editPackageBool: state.cargoReducer.editPackage,
});

export default connect(mapStateToProps, {setActiveTab, editPlace, removePlaceThunk, editPallet, removePalletThunk, editPackage, removePackageThunk, updateCargoThunk})(CargoItemsContainer);